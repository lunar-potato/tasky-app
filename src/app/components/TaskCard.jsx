import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index, draggableId }) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="p-4 mb-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <h4>{task.projectName}</h4>
            <p>{task.description}</p>
            <p>Assigned to: {task.assignedTo}</p>
            <p>Date: {task.date}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
