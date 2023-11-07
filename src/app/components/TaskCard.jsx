import React from "react";

const TaskCard = () => {
  // Defining tasks
  const tasks = [
    
  ];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div className="p-4 mb-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
            <p>{task.notes}</p>
            <p>Category: {task.taskCategory}</p>
            <p>Priority: {task.taskUrgency}</p>
            <p>Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskCard;
