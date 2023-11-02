import React from "react";

const TaskCard = () => {
  // Defining tasks 
  const tasks = [
    { id: 1, projectName: "Project 1", description: "Short description 1", assignedTo: "John", date: "2023-11-02", status: "To Do" },
    { id: 2, projectName: "Project 2", description: "Short description 2", assignedTo: "Alice", date: "2023-11-03", status: "To Do" },
    { id: 3, projectName: "Project 3", description: "Short description 3", assignedTo: "Bob", date: "2023-11-04", status: "in-progress" },
    { id: 4, projectName: "Project 4", description: "Short description 4", assignedTo: "Eve", date: "2023-11-05", status: "done" },
    { id: 5, projectName: "Project 5", description: "Short description 5", assignedTo: "Alice", date: "2023-11-06", status: "done" },
    
  ];

  return (
    <div className="flex space-x-4">
      <div className="w-1/3">
        <h2 className="text-xl font-semibold">To Do</h2>
        <ul>
          {tasks
            .filter((task) => task.status === "To Do")
            .map((task) => (
              <li key={task.id}>
                <div className="bg-white p-4 mb-4 rounded shadow">
                  <h3 className="text-lg font-semibold">{task.projectName}</h3>
                  <p>{task.description}</p>
                  <p>Assigned to: {task.assignedTo}</p>
                  <p>Date: {task.date}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="w-1/3">
        <h2 className="text-xl font-semibold">In Progress</h2>
        <ul>
          {tasks
            .filter((task) => task.status === "in-progress")
            .map((task) => (
              <li key={task.id}>
                <div className="bg-white p-4 mb-4 rounded shadow">
                  <h3 className="text-lg font-semibold">{task.projectName}</h3>
                  <p>{task.description}</p>
                  <p>Assigned to: {task.assignedTo}</p>
                  <p>Date: {task.date}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="w-1/3">
        <h2 className="text-xl font-semibold">Done</h2>
        <ul>
          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <li key={task.id}>
                <div className="bg-white p-4 mb-4 rounded shadow">
                  <h3 className="text-lg font-semibold">{task.projectName}</h3>
                  <p>{task.description}</p>
                  <p>Assigned to: {task.assignedTo}</p>
                  <p>Date: {task.date}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskCard;