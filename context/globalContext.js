import { createContext } from "react";
import React from "react";

export const global = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [showSideNav, setShowSideNav] = React.useState(false);

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <global.Provider value={{ showSideNav, setShowSideNav, handleShowSideNav }}>
      {children}
    </global.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(global);
};
