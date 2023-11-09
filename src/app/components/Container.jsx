import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskContainer from "./TaskContainer";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vumfiwtseuqdsodbaghp.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Container = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase
        .from("tasks")
        .select();

      if (error) {
        console.error("Error fetching tasks: ", error);
      } else {
        setTasks(data);
      }
    }

    fetchTasks();
  }, []);

  const handleDragEnd = async (result) => {
    if (!result.destination) {
      return;
    }

    const sourceColumn = result.source.droppableId;
    const destinationColumn = result.destination.droppableId;
    const taskId = parseInt(result.draggableId); // this literally sucks

    // we make two copies of the task list here - we keep one "pure" (i.e. don't change it) and the other we'll update
    // if there's an error during the update procedure, we can just revert to the pure copy
    const pureCopy = [...tasks];
    const updatedTasks = [...tasks];
    
    const queuedUpdates = [];

    if (sourceColumn !== destinationColumn) {
      // we've swapped the columns this task belongs to, so let's move it into the right one!
      updatedTasks.find((task) => task.id === taskId).taskType = destinationColumn;

      queuedUpdates.push(
        supabase
          .from("tasks")
          .update({ taskType: destinationColumn })
          .eq("id", taskId)
      );
    }

    if (result.source.index !== result.destination.index) {
      // we've moved its index now! weeeeee
      updatedTasks.find((task) => task.id === taskId).order = result.destination.index;

      queuedUpdates.push(
        supabase
          .from("tasks")
          .update({ order: result.destination.index })
          .eq("id", taskId)
      );
    }

    // we optimistically update...
    setTasks(updatedTasks);

    // send the requests to supabase...
    const results = await Promise.all(queuedUpdates);

    for (const result of results) {
      if (result.error) {
        // and if all hell breaks loose, we revert to the pure copy
        console.error("Error updating task: ", result.error);
        setTasks(pureCopy);
        break;
      } 
    }
  };

  function taskSorter(a, b) {
    if (a.order > b.order) return 1;
    if (b.order > a.order) return -1;
    return 0;
  }

  return (
    <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
      <div className="grid grid-cols-3 gap-0 md:gap-4">
        <TaskContainer type="To Do" tasks={tasks.filter(t => t.taskType === "To Do").sort(taskSorter)} />
        <TaskContainer type="Doing" tasks={tasks.filter(t => t.taskType === "Doing").sort(taskSorter)} />
        <TaskContainer type="Done" tasks={tasks.filter(t => t.taskType === "Done").sort(taskSorter)} />
      </div>
    </DragDropContext>
  );
};

export default Container;
