import React, { createContext } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const ShopProvider = (props) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
export default ShopProvider
