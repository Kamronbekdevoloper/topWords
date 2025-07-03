import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen bg-[#064789] border-r-2 border-[#427aa1] shadow-md">
      <aside className="flex flex-col gap-10 p-6">
        <div className="border-b-[2px] border-[#fff]  b-[20px]">
          <h1 className="text-3xl font-bold font-sans text-[#fff]">
            <Link to="/"> TopWords</Link>
          </h1>
        </div>

        <nav>
          <ul className="flex flex-col gap-[24px]">
            <Link
              to="/rus"
              className="text-lg font-medium text-white hover:text-blue-400 cursor-pointer transition-colors duration-200"
            >
              🇷🇺 Russian
            </Link>
            <Link
              to="/eng"
              className="text-lg font-medium text-white hover:text-blue-400  cursor-pointer transition-colors duration-200"
            >
              🇬🇧 English
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-white hover:text-blue-400 cursor-pointer transition-colors duration-200"
            >
              📞 Contact
            </Link>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
