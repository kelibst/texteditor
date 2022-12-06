interface txt {
  id: string;
  value: string;
}

interface propsInterface {
  value: txt;
  textClasses: string;
  setEditable: React.Dispatch<React.SetStateAction<string>>;
  handleUpdae: (value: txt) => void;
  isH1: boolean;
}
export type { txt, propsInterface };
