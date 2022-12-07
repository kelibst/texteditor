import React from "react";
import FilterOption from "./FilterOption";

const PopUpCard = (props: { dispatch: () => void }) => {
  const { dispatch } = props;

  return (
    <div className="PopUpCard w-72 bg-white border-2 p-2 rounded-xl h-80 leading-8 shadow-2xl">
      <h3 className="font-semibold">Add blocks</h3>
      <p className="text-sm text-gray-400">
        Keep typing to filter, or escape to exit
      </p>
      <p className=" text-gray-600">Filter keyword 1ï¸ âƒ£</p>
      <div onClick={dispatch}>
        <FilterOption
          title={"Heading 1"}
          subtitle={"Shortcut type # + space"}
        />
        <FilterOption
          title={"Expandable Heading 1"}
          subtitle={"Shortcut type >># + space"}
        />
      </div>
    </div>
  );
};

export default PopUpCard;
