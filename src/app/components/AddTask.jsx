import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createClient } from "@supabase/supabase-js";
import TaskCard from "./TaskCard";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    taskTitle: "",
    comment: "",
    dueDate: null,
  });

  const supabaseUrl = "https://vumfiwtseuqdsodbaghp.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data, err } = await supabase.from("tasks").select();
    if (err) {
      console.err("Error fetching tasks from Supabase: ", err);
    } else {
      setTasks(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle: formData.taskTitle,
      comment: formData.comment,
      dueDate: formData.dueDate || null,
    };

    const { data, err } = await supabase.from("tasks").insert(newTask).select();

    if (err) {
      console.err("Error adding task to Supabase: ", err);
    } else {
      console.log("Task added to Supabase: ", data);
      console.log("Current Tasks: ", tasks);
      setTasks([...tasks, data[0]]);
      setFormData({ taskTitle: "", comment: "", dueDate: null });
    }
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-4 rounded shadow-sm bg-sky-100"
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Task Title</label>
          <input
            className="block w-full px-4 py-3 pr-8 leading-tight border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-300"
            type="text"
            placeholder="Title"
            value={formData.taskTitle}
            onChange={(e) =>
              setFormData({ ...formData, taskTitle: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Description</label>
          <textarea
            className="block w-full px-4 py-3 pr-8 leading-tight border border-gray-200 rounded appearance-none focus:outline-none focus:border-gray-300"
            maxLength="300"
            placeholder="Comment/Description of Task"
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">
            Creation Date
          </label>
          <DatePicker
            selected={formData.dueDate}
            onChange={(date) => setFormData({ ...formData, dueDate: date })}
            dateFormat="dd/MM/yyyy"
            isClearable
            placeholderText="Select a date"
            className="block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-300"
          />
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-400 focus:outline-none focus:shadow-outline"
        >
          Add Task
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;