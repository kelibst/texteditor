import { v4 as uuidv4 } from "uuid";
import {
  allowedHtml,
  handleChangePropsInterface,
  submitPropsInterfacce,
} from "../interfaces/dataInterface";

const submitInput = (props: submitPropsInterfacce) => {
  const {
    currentInput,
    showPopUp,
    dispatchData,
    setshowPopUp,
    headerType,
    setheaderType,
  } = props;
  // if the person has entered a test before the html header identifier
  if (currentInput.length) {
    let currentText =
      currentInput.length > 2 && showPopUp
        ? currentInput.substring(0, currentInput.length - 2)
        : currentInput;
    dispatchData({
      type: "ADD_TEXT",
      payload: {
        id: uuidv4(),
        value: currentText,
        html: `${headerType}` as allowedHtml,
      },
    });
    if (showPopUp) {
      setshowPopUp(false);
    }
  }
};

const handleChange = (props: handleChangePropsInterface) => {
  const { value, setshowPopUp, setCurrentInput, showPopUp, setheaderType } =
    props;
  if (
    value[value.length - 1] === "/" ||
    (value[value.length - 2] === "/" && Number(value[value.length - 1]) < 7)
  ) {
    setshowPopUp(true);
    setheaderType(`h${Number(value[value.length - 1])}`);
    setCurrentInput(value);
  } else {
    showPopUp && setshowPopUp(false);
  }
  setCurrentInput(value);
};
export { submitInput, handleChange };
