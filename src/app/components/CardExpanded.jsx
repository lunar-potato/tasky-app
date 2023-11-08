import React from "react";

const TaskOverlay = ({ task, onCloseOverlay }) => {
  return (
    <div className="task-overlay">
      <div className="overlay-content">
        <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
        <p>{task.notes}</p>
        <p className="hidden my-1 text-xs text-right text-slate-500 md:block">Due on: {selectedTask.dueDate}</p>
        <button className="cursor-pointer" onClick={onCloseOverlay}>Close</button>
      </div>
    </div>
  );
};

//is this file used? looks like expanded card is handled in taskcard

export default TaskOverlay;
