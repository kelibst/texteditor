import React, { FormEvent, useState } from "react";

import { useText } from "../context";
import { allowableInterface, allowedHtml } from "../interfaces/dataInterface";
import { handleChange, submitInput } from "../utilis/handleInputSubmit";
import PopUpCard from "./PopUpCard";

const InputForm = (props: { allowable: allowableInterface }) => {
  // destructuring showPopUp and setshowPopUp from the allowable prop

  const { showPopUp, setshowPopUp, headerType, setheaderType } =
    props.allowable;
  // currentInput state is used to store the value of the input field
  const [currentInput, setCurrentInput] = useState("");
  // useText hook is used to gain access to the dispatchData function from the context
  const { dispatchData } = useText();

  // handleInputSubmit function is used to handle the form submission event
  const handleInputSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitInput({
      currentInput,
      showPopUp,
      dispatchData,
      setshowPopUp,
      headerType,
      setheaderType,
    });
    setCurrentInput("");
    return;
  };

  // handleInputChange function is used to handle the input field value change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleChange({
      value,
      setshowPopUp,
      setCurrentInput,
      showPopUp,
      setheaderType,
      headerType,
    });
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
      {showPopUp && <PopUpCard dispatch={() => {}} />}
    </form>
  );
};

export default InputForm;
