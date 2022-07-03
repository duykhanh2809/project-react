import { Link } from "react-router-dom";

function ProductNav() {
  return (
    <ul className="product">
      <li className="product__link">
        <Link to="/sale" className="btn-custom btn-custom__modify">
          Sale
        </Link>
      </li>
      <li className="product__link">
        <Link to="/shoes" className="btn-custom btn-custom__modify">
          Shop All
        </Link>
      </li>
      <li className="product__link">E-Gift Card</li>
    </ul>
  );
}

export default ProductNav;
