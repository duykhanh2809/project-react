import ProductNav from "./ProductNav";
import ServiceNav from "./ServiceNav";
import Cart from "../Cart/Cart";
import CheckAccount from "../Account/CheckAccount";

const Header = (props) => {
  const headerClasses =
    props.pages === "hero" ? "header" : "header header-modify";
  return (
    <header className={headerClasses}>
      <a href="#" className="header__logo">
        ETQ.
      </a>
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
