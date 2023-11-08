import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { MoreVertical } from "lucide-react";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
import AddTask from "./AddTask";

const supabaseUrl = "https://vumfiwtseuqdsodbaghp.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const TaskContainer = ({ type }) => {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase
        .from("tasks")
        .select()
        .eq("taskType", type);

      if (error) {
        console.error("Error fetching tasks: ", error);
      } else {
        setTasks(data);
      }
    }

    fetchTasks();
  }, [type]);

  const addTaskCallback = (newTask) => {
    console.log("Adding task:", newTask);
    setTasks([...tasks, newTask]);
    setShowAddTaskModal(false); 
  }; 

  return (
    <div className="p-2 border-white border-x-2 md:border-x-0 lg:m-4 md:shadow-lg md:p-4 md:rounded bg-slate-500">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xl font-bold text-white md:text-3xl">{type}</h4>
        <button className="text-white hover:text-teal-200">
          <MoreVertical className="w-9 h-9" />
        </button>
      </div>
      <ul>
        <TaskCard tasks={tasks} /> 
      </ul>
      <div>
        <button
          className="flex items-start font-bold text-white hover:text-teal-200"
          onClick={() => setShowAddTaskModal(true)}
        >
          + Add Task
        </button>
        {showAddTaskModal && (
          <TaskModal 
          isOpen={showAddTaskModal}
          onClose={() => setShowAddTaskModal(false)}
          >
            <AddTask onClose={addTaskCallback} />
          </TaskModal>
        )}
        </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="grid grid-cols-3 gap-0 md:gap-4">
      <TaskContainer type="To Do" />
      <TaskContainer type="Doing" />
      <TaskContainer type="Done" />
    </div>
  );
};

export default Container;