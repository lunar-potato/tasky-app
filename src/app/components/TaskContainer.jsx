import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { MoreVertical } from "lucide-react";
import TaskCard from "./TaskCard"; // Import the TaskCard component

const supabaseUrl = "https://vumfiwtseuqdsodbaghp.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const TaskContainer = ({ type }) => {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="p-4 m-4 rounded shadow-lg bg-slate-500">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-4xl font-bold">{type}</h4>
        <button className="hover:text-white">
          <MoreVertical className="w-9 h-9" />
        </button>
      </div>
      <ul>
        <TaskCard tasks={tasks} /> {/* Pass tasks as a prop to TaskCard */}
      </ul>
      <div>
        <button className="flex items-start font-bold hover:text-white">+ Add Card</button>
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <TaskContainer type="To Do" />
      <TaskContainer type="Doing" />
      <TaskContainer type="Done" />
    </div>
  );
};

export default Container;
