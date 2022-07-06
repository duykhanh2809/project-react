import { Fragment, useEffect, useState } from "react";
import FooterDefault from "./FooterDefault";
import FooterQueries from "./FooterQueries";

const getScreenWidth = function () {
  const { innerWidth } = window;
  return innerWidth;
};

const Footer = () => {
  const width = getScreenWidth();
  const [isScreenQueries, setIsScreenQueries] = useState(
    width > 850 ? false : true
  );

  useEffect(() => {
    const checkWidth = () => {
      const width = getScreenWidth();
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
