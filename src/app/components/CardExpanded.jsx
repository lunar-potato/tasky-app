import React from "react";

const TaskOverlay = ({ task, onCloseOverlay }) => {
  return (
    <div className="task-overlay">
      <div className="overlay-content">
        <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
        <p>{task.notes}</p>
        <p>Category: {task.taskCategory}</p>
        <p>Priority: {task.taskUrgency}</p>
        <p>Date: {task.dueDate}</p>
        <p>Status: {task.status}</p>
        <button onClick={onCloseOverlay}>Close</button>
      </div>
    </div>
  );
};

export default TaskOverlay;
