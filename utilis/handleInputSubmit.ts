import { v4 as uuidv4 } from "uuid";
import {
  allowedHtml,
  handleChangePropsInterface,
  submitPropsInterfacce,
} from "../interfaces/dataInterface";


const shouldShowPopUp = (value: string) => {
  return value[value.length - 1] === "/" ||
    (value[value.length - 2] === "/" && Number(value[value.length - 1]) < 7)
}

const submitInput = (props: submitPropsInterfacce) => {
  const {
    currentInput,
    dispatchData,
    popUpAndHeader,
    dispatchPopAction
  } = props;
  // if the person has entered a test before the html header identifier. I still want to show that text without the identifier

  if (currentInput.length) {
    let currentText = currentInput.length > 2 && popUpAndHeader?.showPopUp && Number(currentInput[currentInput.length - 1]) < 7
      ? currentInput.substring(0, currentInput.length - 2)
      : currentInput;

    // if showPopUp is true and we have a valid header tag and canuseheader is false 
    if (popUpAndHeader.showPopUp && Number(currentInput[currentInput.length - 1]) && Number(currentInput[currentInput.length - 1]) < 7) {
      let headerInd = Number(currentInput[currentInput.length - 1]);
      let newPopState = {
        showPopUp: false,
        headerType: popUpAndHeader.canUseHeader ? `h${headerInd}` : "div",
        canUseHeader: popUpAndHeader.canUseHeader ? false : true
      }
      dispatchPopAction(newPopState)
    }
    dispatchData({
      type: "ADD_TEXT",
      payload: {
        id: uuidv4(),
        value: currentText,
        html: `${popUpAndHeader.headerType}` as allowedHtml,
      },
    });
  }


};

const handleChange = (props: handleChangePropsInterface) => {
  const { value, setCurrentInput, popUpAndHeader, dispatchPopAction } =
    props;
  //if the currentinput value satistisfy the conditions to open a popup, we should do so
  if (
    shouldShowPopUp(value)
  ) {
    let newPopState = {
      showPopUp: true,
      headerType: popUpAndHeader.headerType,
      canUseHeader: popUpAndHeader.canUseHeader
    }
    dispatchPopAction(newPopState)
  }
  else {
    if (popUpAndHeader.showPopUp && !shouldShowPopUp(value)) {
      let newPopState = {
        showPopUp: false,
        headerType: popUpAndHeader.headerType,
        canUseHeader: popUpAndHeader.canUseHeader
      }
      dispatchPopAction(newPopState)
    }
  }

  setCurrentInput(value);
};
export { submitInput, handleChange };
