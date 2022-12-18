import { createContext, useContext, useReducer } from "react";
import { actionInterface, txtInterface } from "../interfaces/dataInterface";
import textReducer from "../reducers/TextValues";

const initialContext = {
  textData: [] as txtInterface[],
  dispatchData: (() => {}) as React.Dispatch<actionInterface>,
};
const TextContext = createContext(initialContext);

const useText = () => useContext(TextContext);

const TextProvider = ({ children }: { children: React.ReactNode }) => {
  const initaltext: txtInterface[] = [] as txtInterface[];
  const [textData, dispatchData] = useReducer(textReducer, initaltext);
  return (
    <TextContext.Provider value={{ textData, dispatchData }}>
      {children}
    </TextContext.Provider>
  );
};

export { TextProvider, useText };
