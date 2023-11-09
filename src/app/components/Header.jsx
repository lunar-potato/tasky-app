import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <nav
      className={`flex flex-col items-center p-8 text-center bg-slate-500`}
      style={{ height: expanded ? 'auto' : 'fit-content' }}
    >
      {/* Including the Google Fonts link */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap" />

      <div className="mb-4">
        <Image src="/tasky-200-w-t.png" width={150} height={131} alt="Tasky logo" />
      </div>
      <p className="text-white text-lg font-bold" style={{ fontSize: '1.7rem' }}>
        {"Tasky's Magic, making Tasks Easy and Quick!"}
      </p>

      {/* ChevronDown icon with hover effect */}
      <div className="cursor-pointer mt-4 text-white hover:text-teal-500" onClick={toggleExpansion}>
        <ChevronDown size={24} />
      </div>

      {/* Instructions */}
      {expanded && (
        <div className="mt-4 text-white">
          <p>
            <strong>Instructions:</strong> Add your Task, Assign a Task Type, and Drag-and-Drop to change columns.
          </p>
        </div>
      )}
    </nav>
  );
};

export default Header;
