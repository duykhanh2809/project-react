import React from "react";
import { useState } from "react";

const CheckContext = React.createContext({
  isChecking: false,
});

export default CheckContext;

export const CheckContextProvider = (props) => {
  const [isAccountChecking, setIsAccountChecking] = useState(false);
  const [isCartChecking, setIsCartChecking] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [isChangingProduct, setIsChangingProduct] = useState(false);

  const cancelCheck = () => {
    setIsAccountChecking(false);
    setIsCartChecking(false);
    setIsChecking(false);
  };

  const setAccountChecking = () => {
    setIsAccountChecking(true);
    setIsChecking(true);
  };

  const setCartChecking = () => {
    setIsCartChecking(true);
    setIsChecking(true);
  };

  const setChangingProduct = (para) => {
    setIsChangingProduct(para);
  };

  const initialValue = {
    isChecking,
    isAccountChecking,
    isCartChecking,
    isChangingProduct,
    setAccountChecking,
    setCartChecking,
    setChangingProduct,
    cancelCheck,
  };

  return (
    <CheckContext.Provider value={initialValue}>
      {props.children}
    </CheckContext.Provider>
  );
};
