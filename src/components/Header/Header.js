import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductNav from "./ProductNav";
import ServiceNav from "./ServiceNav";
import CheckAccount from "../Account/CheckAccount";
import CheckContext from "../../store/ContextAPI/check-context";
import { ModalMain } from "../UI/Modal";
import Bag from "../Cart/Cart";
import BagDropDown from "../Cart/CartDropDown";

const Header = (props) => {
  const accountCtx = useContext(CheckContext);

  const headerClasses =
    props.pages === "hero" ? "header" : "header header-modify";

  return (
    <header className={headerClasses}>
      <Link to="/" className="header__logo">
        ETQ.
      </Link>
      <nav className="header__nav">
        <ProductNav page={props.pages} />
        <ServiceNav />
      </nav>
      {/* <Cart /> */}
      <Bag />
      {accountCtx.isChecking && <CheckAccount />}
      {accountCtx.isChecking && <ModalMain />}
      <BagDropDown />
    </header>
  );
};
export default Header;
