import React from "react";

const NavbarProject = ({ projectName }) => {
  // Placeholder data for assigned team members
  const assignedTo = [
    { id: 1, initials: "JD" },
    { id: 2, initials: "AL" },
    // Add more members as needed
  ];

  return (
    <div className="bg-blue-500 py-4 px-6 flex justify-between items-center">
      <button className="bg-transparent border border-white rounded p-1 text-white text-sm">
        Back to Projects
      </button>
      <h1 className="text-white text-lg flex items-center">
        Project Name{" "}
        {/* placeholder for Project name */}
        {assignedTo.map((member) => (
          <div key={member.id} className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold ml-2">
            {member.initials}
          </div>
        ))}
      </h1>
      <div className="flex items-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full mr-4">+ INVITE</button>
        <button className="text-white text-2xl">...</button>
      </div>
    </div>
  );
};

export default NavbarProject;
