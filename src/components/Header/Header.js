import { Link } from "react-router-dom";

import ProductNav from "./ProductNav";
import ServiceNav from "./ServiceNav";
import Cart from "../Cart/Cart";
import CheckAccount from "../Account/CheckAccount";

const Header = (props) => {
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
      <p>Cart</p>
      {/* <CheckAccount /> */}
    </header>
  );
};
export default Header;
