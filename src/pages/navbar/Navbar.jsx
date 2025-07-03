import React from "react";
import { GrLanguage } from "react-icons/gr";
import { MdNightlight } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] px-[40px] z-10 bg-[#ebf2fa] shadow-md  ">
      <div className="flex items-center justify-end h-full gap-[18px]">
        <button title="Language" className="outline-none">
          <GrLanguage className="w-[30px] h-[30px] text-blue-600 hover:text-[#427aa1]  duration-200" />
        </button>
        <button title="Dark Mode" className="outline-none">
          <MdNightlight className="w-[30px] h-[30px] text-blue-600 hover:text-gray-400  duration-200" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
