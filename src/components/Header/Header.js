import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import ProductNav from "./ProductNav";
import ServiceNav from "./ServiceNav";
import CheckAccount from "../Account/CheckAccount";
import CheckContext from "../../store/ContextAPI/check-context";
import { ModalMain } from "../UI/Modal";
import Cart from "../Cart/Cart";
import CartDropDown from "../Cart/CartDropDown";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const accountCtx = useContext(CheckContext);
  const location = useLocation();

  const headerClasses =
    location.pathname === "/" ? "header header-modify" : "header";

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
      <Cart />
      {accountCtx.isAccountChecking && <CheckAccount />}
      {accountCtx.isCartChecking && <CartDropDown />}
      {accountCtx.isChecking && <ModalMain />}
    </header>
  );
};
export default Header;
