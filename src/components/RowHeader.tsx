import React from "react";

const RowHeader: React.FC = () => {
  return (
    <div className="flex justify-between text-center items-center border-b-1 md:w-4/6 border-t-1 text-white ">
      <p className="border-l-1 p-1"> Index </p>
      <p className="border-l-1 p-1 "> Modified By </p>
      <p className="border-l-1 p-1"> Tested Build </p>
      <p className="border-l-1 border-r-1 p-1"> Download </p>
    </div>
  );
};

export default RowHeader;
