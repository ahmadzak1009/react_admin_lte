import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = props => {
  const [user, setUser] = useState([]);

  return <Context.Provider value={{ user }}>{props.children}</Context.Provider>;
};
