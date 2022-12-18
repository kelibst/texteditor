interface txtInterface {
  id: string;
  value: string;
  html?: string;
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
export type { txtInterface, propsInterface, actionInterface };
