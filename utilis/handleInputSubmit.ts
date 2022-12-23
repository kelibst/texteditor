import { v4 as uuidv4 } from "uuid";
import {
  allowedHtml,
  handleChangePropsInterface,
  submitPropsInterfacce,
} from "../interfaces/dataInterface";

const submitInput = (props: submitPropsInterfacce) => {
  const { currentInput, showPopUp, dispatchData, setshowPopUp } = props;
  if (currentInput.length) {
    if (showPopUp.type) {
      dispatchData({
        type: "ADD_TEXT",
        payload: {
          id: uuidv4(),
          value: currentInput.substring(0, currentInput.length - 2),
          html: `h${currentInput[-1]}}` as allowedHtml,
        },
      });
      setshowPopUp({
        isPopUp: false,
        type: Number(currentInput[-1]),
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
  }
};

const handleChange = (props: handleChangePropsInterface) => {
  const { value, setshowPopUp, setCurrentInput, showPopUp } = props;
  if (
    value[value.length - 1] === "/" ||
    (value[value.length - 2] === "/" && Number(value[value.length - 1]) < 7)
  ) {
    setshowPopUp({
      isPopUp: true,
      type: Number(value[value.length - 1])
        ? Number(value[value.length - 1])
        : 0,
    });
    setCurrentInput(value);
  } else {
    showPopUp.isPopUp && setshowPopUp({ isPopUp: false, type: 0 });
  }
  setCurrentInput(value);
};
export { submitInput, handleChange };
