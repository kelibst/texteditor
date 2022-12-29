import { createContext, useContext, useReducer } from "react";
import { actionInterface, popstateInterface, txtInterface } from "../interfaces/dataInterface";
import popUpAndHeaderReducer from "../reducers/popUpAndHeaderReducer";
import textReducer from "../reducers/TextValues";

 const initialPopState: popstateInterface = {
    showPopUp: false,
    headerType: "div",
    canUseHeader: false
 } as popstateInterface
  
const initialContext = {
  textData: [] as txtInterface[],
  dispatchData: (() => { }) as React.Dispatch<actionInterface>,
  popUpAndHeader: initialPopState as popstateInterface,
  dispatchPopAction: (() => {}) as React.Dispatch<popstateInterface>
};
const TextContext = createContext(initialContext);

const useText = () => useContext(TextContext);

const TextProvider = ({ children }: { children: React.ReactNode }) => {
  const initaltext: txtInterface[] = [] as txtInterface[];
    //setup complex state and action for the input form
 
  const [popUpAndHeader, dispatchPopAction] = useReducer(popUpAndHeaderReducer, initialPopState)
  
  const [textData, dispatchData] = useReducer(textReducer, initaltext);
  return (
    <TextContext.Provider value={{ textData, dispatchData,  popUpAndHeader, dispatchPopAction}}>
      {children}
    </TextContext.Provider>
  );
};

export { TextProvider, useText };
