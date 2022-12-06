import React from "react";
import { CiCloud } from "react-icons/ci";
import { BsCheck2Circle } from "react-icons/bs";
import { FiArrowDownLeft } from "react-icons/fi";
import { AiOutlineClockCircle, AiOutlineMore } from "react-icons/ai";
import { GiRabbitHead } from "react-icons/gi";
import { CgBell } from "react-icons/cg";

const AccessBar = () => {
  return (
    <div className="flex items-center w-full border-2 p-2 rounded-sm justify-between">
      <div className="flex divide-x-2 gap-4 ">
        <CgBell />
        <AiOutlineClockCircle />
        <GiRabbitHead />
        <FiArrowDownLeft />
      </div>

      <div className="flex">
        <BsCheck2Circle />
        <CiCloud />
        <AiOutlineMore />
      </div>
    </div>
  );
};

export default AccessBar;
