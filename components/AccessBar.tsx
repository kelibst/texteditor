import React from "react";
import { CiCloud } from "react-icons/ci";
import { BsCheck2Circle } from "react-icons/bs";
import { FiArrowDownLeft } from "react-icons/fi";
import { AiOutlineClockCircle, AiOutlineMore } from "react-icons/ai";
import { GiRabbitHead } from "react-icons/gi";
import { CgBell } from "react-icons/cg";

const AccessBar = () => {
  return (
    <div className="flex items-center w-full p-2 relative rounded-sm justify-between">
      <div className="flex absolute left-2 gap-2 items-center left-icons">
        <p className="px-4 py-1 cursor-pointer font-bold bg-green-100">P</p>
        <p className="inline-flex cursor-pointer gap-1 text-gray-400">
          <AiOutlineClockCircle /> <span className="text-sm">0min</span>
        </p>
        <div className="rounded-full cursor-pointer  inline-block p-1 bg-pink-300">
          <GiRabbitHead />
        </div>

        <span className="cursor-pointer  text-gray-400 flex gap-2 items-center">
          <FiArrowDownLeft /> 0
        </span>
      </div>
      <input type="text" className="w-full p-1 border-2" />
      <div className="absolute right-2">
        <div className="flex gap-2">
          <span className="cursor-pointer">
            <BsCheck2Circle />
          </span>
          <span className="cursor-pointer">
            <CiCloud />
          </span>
          <span className="cursor-pointer">
            <AiOutlineMore />
          </span>
        </div>
      </div>
    </div>
  );
};
//   <div className="flex divide-x-2 gap-4 ">
//         <div className="bg-blue-400">P</div>
//         <AiOutlineClockCircle />
//         <GiRabbitHead />
//         <FiArrowDownLeft />
//       </div>

//       <div className="flex">
//         <BsCheck2Circle />
//         <CiCloud />
//         <AiOutlineMore />
//       </div>
export default AccessBar;
