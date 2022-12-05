import React from "react";

const InputText = (props) => {
  const { value, textClasses } = props;
  return <div className={textClasses}>{value}</div>;
};

export default InputText;
