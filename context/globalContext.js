import { createContext, useEffect } from "react";
import React from "react";

export const global = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [showSideNav, setShowSideNav] = React.useState(true);
  const [showSpinner, setShowSpinner] = React.useState(false);

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <global.Provider
      value={{
        showSideNav,
        setShowSideNav,
        handleShowSideNav,
        showSpinner,
        setShowSpinner,
      }}
    >
      {children}
    </global.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(global);
};
