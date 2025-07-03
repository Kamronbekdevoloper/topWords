import React from "react";
import image from "../../assets/cambridge.webp";
import Navbar from "../navbar/Navbar";
import { edudata } from "./edudata";

const Edu = () => {
  return (
    <div className="w-full flex flex-col gap-[36px] h-auto px-[4px] py-[4px] bg-[#fff]">
      <div className="flex  gap-[12px] ">
        <div className="w-full  ">
          <img
            src={image}
            alt="Cambridge"
            className="w-full h-auto rounded-2xl  object-cover"
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-[400px] shadow-amber-200">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-800 leading-relaxed">
              Salom! Siz bu{" "}
              <span className="font-bold text-[#064789]">TopWords</span>{" "}
              web-saytda o'zingizga kerakli bo'lgan lug'at yoki darsliklarni
              yuklab olishingiz mumkin.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between  gap-6 ">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <label className="flex flex-col text-[#064789] font-semibold text-lg">
            <span className="mb-1">Name</span>
            <input
              type="text"
              value={edudata.name}
              disabled
              className="bg-blue-50 text-blue-900 p-2 rounded-md border border-blue-200"
            />
          </label>

          <label className="flex flex-col text-[#064789] font-semibold text-lg">
            <span className="mb-1">Country</span>
            <input
              type="text"
              value={edudata.country}
              disabled
              className="bg-blue-50 text-blue-900 p-2 rounded-md border border-blue-200"
            />
          </label>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <label className="flex flex-col text-[#064789] font-semibold text-lg">
            <span className="mb-1">Total Branches</span>
            <input
              type="text"
              value={edudata.totalBranches}
              disabled
              className="bg-blue-50 text-blue-900 p-2 rounded-md border border-blue-200"
            />
          </label>

          <label className="flex flex-col text-[#064789] font-semibold text-lg">
            <span className="mb-1">Founded Year</span>
            <input
              type="text"
              value={edudata.foundedYear}
              disabled
              className="bg-blue-50 text-blue-900 p-2 rounded-md border border-blue-200"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Edu;
