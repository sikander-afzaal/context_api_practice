import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import data from "../data.json";
import filterReducer from "./filterReducer";
export const AppContext = createContext(); //creating context

function AppContextComp({ children }) {
  //first global state
  const { products } = data;
  const [cartState, dispatchCart] = useReducer(reducer, {
    cart: [],
    products: products,
  });
  //second global state
  const [filterState, dispatchFilter] = useReducer(filterReducer, {
    search: "",
  });

  return (
    <AppContext.Provider
      value={{ cartState, dispatchCart, filterState, dispatchFilter }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextComp;
