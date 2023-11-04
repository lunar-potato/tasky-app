import React from "react";

const TaskCard = () => {
  // Defining tasks
  const tasks = [
    {
      id: 1,
      projectName: "Project 1",
      description: "Short description 1",
      assignedTo: "John",
      date: "2023-11-02",
      status: "To Do",
    },
  ]

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div className="p-4 mb-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">{task.projectName}</h3>
            <p>{task.description}</p>
            <p>Assigned to: {task.assignedTo}</p>
            <p>Date: {task.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskCard;
