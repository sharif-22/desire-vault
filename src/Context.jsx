import React from "react";
import { createContext, useState } from "react";
export const Vault = createContext();

const Context = ({ children }) => {
  let userUID = null;

  const [render, reRender] = useState(false);

  return (
    <Vault.Provider value={[userUID, render, reRender]}>
      {children}
    </Vault.Provider>
  );
};

export default Context;
