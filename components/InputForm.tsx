import React, { FormEvent, useState, useReducer } from "react";

import { useText } from "../context";
import { allowableInterface, allowedHtml, popstateInterface } from "../interfaces/dataInterface";
import popUpAndHeaderReducer from "../reducers/popUpAndHeaderReducer";
import { handleChange, submitInput } from "../utilis/handleInputSubmit";
import PopUpCard from "./PopUpCard";

const InputForm = (props: { allowable: allowableInterface }) => {
  //setup complex state and action for the input form
  const initialPopState: popstateInterface = {
    showPopUp: false,
    headerType: "div",
    canUseHeader: false
  } as popstateInterface

  // destructuring showPopUp and setshowPopUp from the allowable prop

  const { showPopUp, setshowPopUp, headerType, setheaderType } =
    props.allowable;
  // currentInput state is used to store the value of the input field
  const [currentInput, setCurrentInput] = useState("");
  // useText hook is used to gain access to the dispatchData function from the context

  //setup another state to track when a header is used and reverse the html to div
  const [canuseHeader, setcanuseHeader] = useState(false)

  const { dispatchData, popUpAndHeader, dispatchPopAction} = useText();

  // handleInputSubmit function is used to handle the form submission event
  const handleInputSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitInput({
      currentInput,
      dispatchData,
      popUpAndHeader, 
      dispatchPopAction
    });
    setCurrentInput("");
    return;
  };
console.log(popUpAndHeader.showPopUp,  'show it');
  // handleInputChange function is used to handle the input field value change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleChange({
      value,
      setshowPopUp,
      setCurrentInput,
      popUpAndHeader,
      dispatchPopAction
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
      {popUpAndHeader.showPopUp && <PopUpCard dispatch={() => {}} />}
    </form>
  );
};

export default InputForm;
