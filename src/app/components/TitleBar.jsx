import React from "react";

const TitleBar = ({ projectName }) => {
  const pageTitle = ['My Tasks']

  return (
    <div>
      <div className="container flex flex-col items-center justify-between px-16 py-4 mx-auto md:flex-row">
        <h1 className="flex py-3 text-4xl font-bold text-black">
          {pageTitle[0]}
        </h1>
      </div>
    </div>
  )
};

export default TitleBar;
