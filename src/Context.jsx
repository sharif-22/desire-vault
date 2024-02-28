import React from "react";
import { createContext, useState } from "react";

export const Vault = createContext();

const Context = ({ children }) => {
  let userUID = null;
  return <Vault.Provider value={[userUID]}>{children}</Vault.Provider>;
};

export default Context;
