interface txtInterface {
  id: string;
  value: string;
  isHeader: boolean;
}

interface propsInterface {
  value: txtInterface;
  textClasses: string;
  setEditable: React.Dispatch<React.SetStateAction<string>>;
  handleUpdae: (value: txtInterface) => void;
  isH1: boolean;
}
export type { txtInterface, propsInterface };
