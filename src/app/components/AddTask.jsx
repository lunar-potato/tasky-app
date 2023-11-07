"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TaskCard2 from "./TaskCard"; 

const AddTask = () => {
    const [formData, setFormData] = useState({
        projectType: "", //
        projectName: "",
        taskType: "1",
        comment: "",
        assignedTo: [],
        creationDate: new Date(),
        dueDate: null,
        taskUrgency: "high",
    });

    const taskTypes = [
        { id: "1", name: "Discussion on Web Design and Wireframe", progress: 25 },
        { id: "2", name: "Building and Coding", progress: 50 },
        { id: "3", name: "Testing App and Customer Review", progress: 75 },
        { id: "4", name: "Deployment of App", progress: 100 },
    ];

    const teamMembers = [
        { id: "tammy", name: "Tammy H" },
        { id: "jess", name: "Jess R" },
        { id: "gwyneth", name: "Gwyneth B" },
        { id: "memouna", name: "Memouna I" },
    ];

    const urgencyLevels = [
        { id: "high", label: "High", colorClass: "bg-red" },
        { id: "medium", label: "Medium", colorClass: "bg-amber" },
        { id: "low", label: "Low", colorClass: "bg-blue" },
        { id: "lowest", label: "Lowest", colorClass: "bg-green" },
    ];

    //   project type, choosing existing or new project
    const projectNames = ["Project 1", "Project 2", "Project 3"];
    const handleSubmit = (e) => {
        e.preventDefault();
        // Creating a new task object with the form data
        const newTask = {
          id: Date.now(), // Generate a unique ID
          taskTitle: formData.projectName, // Using the relevant form field
          // Setting other properties like taskCategory, notes, dueDate, taskUrgency, etc.
          status: "To Do", // Setting the status to "To Do"
        };
        setTasks([...tasks, newTask]);
        addTaskToToDoColumn(newTask);
        saveTaskToLocalStorage(formData);
        setFormData({
          projectType: "",
          projectName: "",
          taskType: "1",
          comment: "",
          assignedTo: [],
          creationDate: new Date(),
          dueDate: null,
          taskUrgency: "high",
        });
      };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "projectType") {
            if (value === "new") {
                setFormData({ ...formData, projectType: "new", projectName: "" });
            } else {
                setFormData({ ...formData, projectType: "existing" });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const saveTaskToLocalStorage = (taskData) => {
        const existingTasks = JSON.parse(localStorage.getItem("tasks")) || { "To Do": [] };
        existingTasks["To Do"].push(taskData);
        localStorage.setItem("tasks", JSON.stringify(existingTasks));
    };

    const addTaskToToDoColumn = (taskData) => {
        // You can add code here to update your application state or perform other actions.
        // For example, if you are using a state management library, you can dispatch an action to update your state.
    };

    return (
        <div className="w-full max-w-md p-4 mx-auto">
            <form
                onSubmit={handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 rounded shadow-sm bg-sky-100">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">
                        Project Type
                    </label>
                    <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:border-gray-300">
                        <option value="" disabled>
                            Click to Select an Option
                        </option>
                        <option value="existing">Choose Existing Project</option>
                        <option value="new">Create New Project</option>
                    </select>
                </div>

                {formData.projectType === "existing" ? (
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold">
                            Project Name
                        </label>
                        <select
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 pr-8 leading-tight border border-gray-200 rounded appearance-none focus:outline-none focus:border-gray-300">
                            {projectNames.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold">
                            New Project Name
                        </label>
                        <input
                            type="text"
                            name="newProjectName"
                            value={formData.newProjectName}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 pr-8 leading-tight border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-300" />
                    </div>
                )}

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">
                        Task Type
                    </label>
                    <select
                        name="taskType"
                        value={formData.taskType}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:border-gray-300">
                        {taskTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>
                {/* comment or description section */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold">
                        Comment/Description of Task
                    </label>
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        rows="4"
                        className="block w-full px-4 py-3 pr-8 leading-tight border border-gray-200 rounded appearance-none focus:outline-none focus:border-gray-300" maxLength="300"></textarea>
                </div>
                {/* Assigning task to */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold">
                        Assigned To
                    </label>
                    {teamMembers.map((member) => (
                        <label key={member.id} className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                name="assignedTo"
                                value={member.id}
                                checked={formData.assignedTo.includes(member.id)}
                                onChange={handleChange}
                                className="w-5 h-5 text-white accent-sky-500 form-checkbox" />
                            <span className="ml-2">{member.name}</span>
                        </label>
                    ))}
                </div>
                {/* Task urgency */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold">
                        Level of Priority
                    </label>
                    <select
                        name="taskUrgency"
                        value={formData.taskUrgency}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:border-gray-300">
                        {urgencyLevels.map((level) => (
                            <option key={level.id} value={level.id}>
                                {level.label}
                            </option>
                        ))}
                    </select>

                </div>
                {/* Date option - default creation date */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold">
                        Creation Date
                    </label>
                    <DatePicker
                        selected={formData.creationDate}
                        onChange={(date) =>
                            setFormData({ ...formData, creationDate: date })
                        }
                        dateFormat="dd/MM/yyyy"
                        disabled
                        className="block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-300"
                    />
                </div>
                {/* Due date of task - using date picker */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold">
                        Due Date
                    </label>
                    <DatePicker
                        selected={formData.dueDate}
                        onChange={(date) => setFormData({ ...formData, dueDate: date })}
                        dateFormat="dd/MM/yyyy"
                        isClearable
                        placeholderText="Select a date"
                        className="block w-full px-4 py-3 pr-8 leading-tight border border-gray-200 rounded focus:outline-none focus:border-gray-300" />
                </div>
                {/* progress bar depending on the 4 options */}
                <div className="mb-4">
                    <div className="mb-2 text-sm font-bold">
                        Progress ({formData.taskType * 25}%)
                    </div>
                    <div className="h-6 bg-gray-300 rounded-full">
                        <div
                            style={{ width: `${formData.taskType * 25}%` }}
                            className="h-full rounded-full bg-sky-500"></div>
                    </div>
                </div>
                {/* submit button */}
                <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-400 focus:outline-none focus:shadow-outline">
                    Add Task
                </button>
            </form>
            
        </div>
    );
};

export default AddTask;
