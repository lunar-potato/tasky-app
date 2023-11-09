import React, { useState, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
import AddTask from "./AddTask";


const TaskContainer = ({ type, tasks }) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <div className="p-2 border-white border-x-2 md:border-x-0 xl:m-4 md:shadow-lg xl:p-4 md:rounded bg-slate-500">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xl font-bold text-white md:text-3xl">{type}</h4>
        {/*<button className="text-white hover:text-teal-200">
          <MoreVertical className="w-9 h-9" />
        </button>*/}
      </div>

        <Droppable droppableId={type}>
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              <TaskCard tasks={tasks} />
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

      <div>
        <button
          className="flex items-start font-bold text-white hover:text-teal-200"
          onClick={() => setShowAddTaskModal(true)}
        >
          + Add Task
        </button>
        {showAddTaskModal && (
          <TaskModal
            isOpen={showAddTaskModal}
            onClose={() => setShowAddTaskModal(false)}
          >
            <AddTask />
          </TaskModal>
        )}
      </div>
    </div>
  );
};

export default TaskContainer;
