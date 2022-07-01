import React from "react";
import { useState } from "react";

const CheckContext = React.createContext({
  isChecking: false,
});

export default CheckContext;

export const CheckContextProvider = (props) => {
  const [isChecking, setIsChecking] = useState(false);

  const cancelCheck = () => {
    setIsChecking(false);
  };

  const setChecking = () => {
    setIsChecking(true);
  };

  const initialValue = {
    isChecking,
    cancelCheck,
    setChecking,
  };

  return (
    <CheckContext.Provider value={initialValue}>
      {props.children}
    </CheckContext.Provider>
  );
};
