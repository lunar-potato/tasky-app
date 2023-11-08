import React, { useState } from "react";

const TaskCard = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);

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
  {tasks && tasks.map((task) => (
    <li className="card" key={task && task.id}>
            <a onClick={() => openCardOverlay(task)}>
              <div className="p-4 mb-4 bg-white rounded shadow">
                {task && task.taskTitle && (
                  <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
                )}
                {task && task.comment && (
                  <p className="invisible md:visible ">{task.comment}</p>
                )}
                <p>Category: {task && task.taskCategory}</p>
                <p>Priority: {task && task.priority}</p>
                <p>Date: {task && task.dueDate}</p>
                <p>Status: {task && task.taskType}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {selectedTask && (
        <div className="overlay">
          <div className="card-overlay">
            {selectedTask && selectedTask.taskTitle && (
              <h3 className="text-lg font-semibold">{selectedTask.taskTitle}</h3>
            )}
            {selectedTask && selectedTask.comment && (
              <p>{selectedTask.comment}</p>
            )}
            <p>Category: {selectedTask && selectedTask.taskCategory}</p>
            <p>Priority: {selectedTask && selectedTask.priority}</p>
            <p>Date: {selectedTask && selectedTask.dueDate}</p>
            <p>Status: {selectedTask && selectedTask.taskType}</p>
            <button onClick={closeCardOverlay}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
