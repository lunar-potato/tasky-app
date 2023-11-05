import React from "react";
import { Provider } from "react-redux";
import Column from "./Column";

const initialTasks = {
  "To Do": [
    {
      id: 1,
      taskTitle: "Title",
      projectName: "Project 1",
      description: "Short description 1",
      assignedTo: "Gwyneth",
      date: "2023-11-02",
      status: "To Do",
    },
  ],
  Doing: [
    {
      id: 2,
      taskTitle: "Title",
      projectName: "Project 1",
      description: "Short description 1",
      assignedTo: "Jess",
      date: "2023-11-02",
      status: "Doing",
    },
  ],
  Done: [
    {
      id: 3,
      taskTitle: "Title",
      projectName: "Project 1",
      description: "Short description 1",
      assignedTo: "Tammy",
      date: "2023-11-02",
      status: "Done",
    },
    {
      id: 4,
      taskTitle: "Title",
      projectName: "Project 1",
      description: "Short description 1",
      assignedTo: "Mona",
      date: "2023-11-02",
      status: "Done",
    },
  ],
};

const TaskBoard = () => {
  return (
    <Provider>
    <div className="grid grid-cols-3 gap-4">
      {Object.keys(initialTasks).map((columnTitle, columnIndex) => (
        <Column key={columnTitle} title={columnTitle} tasks={initialTasks[columnTitle]} />
      ))}
    </div>
    </Provider>
  );
};

export default TaskBoard;
