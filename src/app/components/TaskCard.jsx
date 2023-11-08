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
        {tasks && tasks.map((task) => (
          <li className="p-4 mb-4 bg-white rounded shadow cursor-pointer card" key={task.id}>
            <a onClick={() => openCardOverlay(task)}>
            <div className="">
              <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
              <p className="hidden md:block">{task.comment}</p>
              <p className="text-xs text-right text-slate-500">Due on: {task.dueDate}</p>
            </div>
            </a>
          </li>
        ))}
      </ul>

      {selectedTask && (
        <div className="p-4 mb-4 bg-white border-2 rounded shadow overlay">
          <div className="bg-white rounded card-overlay">
            <h3 className="text-lg font-semibold">{selectedTask.taskTitle}</h3>
            <p>{selectedTask.comment}</p>
            <p className="my-1 text-xs text-right text-slate-500">Due on: {selectedTask.dueDate}</p>
            <button className="" onClick={closeCardOverlay}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard; 