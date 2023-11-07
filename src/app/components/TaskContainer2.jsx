import React from "react";
import TaskCard2 from "./TaskCard2";
import { MoreVertical } from "lucide-react";

// Default Placeholder tasks
const tasks = [{ title: "To Do" }, { title: "Doing" }, { title: "Done" }];

const TaskContainer2 = ({ title }) => {
  const taskData = tasks.find((taskItem) => taskItem.title === title);

  return (
    <div className="p-4 m-4 rounded shadow-lg bg-slate-500">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-4xl font-bold">{title}</h4>
        <button className="hover:text-white">
          <MoreVertical className="w-9 h-9" />
        </button>
      </div>
      <div className="grid">
        <TaskCard2 tasks={taskData} />
      </div>
      <div>
        <button className="flex items-start font-bold hover:text-white">+ Add Card</button>
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task, index) => (
        <TaskContainer2 key={index} title={task.title} />
      ))}
    </div>
  );
};

export default Container;