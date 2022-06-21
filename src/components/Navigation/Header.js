import ProductNav from "./ProductNav";
import ServiceNav from "./ServiceNav";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <header className="header">
      <a href="#">ETQ.</a>
      <nav>
        <ProductNav />
        <ServiceNav />
      </nav>
      {/* <Cart /> */}
      <p>Cart</p>
    </header>
  );
};
export default Header;
