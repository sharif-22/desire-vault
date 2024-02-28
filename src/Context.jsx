import React from "react";
import { createContext, useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
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
