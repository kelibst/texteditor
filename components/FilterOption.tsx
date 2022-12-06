import React from "react";
interface FilterOptionProps {
  title: string;
  subtitle: string;
}
const FilterOption: React.FC<FilterOptionProps> = ({ title, subtitle }) => {
  return (
    <div className=" px-4 py-1 hover:bg-slate-200">
      <div
        className='
        flex gap-2 items-center 
        before:content-["T"] before:text-3xl before:font-serif before:text-gray-400 before:inline-block leading-4'
      >
        <div>
          <h4 className="font-medium block">{title}</h4>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
