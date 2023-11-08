import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Import the Lucide "X" icon

const TaskCard = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  console.log(selectedTask);

  const openCardOverlay = (task) => {
    setSelectedTask(task);
    const overlayElements = document.getElementsByClassName("overlay");

    for (let i = 0; i < overlayElements.length; i++) {
      overlayElements[i].style.display = "block";
    }
  };

  const closeCardOverlay = () => {
    setSelectedTask(null);
  };

  return (
    <div>
      <ul>
        {tasks &&
          tasks.map((task, index) => (
            <AnimatePresence>
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.1 }}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="p-4 mb-4 bg-white rounded shadow cursor-pointer card"
                  key={task.id}
                >
                  <a onClick={() => openCardOverlay(task)}>
                    <div className="">
                      <h3 className="text-lg font-semibold">
                        {task.taskTitle}
                      </h3>
                      <p className="hidden md:block">{task.comment}</p>
                      <p className="hidden text-xs text-right md:block text-slate-500">
                        Due on: {task.dueDate}
                      </p>
                    </div>
                  </a>
                </motion.li>
              )}
            </Draggable>
            </AnimatePresence>
          ))}
      </ul>

      {selectedTask && (
        <div className="overlay">
          <div className="p-4 mb-4 bg-white rounded shadow card-overlay">
            <h3 className="text-lg font-semibold">{selectedTask.taskTitle}</h3>
            <p>{selectedTask.comment}</p>
            <p className="my-1 text-xs text-right text-slate-500">
              Due on: {selectedTask.dueDate}
            </p>
            {/*<p>Priority: {selectedTask.priority}</p>*/}
            <button className="text-black cursor-pointer hover:text-teal-500" onClick={closeCardOverlay}>
              <X size={24} /> {/* Use the Lucide "X" icon */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
