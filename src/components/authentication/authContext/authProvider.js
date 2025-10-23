import React, { createContext, useContext } from "react";

const useAuthData = createContext();

export const useAuthenticateData = () => useContext(useAuthData);

export const AuthProvider = ({ children, value }) => (
  <useAuthData.Provider value={value}>{children}</useAuthData.Provider>
);
