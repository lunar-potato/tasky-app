import React from "react";

const TitleBar = ({ projectName }) => {
  const pageTitle = ['My Tasks']

  return (
    <div>
      <div className="flex flex-col items-center justify-between py-4 mx-auto lg:container md:px-6 lg:px-16 md:flex-row">
        <h1 className="py-3 text-4xl font-bold text-black">
          {pageTitle[0]}
        </h1>
        <div className="py-3 xl:mr-2 task-filter" >
          Task Filter
        </div>
      </div>
    </div>
  )
};

export default TitleBar;
