import React from "react";

const TaskCard = ({ tasks }) => {
  return (
    <ul>
      {tasks && tasks.map((task) => (
        <li key={task.id}>
          <div className="p-4 mb-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
            <p>{task.comment}</p>
            <p>Priority: {task.priority}</p>
            <p>Date: {task.dueDate}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskCard;
