import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskContainer from "./TaskContainer";

const Container = () => {
  const handleDragEnd = async (result, tasks, setTasks) => {
    if (!result.destination) {
      return;
    }

    const sourceColumn = result.source.droppableId;
    const destinationColumn = result.destination.droppableId;

    const updatedTasks = [...tasks];
    const [reorderedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedTask);

    updatedTasks.forEach((task, index) => {
      task.order = index;
    });

    setTasks(updatedTasks);

    const newOrder = updatedTasks.map((task) => ({
      id: task.id,
      order: task.order,
    }));

    const { error } = await supabase
      .from("tasks")
      .upsert(newOrder, { onConflict: ["id"], returning: "minimal" });

    if (error) {
      console.error("Error updating task order: ", error);
    }

    if (sourceColumn !== destinationColumn) {
      const taskToMove = tasks[result.source.index];

      const { error } = await supabase
        .from("tasks")
        .update({ taskType: destinationColumn })
        .eq("id", taskToMove.id);

      if (error) {
        console.error("Error updating task type: ", error);
      }
    }
  };

  const [tasks, setTasks] = useState([]);

  return (
    <DragDropContext onDragEnd={(result) => handleDragEnd(result, tasks, setTasks)}>
      <div className="grid grid-cols-3 gap-0 md:gap-4">
        <TaskContainer type="To Do" droppableId="todo" tasks={tasks} setTasks={setTasks} />
        <TaskContainer type="Doing" droppableId="doing" tasks={tasks} setTasks={setTasks} />
        <TaskContainer type="Done" droppableId="done" tasks={tasks} setTasks={setTasks} />
      </div>
    </DragDropContext>
  );
};

export default Container;
