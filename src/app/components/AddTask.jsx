import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        console.log(formData);
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

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Project Type
                    </label>
                    <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="" disabled>
                            Click to Select an Option
                        </option>
                        <option value="existing">Choose Existing Project</option>
                        <option value="new">Create New Project</option>
                    </select>
                </div>

                {formData.projectType === "existing" ? (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Project Name
                        </label>
                        <select
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleChange}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            {projectNames.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            New Project Name
                        </label>
                        <input
                            type="text"
                            name="newProjectName"
                            value={formData.newProjectName}
                            onChange={handleChange}
                            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Task Type
                    </label>
                    <select
                        name="taskType"
                        value={formData.taskType}
                        onChange={handleChange}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        {taskTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>
                {/* comment or description section */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Comment/Description of Task
                    </label>
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        rows="4"
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        maxLength="300"
                    ></textarea>
                </div>
                {/* Assigning task to */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
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
                                className="form-checkbox text-indigo-600 h-5 w-5"
                            />
                            <span className="ml-2">{member.name}</span>
                        </label>
                    ))}
                </div>
                {/* Task urgency */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Level of Priority
                    </label>
                    <select
                        name="taskUrgency"
                        value={formData.taskUrgency}
                        onChange={handleChange}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        {urgencyLevels.map((level) => (
                            <option key={level.id} value={level.id}>
                                {level.label}
                            </option>
                        ))}
                    </select>

                </div>
                {/* Date option - default creation date */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Creation Date
                    </label>
                    <DatePicker
                        selected={formData.creationDate}
                        onChange={(date) =>
                            setFormData({ ...formData, creationDate: date })
                        }
                        dateFormat="dd/MM/yyyy"
                        disabled
                        className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                {/* Due date of task - using date picker */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Due Date
                    </label>
                    <DatePicker
                        selected={formData.dueDate}
                        onChange={(date) => setFormData({ ...formData, dueDate: date })}
                        dateFormat="dd/MM/yyyy"
                        isClearable
                        placeholderText="Select a date"
                        className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                {/* progress bar depending on the 4 options */}
                <div className="mb-4">
                    <div className="text-sm font-bold mb-2">
                        Progress ({formData.taskType * 25}%)
                    </div>
                    <div className="bg-gray-300 h-6 rounded-full">
                        <div
                            style={{ width: `${formData.taskType * 25}%` }}
                            className="bg-blue-500 h-full rounded-full"
                        ></div>
                    </div>
                </div>
                {/* submit button */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTask;
