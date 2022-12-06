import { txt } from "../interfaces/dataInterface";

const TextReducer = (
  state: txt[],
  action: {
    type: string;
    payload: {
      id: string;
      value: string;
    };
    nexState: txt[];
  }
) => {
  switch (action.type) {
    case "ADD_TEXT":
      return [...state, action.payload];
    case "UPDATE_TEXT":
      return [...action.nexState];
    default:
      return state;
  }
};

export { TextReducer };
