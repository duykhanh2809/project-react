import { useState, useEffect, Fragment } from "react";
import HeaderDefault from "./HeaderDefault";
import HeaderQueries from "./HeaderQueries";

const getWindowSize = () => {
  const { innerWidth } = window;
  return innerWidth;
};

const Header = (props) => {
  const widthScreen = getWindowSize();

  const [screenToQueries, setScreenToQueries] = useState(
    widthScreen > 850 ? true : false
  );

  const checkScreenSize = function () {
    const widthScreen = getWindowSize();
    setScreenToQueries(widthScreen > 850 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <Fragment>
      {screenToQueries && <HeaderDefault />}
      {!screenToQueries && <HeaderQueries />}
    </Fragment>
  );
};
export default Header;
