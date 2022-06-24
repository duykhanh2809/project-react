import { Fragment } from "react";
import Account from "../Account/Account";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = function (props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
