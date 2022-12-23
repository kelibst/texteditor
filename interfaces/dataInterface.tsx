type allowedHtml = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface submitPropsInterfacce {
  showPopUp: {
    isPopUp: boolean;
    type: number;
  };
  currentInput: string;
  dispatchData: React.Dispatch<actionInterface>;
  setshowPopUp: React.Dispatch<
    React.SetStateAction<{
      isPopUp: boolean;
      type: number;
    }>
  >;
}

interface txtInterface {
  id: string;
  value: string;
  html?: allowedHtml;
}

interface allowableInterface {
  showPopUp: {
    isPopUp: boolean;
    type: number;
  };
  setshowPopUp: React.Dispatch<
    React.SetStateAction<{
      isPopUp: boolean;
      type: number;
    }>
  >;
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
  setshowPopUp: React.Dispatch<
    React.SetStateAction<{
      isPopUp: boolean;
      type: number;
    }>
  >;
  setCurrentInput: React.Dispatch<React.SetStateAction<string>>;
  showPopUp: {
    isPopUp: boolean;
    type: number;
  };
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
