import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen bg-blue-600 border-r-2 border-[#427aa1] shadow-md flex flex-col justify-between">
      <aside className="flex flex-col gap-10 p-6">
        <div className=" b-[20px]">
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
              to="/music"
              className="text-lg font-medium text-white hover:text-blue-400  cursor-pointer transition-colors duration-200"
            >
              🎵 Musics
            </Link>
            <Link
              to="/movie"
              className="text-lg font-medium text-white hover:text-blue-400  cursor-pointer transition-colors duration-200"
            >
              🎥 Movies
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
      <div className="flex mb-[100px] justify-start px-[20px] items-center gap-[20px]">
        <a href="">
          <FaInstagram className="w-[30px] h-[30px] text-[#fff] hover:text-blue-400" />
        </a>
        <a href="">
          <FaTelegram className="w-[30px] h-[30px]  text-[#fff]  hover:text-blue-400" />
        </a>
        <a href="">
          <FaLinkedin className="w-[30px] h-[30px]  text-[#fff]  hover:text-blue-400 " />
        </a>
        <a href="">
          <FaFacebook className="w-[30px] h-[30px]  text-[#fff]  hover:text-blue-400 " />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
