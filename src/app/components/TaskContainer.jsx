import React from "react";
import { MoreVertical } from "lucide-react";

const TaskContainer = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between max-w-sm overflow-hidden rounded shadow-lg bg-slate-400">
        <div className="grid grid-cols-4 gap-5 my-5">
          <div>
            <h4 className="flex items-center justify-between">To do:
            <MoreVertical className=""></MoreVertical>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
