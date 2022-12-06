interface txt {
  id: string;
  value: string;
}

interface propsInterface {
  value: txt;
  textClasses: string;
  setEditable: React.Dispatch<React.SetStateAction<string>>;
  handleUpdae: (value: txt) => void;
}
export type { txt, propsInterface };
