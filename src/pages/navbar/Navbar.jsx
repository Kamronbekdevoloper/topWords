import React from "react";
import { GrLanguage } from "react-icons/gr";
import { MdNightlight } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] px-8 bg-[#ebf2fa] shadow-md flex items-center justify-between">
      {/* Chap tomon: Logo yoki nom */}
      <div className="text-2xl font-semibold text-blue-900">
        <span>
          <Link to="/"> TopWords</Link>
        </span>
        <span className="text-blue-600"> & </span>
        <a href="https://cambridgeonline.uz/en" target="_blank">
          Cambridge
        </a>
      </div>

      {/* O'ng tomon: Ikonkalar */}
      <div className="flex items-center gap-6">
        <button title="Change Language" className="outline-none">
          <GrLanguage className="w-6 h-6 text-blue-600 hover:text-[#427aa1] transition duration-200" />
        </button>
        <button title="Toggle Dark Mode" className="outline-none">
          <MdNightlight className="w-6 h-6 text-blue-600 hover:text-gray-600 transition duration-200" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
