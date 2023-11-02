import React from "react";
import TaskCard from "./TaskCard";
import { MoreVertical } from "lucide-react";

// Default Placeholder tasks
const tasks = [{ title: "To Do" }, { title: "Doing" }, { title: "Done" }];

const TaskContainer = ({ title }) => {
  const taskData = tasks.find((taskItem) => taskItem.title === title);
  
  return (
    <div className="flex justify-between p-4 m-4 rounded shadow-lg bg-slate-500">
      <h4 className="text-4xl font-bold">{title}</h4>
      <MoreVertical className="p-1 w-9 h-9" />
      <div className="grid">
        <TaskCard tasks={taskData} />
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task, index) => (
        <TaskContainer key={index} title={task.title} />
      ))}
    </div>
  );
};

export default Container;
