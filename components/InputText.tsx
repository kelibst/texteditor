import React, { useRef } from "react";
import { propsInterface, txt } from "../interfaces/dataInterface";
import PopUpCard from "./PopUpCard";

const InputText = (props: propsInterface) => {
  const { value, textClasses, setEditable, handleUpdae, isH1 } = props;
  return (
    <div
      id={value.id}
      onClick={(e) => {
        setEditable((e.target as HTMLElement).innerText);
      }}
      onInput={(e) => {
        if (e.currentTarget.textContent) {
          setEditable(e.currentTarget.textContent);
        } else {
          setEditable("");
        }
      }}
      onBlur={() => {
        handleUpdae(value);
      }}
      contentEditable="true"
      className={textClasses}
    >
      {value.value}
      {isH1 && <PopUpCard dispatch={() => {}} />}
    </div>
  );
};

export default InputText;
