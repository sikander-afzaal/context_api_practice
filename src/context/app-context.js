import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import data from "../data.json";
export const AppContext = createContext();

function AppContextComp({ children }) {
  const { products } = data;
  const [cartState, dispatchCart] = useReducer(reducer, {
    cart: [],
    products: products,
  });

  return (
    <AppContext.Provider value={{ cartState, dispatchCart }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextComp;
