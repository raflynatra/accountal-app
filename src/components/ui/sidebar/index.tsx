import React from "react";
import Menu from "./menu";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="py-5">
      <div className="flex justify-center items-center pb-5">
        <Image
          src="/app-logo.svg"
          alt="Vercel Logo"
          width={48}
          height={24}
          priority
        />
        <span className="ml-3 font-bold text-2xl text-primary-color-500">
          Accountal
        </span>
      </div>
      <ul className="px-5 py-2">
        <Menu />
      </ul>
    </div>
  );
};

export default Sidebar;
