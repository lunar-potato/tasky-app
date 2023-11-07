import React, { useState } from "react";

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

  const [selectedTask, setSelectedTask] = useState(null);
    console.log(selectedTask);
    
  const openCardOverlay = (task) => {
    setSelectedTask(task);
    const overlayElements = document.getElementsByClassName('overlay');

for (let i = 0; i < overlayElements.length; i++) {
  overlayElements[i].style.display = 'block';
}
  };

  const closeCardOverlay = () => {
    setSelectedTask(null);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li className="card" key={task.id}>
            <a onClick={() => openCardOverlay(task)}>
            <div className="p-4 mb-4 bg-white rounded shadow">
              <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
              <p>{task.notes}</p>
              <p>Category: {task.taskCategory}</p>
              <p>Priority: {task.taskUrgency}</p>
              <p>Date: {task.dueDate}</p>
              <p>Status: {task.status}</p>
            </div>
            </a>
          </li>
        ))}
      </ul>

      {selectedTask && (
        <div className="overlay">
          <div className="card-overlay">
            <h3 className="text-lg font-semibold">{selectedTask.taskTitle}</h3>
            <p>{selectedTask.notes}</p>
            <p>Category: {selectedTask.taskCategory}</p>
            <p>Priority: {selectedTask.taskUrgency}</p>
            <p>Date: {selectedTask.dueDate}</p>
            <p>Status: {selectedTask.status}</p>
            <button onClick={closeCardOverlay}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard; 