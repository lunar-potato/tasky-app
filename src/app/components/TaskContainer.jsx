import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { MoreVertical } from "lucide-react";

// Define your initial tasks data
const initialTasks = [
  { title: "To Do", status: "To Do" },
  { title: "Doing", status: "Doing" },
  { title: "Done", status: "Done" },
];

const Container = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(tasks);
    const [reorderedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, reorderedTask);

    setTasks(reorderedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="grid grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <Draggable key={task.title} draggableId={task.title} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <div className="p-4 m-4 rounded shadow-lg bg-slate-500">
                      <div className="flex items-center justify-between mb-2" {...provided.dragHandleProps}>
                        <h4 className="text-4xl font-bold">{task.title}</h4>
                        <button className="hover:text-white">
                          <MoreVertical className="w-9 h-9" />
                        </button>
                      </div>
                      <div className="grid">
                        <TaskCard tasks={task.status} />
                      </div>
                      <div>
                        <button className="flex items-start font-bold hover:text-white">+ Add Card</button>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Container;
