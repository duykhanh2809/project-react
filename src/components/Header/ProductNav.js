import { Link } from "react-router-dom";

function ProductNav(props) {
  const productClasses =
    props.page === "hero" ? "product" : "product product-modify";
  return (
    <ul className={productClasses}>
      <Link to="/sale" className="btn-custom">
        Sale
      </Link>
      <Link to="/shoes" className="btn-custom">
        Shop All
      </Link>
      <li>E-Gift Card</li>
    </ul>
  );
}

export default ProductNav;
