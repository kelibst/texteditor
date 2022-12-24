import React, { useReducer } from "react";
import { useText } from "../context";
import { txtInterface } from "../interfaces/dataInterface";
import textReducer from "../reducers/TextValues";
import InputText from "./InputText";

const ShowText = () => {
  const { textData } = useText();
  console.log(textData);
  const htmlClasses = {
    div: "text-normal",
    h1: "text-2xl font-bold",
    h2: "text-xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-2xl font-bold",
    h6: "text-xl font-bold",
  };

  return (
    <div
      onClick={(e) => {
        // setEditable((e.target as HTMLElement).innerText);
      }}
      onInput={(e) => {
        if (e.currentTarget.textContent) {
          // setEditable(e.currentTarget.textContent);
        } else {
          // setEditable("");
        }
      }}
      onBlur={() => {
        // handleUpdae(value);
      }}
      contentEditable="true"
      suppressContentEditableWarning={true}
    >
      {textData.length
        ? textData.map((data: txtInterface) => (
            <InputText
              key={data.id}
              value={data}
              textClasses={htmlClasses[data.html]}
              handleUpdae={() => {}}
              setEditable={() => {}}
              isH1={false}
            />
          ))
        : ""}
    </div>
  );
};

export default ShowText;
