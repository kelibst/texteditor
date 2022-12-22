import React, { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useText } from "../context";
import { allowableInterface, allowedHtml } from "../interfaces/dataInterface";
import PopUpCard from "./PopUpCard";

const InputForm = (props: { allowable: allowableInterface }) => {
  // destructuring showPopUp and setshowPopUp from the allowable prop

  const { showPopUp, setshowPopUp } = props.allowable;
  // currentInput state is used to store the value of the input field
  const [currentInput, setCurrentInput] = useState("");
  // useText hook is used to gain access to the dispatchData function from the context
  const { dispatchData } = useText();

  // handleInputSubmit function is used to handle the form submission event
  const handleInputSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (currentInput.length) {
      console.log(showPopUp, "shopoup");
      // deal with instances where the person does not enter anything before /1
      if (showPopUp.type) {
        dispatchData({
          type: "ADD_TEXT",
          payload: {
            id: uuidv4(),
            value: currentInput,

            html: `h${currentInput[-1]}}` as allowedHtml,
          },
        });
      } else {
        dispatchData({
          type: "ADD_TEXT",
          payload: {
            id: uuidv4(),
            value: currentInput,
          },
        });
      }
      setCurrentInput("");
    }

    return;
  };

  const updatePopUpState = () => {
    if (
      currentInput[currentInput.length - 1] === "/" ||
      (currentInput[currentInput.length - 2] === "/" &&
        Number(currentInput[currentInput.length - 1]) < 6)
    ) {
      setshowPopUp({
        isPopUp: true,
        type: Number(currentInput[currentInput.length - 1])
          ? Number(currentInput[currentInput.length - 1])
          : 0,
      });
    } else {
      showPopUp && setshowPopUp({ isPopUp: false, type: 0 });
    }
  };

  useEffect(() => {
    updatePopUpState();
  }, [currentInput]);

  // handleInputChange function is used to handle the input field value change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value);
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
