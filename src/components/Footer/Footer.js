import { Fragment, useEffect, useState } from "react";
import FooterDefault from "./FooterDefault";
import FooterQueries from "./FooterQueries";

const getScreenWidth = function () {
  const { innerWidth } = window;
  return innerWidth;
};

const Footer = () => {
  const width = getScreenWidth();
  // console.log("re-render");
  const [isScreenQueries, setIsScreenQueries] = useState(
    width > 850 ? false : true
  );

  useEffect(() => {
    const checkWidth = () => {
      const width = getScreenWidth();
      // console.log("Screen width check");
      setIsScreenQueries(width > 850 ? false : true);
    };
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <Fragment>
      {!isScreenQueries && <FooterDefault />}
      {isScreenQueries && <FooterQueries />}
    </Fragment>
  );
};

export default Footer;
