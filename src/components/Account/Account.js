import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AccountSideBar from "./AccountSideBar";
import AccountRegister from "./AccountRegister";

const Account = () => {
  return (
    <Fragment>
      <Header pages="" />
      <main className="account">
        <AccountSideBar />
        <AccountRegister />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Account;
