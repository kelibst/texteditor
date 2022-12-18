type allowedHtml = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface txtInterface {
  id: string;
  value: string;
  html?: allowedHtml;
}

interface allowableInterface {
  isAllowable: boolean;
  setisAllowable: React.Dispatch<React.SetStateAction<boolean>>;
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
export type {
  txtInterface,
  propsInterface,
  actionInterface,
  allowedHtml,
  allowableInterface,
};
