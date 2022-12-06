import React, { useRef } from "react";
import { propsInterface, txt } from "../interfaces/dataInterface";
import PopUpCard from "./PopUpCard";

const InputText = (props: propsInterface) => {
  const { value, textClasses, setEditable, handleUpdae, isH1 } = props;
  return (
    <div
      id={value.id}
      onClick={(e) => {
        setEditable(e.target.innerText);
      }}
      onInput={(e) => {
        setEditable(e.currentTarget.textContent);
      }}
      onBlur={() => {
        handleUpdae(value);
      }}
      contentEditable="true"
      className={textClasses}
    >
      {value.value}
      {isH1 && <PopUpCard />}
    </div>
  );
};

export default InputText;
