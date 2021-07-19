import React, { createContext, useState } from "react";

const ChecksContext = createContext({
  lists: [],
  setLists: () => {},
  storeValue: ({ item, index, type }) => {
    const local = localStorage.getItem(`lists${type}`) || "";
    const parseLocal = JSON.parse(local);
    const dataUpdate = [
      ...parseLocal.slice(0, index),
      item,
      ...parseLocal.slice(index + 1, parseLocal.length),
    ]
    localStorage.setItem(`lists${type}`, JSON.stringify(dataUpdate));
  },
});

export const CheckProvider = ({ children }) => {
  const [lists, setLists] = useState({
    before: [],
    after: [],
  });

  return (
    <ChecksContext.Provider value={{ lists, setLists }}>
      {children}
    </ChecksContext.Provider>
  );
};

export default ChecksContext;
