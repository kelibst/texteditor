type allowedHtml = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

interface submitPropsInterfacce {
  showPopUp: boolean;
  currentInput: string;
  dispatchData: React.Dispatch<actionInterface>;
  setshowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  headerType: string;
  setheaderType: React.Dispatch<React.SetStateAction<string>>;
}

interface txtInterface {
  id: string;
  value: string;
  html: allowedHtml;
}

interface allowableInterface {
  showPopUp: boolean;
  setshowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  headerType: string;
  setheaderType: React.Dispatch<React.SetStateAction<string>>;
}

interface actionInterface {
  type: string;
  payload: txtInterface;
}

interface propsInterface {
  value: txtInterface;
  textClasses: string;
  setEditable: React.Dispatch<React.SetStateAction<string>>;
  handleUpdae: (value: txtInterface) => void;
  isH1: boolean;
}
interface handleChangePropsInterface {
  value: string;
  setshowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentInput: React.Dispatch<React.SetStateAction<string>>;
  showPopUp: boolean;
  headerType: string;
  setheaderType: React.Dispatch<React.SetStateAction<string>>;
}
export type {
  txtInterface,
  propsInterface,
  actionInterface,
  allowedHtml,
  allowableInterface,
  submitPropsInterfacce,
  handleChangePropsInterface,
};
