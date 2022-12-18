import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useText } from "../context";

const InputForm = () => {
  const [currentInput, setCurrentInput] = useState("");
  const { dispatchData } = useText();

  const handleInputSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("got here");
    currentInput.length > 3 &&
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
    </form>
  );
};

export default InputForm;
