import React, { useReducer } from "react";
import { useText } from "../context";
import { txtInterface } from "../interfaces/dataInterface";
import textReducer from "../reducers/TextValues";
import InputText from "./InputText";

const ShowText = () => {
  const { textData } = useText();
  return (
    <div>
      {textData.length
        ? textData.map((data: txtInterface) => (
            <InputText
              key={data.id}
              value={data}
              textClasses={"text-2xl font-bold"}
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
