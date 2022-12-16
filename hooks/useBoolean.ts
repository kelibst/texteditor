import React, { useReducer, useState } from "react";

type UseBooleanReturnType = [
  boolean,
  { setBoolean: (value: boolean) => void; toggle: () => void }
];

const useBoolean = (initialState = false): UseBooleanReturnType => {
  const [state, dispatch] = useReducer((state: boolean, action: string) => {
    switch (action) {
      case "SET_TRUE":
        return true;
      case "SET_FALSE":
        return false;
      case "TOGGLE":
        return !state;
      default:
        return state;
    }
  }, initialState);

  const setBoolean = (value: boolean) => {
    dispatch(value ? "SET_TRUE" : "SET_FALSE");
  };

  const toggle = () => {
    dispatch("TOGGLE");
  };

  return [state, { setBoolean, toggle }];
};

export { useBoolean };
