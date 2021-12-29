import React, { createContext, useReducer } from "react";
import AppReducer from "../context/appReducer.js";
const initialState = {
  tasks: [
    {
      id: 1,
      text: "Go for watching Movie",
      day: "Feb 14th at 07:00pm",
      reminder: true
    },
    {
      id: 2,
      text: "Go for Party",
      day: "Feb 16th at 08:00pm",
      reminder: true
    },
    {
      id: 3,
      text: "Attend Cricket Tournament",
      day: "Feb 19th at 10:00am",
      reminder: false
    }
  ]
};

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
