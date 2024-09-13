import React, { Children, createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
const currSymbol = '₹';

  const value = {
    doctors,currSymbol,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
