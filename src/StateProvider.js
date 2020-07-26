//setup data layer
// need this to track the cart

import React, { createContext, useContext, useReducer } from "react";

//This is a data layer
export const StateContext = createContext();

//building a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
