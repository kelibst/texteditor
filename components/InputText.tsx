import React, { memo, useRef } from "react";
import { propsInterface } from "../interfaces/dataInterface";
import PopUpCard from "./PopUpCard";

const InputText = (props: propsInterface) => {
  const { value, textClasses, setEditable, handleUpdae, isH1 } = props;
  console.log("render: editable content");
  const CurHtml = value.html ? value.html : "div";
  console.log(CurHtml);

  return (
    <>
      <CurHtml id={value.id} className={textClasses}>
        {value.value}
        {isH1 && <PopUpCard dispatch={() => {}} />}
      </CurHtml>
    </>
  );
};

export default memo(InputText);
