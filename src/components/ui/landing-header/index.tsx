import Link from "next/link";
import React from "react";

const LandingHeader = () => {
  return (
    <div className="px-10 py-5 min-h-[3.75rem] flex justify-between items-center fixed w-full">
      <div>Logo</div>
      <div className="space-x-5">
        <Link
          href="/register"
          className="p-2 border-2 rounded-lg border-violet-500 hover:bg-violet-500 "
        >
          Register
        </Link>
        <button className="hover:text-violet-500">Login</button>
      </div>
    </div>
  );
};

export default LandingHeader;
