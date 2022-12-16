import { txtInterface } from "../interfaces/dataInterface";

interface action {
  type: string;
  payload: txtInterface;
}

const textReducer = (state: txtInterface[], action: action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return [...state, action.payload];
    case "UPDATE_TEXT":
      const updatedState = state.map((data) => {
        if (
          data.id === action.payload.id &&
          action.payload.value !== data.value &&
          action.payload.value?.length
        ) {
          return {
            ...data,
            value: action.payload.value,
          };
        }
        return data;
      });
      return updatedState;
    case "DELETE_TEXT":
      const newState = state.filter((data) => data.id !== action.payload.id);
      return newState;
    default:
      return state;
  }
};

export default textReducer;
