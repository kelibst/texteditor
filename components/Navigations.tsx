import React from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { BiLockOpenAlt } from "react-icons/bi";

const Navigations = () => {
  return (
    <nav
      className="flex flex-wrap items-center text-gray-400 justify-between p-4
    
    "
    >
      <div className="nav-links px-4 flex gap-2">
        <div className="cursor-pointer">Main /</div>
        <div className="cursor-pointer">Getting started /</div>
        <div className="cursor-pointer"> Front-end developer test project</div>
      </div>
      <div className="flex gap-2 divide-x-2 topbar-action-buttons m-4">
        <div className="flex items-center">
          <BiLockOpenAlt />{" "}
          <p className="hover:cursor-pointer pl-2 pr-3 pt-1"> Editing</p>
        </div>

        <div className="flex align-middle pl-3 items-center">
          <p className="cursor-pointer pt-1"> Publish Space </p>
          <RiArrowDropDownLine />
        </div>
      </div>
    </nav>
  );
};

export default Navigations;
