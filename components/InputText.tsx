import React from "react";
import { txt } from "../interfaces/dataInterface";

interface propsInterface {
  value: txt;
  textClasses: string;
  setEditable: React.Dispatch<React.SetStateAction<string>>;
  handleUpdae: (value: txt) => void;
}

const InputText = (props: propsInterface) => {
  const { value, textClasses, setEditable, handleUpdae } = props;
  return (
    <div
      onInput={(e) => {
        if (
          e.currentTarget.textContent !== value.value &&
          e.currentTarget.textContent === ""
        ) {
          setEditable("");
        } else if (
          e.currentTarget.textContent !== value.value &&
          e.currentTarget.textContent &&
          e.currentTarget.textContent !== ""
        ) {
          setEditable(e.currentTarget.textContent);
        }
      }}
      onBlur={() => {
        handleUpdae(value);
      }}
      contentEditable="true"
      className={textClasses}
    >
      {value.value}
    </div>
  );
};

export default InputText;
