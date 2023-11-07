"use client"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = () => {
    const [formData, setFormData] = useState({
        taskTitle: "",
        taskCategory: "",
        taskType: "1",
        notes: "",
        creationDate: new Date(),
        dueDate: null,
        taskUrgency: "high",
    });

    const urgencyLevels = [
        { id: "high", label: "High", colorClass: "bg-red" },
        { id: "medium", label: "Medium", colorClass: "bg-amber" },
        { id: "low", label: "Low", colorClass: "bg-blue" },
        { id: "lowest", label: "Lowest", colorClass: "bg-green" },
    ];

    // choose existing or new category
    const taskCategory = ["Errands", "Home", "Work"];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "taskCategory") {
            if (value === "new") {
                setFormData({ ...formData, taskCategory: "new", taskCategory: "" });
            } else {
                setFormData({ ...formData, taskCategory: "existing" });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <div className="w-full max-w-md p-4 mx-auto">
            <form
                onSubmit={handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 rounded shadow-sm bg-sky-100">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">
                        Task Category
                    </label>
                    <select
                        name="taskCategory"
                        value={formData.taskCategory}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:border-gray-300">
                        <option value="" disabled>
                            Click to Select an Option
                        </option>
                        <option value="existing">Choose Existing Category</option>
                        <option value="new">Create New Category</option>
                    </select>
                </div>

                {formData.taskCategory === "existing" ? (
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold">
                            Task Category
                        </label>
                        <select
                            name="taskCategory"
                            value={formData.taskCategory}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:border-gray-300">
                            {taskCategory.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold">
                            New Category Name
                        </label>
                        <input
                            type="text"
                            name="newCategoryName"
                            value={formData.newCategoryName}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 pr-8 leading-tight border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-300" />
                    </div>
                )}

                {/* comment or description section */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">
                        Task name
                    </label>
                    <input
                        name="notes"
                        value={formData.taskTitle}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 pr-8 leading-tight border border-gray-200 rounded focus:outline-none focus:border-gray-300" ></input>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">
                        Task notes
                    </label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="4"
                        className="block w-full px-4 py-3 pr-8 leading-tight border border-gray-200 rounded appearance-none focus:outline-none focus:border-gray-300" maxLength="300"></textarea>
                </div>
                {/* Task urgency */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold">
                        Priority level
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
                <div>
                    <input
                        type="hidden"
                        name="creationDate"
                        value={formData.creationDate}
                        onChange={handleChange}
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
