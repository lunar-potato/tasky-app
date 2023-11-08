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
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
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
        <div className="fixed flex overlay z-25 bg-black/70">
          <div className="w-11/12 p-4 pr-6 mb-4 bg-white rounded shadow card-overlay md:w-5/12">
            <button className="absolute text-black cursor-pointer hover:text-teal-500 top-2 right-2" onClick={closeCardOverlay}>
              <X size={24} /> {/* Use the Lucide "X" icon */}
            </button>
            <h3 className="text-3xl font-semibold">{selectedTask.taskTitle}</h3>
            <p>{selectedTask.comment}</p>
            <p className="my-1 text-xs text-right text-slate-500">
              Due on: {selectedTask.dueDate}
            </p>
            <p className="my-1 text-xs text-right text-slate-500">
             Priority: {selectedTask.priority}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
