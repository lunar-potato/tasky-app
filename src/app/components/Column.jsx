import React from "react";
import TaskContainer from "./TaskContainer";
import { MoreVertical } from "lucide-react";

const Column = ({ title, tasks }) => {
  return (
    <div className="p-4 m-4 rounded shadow-lg bg-slate-500">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-4xl font-bold">{title}</h4>
        <MoreVertical className="hover:text-white"/>
      </div>
      <div className="grid">
        <TaskContainer tasks={tasks} />
      </div>
      <div>
        <button className="flex items-start font-bold hover:text-white">+ Add Card</button>
      </div>
    </div>
  );
};

export default Column;