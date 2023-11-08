import React, { useState } from "react";

const TaskCard = ({tasks}) => {

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