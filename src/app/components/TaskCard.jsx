import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2 } from "lucide-react"; // Import the Lucide "X" icon
import { deleteTask } from "./TaskService"; // Import the deleteTask function

const TaskCard = ({ tasks, supabaseUrl, supabaseKey }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const openCardOverlay = (task) => {
    setSelectedTask(task);
  };

  const closeCardOverlay = () => {
    setSelectedTask(null);
  };

  const handleDelete = async (taskId) => {
    try {
      const { success, error } = await deleteTask(taskId, supabaseUrl, supabaseKey);

      if (success) {
        // Task deleted successfully
        console.log("Task deleted successfully.");
      } else {
        console.error("Error deleting task:", error);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
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
                          <Trash2
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent opening overlay
                              handleDelete(task.id);
                            }}
                            className="hover:text-red-500 text-xl absolute top-2 right-2" // Applying hover effect, change color to red, and position to top-right
                          />
                          <p className="hidden md:block">{task.comment}</p>
                          <p className="hidden text-xs text-right md:block text-slate-500">
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
