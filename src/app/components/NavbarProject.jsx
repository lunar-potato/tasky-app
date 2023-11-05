import React from "react";

const NavbarProject = ({ projectName }) => {
  // Placeholder data for assigned team members
  const assignedTo = [
    { id: 1, initials: "JD" },
    { id: 2, initials: "AL" },
    // Add more members as needed
  ];

  return (
    <div className="container flex flex-col items-center justify-between px-16 py-4 mx-auto md:flex-row">
      <button className="px-3 py-1 text-sm text-white bg-teal-500 rounded hover:bg-teal-400">
        Back to Projects
      </button>
      <h1 className="flex py-3 text-4xl font-bold text-black">
        Project Name{" "}
      </h1>
      {/* placeholder for Project name */}
      <div className="flex items-center justify-center">
        {assignedTo.map((member) => (
            <div key={member.id} className="flex items-center justify-center w-10 h-10 mx-1 font-bold text-black bg-orange-200 rounded-full">
              {member.initials}
            </div>
          ))}
        <div className="flex items-center">
          <button className="px-4 py-2 ml-1 mr-4 text-white rounded-full bg-sky-500 hover:bg-sky-400">+ INVITE</button>
          <button className="text-2xl text-black">...</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarProject;
