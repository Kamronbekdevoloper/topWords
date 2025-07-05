import React from "react";
import image from "../../assets/cambridge.webp";
import bluebackground from "../../assets/bluegradient.jpg";
import blueback2 from "../../assets/blueback2.jpg";
import greenback from "../../assets/greenback.jpg";
import blueback4 from "../../assets/blueback4.avif";
import cambridge1 from "../../assets/cambridge3.webp";

import Navbar from "../navbar/Navbar";
import { edudata } from "./edudata";

const Edu = () => {
  return (
    <div className="w-full flex flex-col gap-[36px] h-auto px-[4px] py-[4px] bg-[#fff]">
      <div className="h-auto relative flex items-center justify-center">
        <div className="w-full  h-auto ">
          <img
            src={blueback4}
            alt="Cambridge"
            className="w-full max-h-[690px] rounded-2xl  object-cover"
          />
        </div>
      </div>
      <div className="absolute top-[50%] mx-[160px] ">
        <h1 className="text-[48px]  font-semibold text-white leading-relaxed">
          {" "}
          <span className="font-bold text-[#fff ]">TopWords & Cambridge</span> -
          Eng sifatli kurslar
        </h1>
        <a
          download
          className="inline-block bg-blue-600 text-white my-4 px-4 py-2 rounded hover:bg-blue-700 transition"
          href="https://cambridgeonline.uz/en"
          target="_blank"
        >
          Kursga Otish
        </a>
      </div>
    </div>
  );
};

export default Edu;
