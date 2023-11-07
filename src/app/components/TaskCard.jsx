import React from "react";

const TaskCard = () => {
  // Defining tasks
  const tasks = [
    {
      id: 1,
      listPosition: 1,
      taskTitle: "Pick up dry cleaning",
      taskCategory: "Errands",
      notes: "Pick up suits. Dry cleaner opens at 8.30",
      dueDate: "2023-11-10",
      taskUrgency: "high",
      status: "To Do",
    },
    {
      id: 2,
      listPosition: 2,
      taskTitle: "Book GP appointment",
      taskCategory: "Errands",
      notes: "Need to get my knee sorted out. Call at 8.30am Thursday for same day appointment",
      dueDate: "2023-11-15",
      taskUrgency: "high",
      status: "To Do",
      
    },
    {
      id: 3,
      listPosition: 3,
      taskTitle: "Look up flights",
      taskCategory: "Errands",
      notes: "BHX/EMA - ??",
      dueDate: "2023-11-20",
      taskUrgency: "medium",
      status: "in-progress",
    },
    {
      id: 4,
      listPosition: 4,
      taskTitle: "Another Task",
      taskCategory: "Home",
      notes: "",
      dueDate: "2023-11-05",
      taskUrgency: "low",
      status: "done",
    },
    {
      id: 5,
      listPosition: 5,
      taskTitle: "Install node on laptop",
      taskCategory: "Work",
      notes: "",
      dueDate: "2023-11-06",
      taskUrgency: "high",
      status: "done",
    },
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
