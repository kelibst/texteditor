import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useText } from "../context";
import { allowableInterface } from "../interfaces/dataInterface";
import PopUpCard from "./PopUpCard";

const InputForm = (props: { allowable: allowableInterface }) => {
  const { showPopUp, setshowPopUp } = props.allowable;
  const [currentInput, setCurrentInput] = useState("");
  const { dispatchData } = useText();

  const handleInputSubmit = (event: FormEvent) => {
    event.preventDefault();
    currentInput.length > 1 &&
      dispatchData({
        type: "ADD_TEXT",
        payload: {
          id: uuidv4(),
          value: currentInput,
        },
      });
    setCurrentInput("");
    return;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (
      value[value.length - 1] === "/" ||
      (value[value.length - 2] === "/" && Number(value[value.length - 1]) < 6)
    ) {
      setshowPopUp({
        isPopUp: true,
        type: Number(value[value.length - 1])
          ? Number(value[value.length - 1])
          : 0,
      });
      setCurrentInput(event.target.value);
    } else {
      showPopUp && setshowPopUp({ isPopUp: false, type: 0 });
      setCurrentInput(event.target.value);
    }
  };

  return (
    <form onSubmit={handleInputSubmit}>
      <input
        type="text"
        className={"outline-none mt-8"}
        placeholder={"type / for blocks, @ to link docs or people"}
        value={currentInput}
        onChange={handleInputChange}
      />
      {showPopUp.isPopUp && <PopUpCard dispatch={() => {}} />}
    </form>
  );
};

export default InputForm;
