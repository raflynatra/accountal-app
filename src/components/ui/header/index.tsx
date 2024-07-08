import React from "react";

const MainHeader = () => {
  return (
    <div className="px-10 py-5 min-h-[78px] flex justify-end items-center">
      <div className="space-x-5">
        <button className="hover:text-primary-color-500">Logout</button>
      </div>
    </div>
  );
};

export default MainHeader;
