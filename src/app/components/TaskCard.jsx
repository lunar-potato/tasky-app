import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Maximize } from "lucide-react"; 
import { deleteTask } from "./TaskService"; 

const TaskCard = ({ tasks, supabaseUrl, supabaseKey, droppableId }) => {
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
        console.log("Task deleted successfully.");
        window.location.reload();
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
            /*<AnimatePresence>*/
              <Draggable key={task.id} draggableId={`${droppableId}-${task.id}`} index={index}>
                {(provided) => (
                  //<motion.li
                  <li
                    //whileHover={{ scale: 1.05 }}
                    //transition={{ duration: 0.1 }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`p-4 mb-4 bg-white rounded shadow cursor-pointer card ${task.priority}`} 
                    key={task.id} >
                      <div>
                        <h3 className="text-lg font-semibold">
                          {task.taskTitle}
                        </h3>
                          
                        <p className="hidden md:block">{task.comment}</p>
                        <div className="flex justify-between mt-2 details-toolbar md:mt-4">
                          <div className="relative justify-between hidden lg:block card-details text-slate-500">
                            <button className={`cursor-pointer priority-label px-2 py-1 my-1 mr-2 text-xs text-white rounded full ${task.priority}`}>
                              Priority: {task.priority}
                            </button>
                            <button className="px-2 py-1 my-1 mr-2 text-xs text-white bg-blue-400 rounded cursor-pointer full">
                              Due on: {task.dueDate}
                            </button>
                          </div>
                          <div className="relative flex content-end justify-end card-toolbar">  
                            <Trash2 onClick={() => {
                                //e.stopPropagation(); // Prevent opening overlay
                                handleDelete(task.id);
                            }} className="ml-1 cursor-pointer hover:text-red-500" alt="Delete Task" />
                            <a className="ml-1 cursor-pointer hover:text-teal-500" onClick={() => openCardOverlay(task)}><Maximize /></a>
                          </div>
                        </div>
                      </div>
                {/*</motion.li>*/}
                </li>
                )}
              </Draggable>
            /*</AnimatePresence>*/
          ))}
      </ul>

      {selectedTask && (
        <div className="fixed z-50 flex overlay bg-black/70">
          <div className="w-11/12 p-4 pr-6 mb-4 bg-white rounded shadow card-overlay md:w-5/12">
            <button className="absolute text-black cursor-pointer hover:text-teal-500 top-2 right-2" onClick={closeCardOverlay}>
              <X size={24} /> {/* Use the Lucide "X" icon */}
            </button>
            <h3 className="mb-2 text-3xl font-semibold">{selectedTask.taskTitle}</h3>
            <p>{selectedTask.comment}</p>
            <div className="flex justify-between mt-2 details-toolbar md:mt-4">
              <div className="relative justify-between hidden lg:block card-details text-slate-500">
                <button className={`cursor-default priority-label px-2 py-1 my-1 mr-2 text-xs text-white rounded full ${selectedTask.priority}`}>
                  Priority: {selectedTask.priority}
                </button>
                <button className="px-2 py-1 my-1 mr-2 text-xs text-white bg-blue-400 rounded cursor-default cursor-dedault full">
                  Due on: {selectedTask.dueDate}
                </button>
              </div>
              <div className="relative flex content-end justify-end card-toolbar">  
                <Trash2 onClick={() => {
                    //e.stopPropagation(); // Prevent opening overlay
                    handleDelete(selectedTask.id);
                }} className="ml-1 cursor-pointer hover:text-red-500" alt="Delete Task" />
              </div>
            </div>


          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
