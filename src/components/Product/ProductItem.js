import { useNavigate } from "react-router-dom";
import CheckContext from "../../store/ContextAPI/check-context";
import { useContext } from "react";

const ProductItem = (props) => {
  const navigate = useNavigate();
  const productCtx = useContext(CheckContext);

  const viewItemHandler = () => {
    const productsId = props.product.name.toLowerCase().replaceAll(" ", "-");
    navigate(`/products/${productsId}`, { replace: false });
    productCtx.setChangingProduct(true);
  };

  return (
    <figure className="product-item" onClick={viewItemHandler}>
      {props.isSale && <span className="text-describe">-30%</span>}

      <img
        src={props.product.image.first}
        alt="Shoe 1"
        className="product-item__img"
      />

      <img
        src={props.product.image.second}
        alt="Shoe 1"
        className="product-item__img product-item__img--hover"
      />

      <figcaption>
        <p className="sub-heading">{props.product.name}</p>
        {props.isSale && (
          <p className="text-describe">
            <del>€{props.product.price}</del>€{props.product.priceSale}
          </p>
        )}
        {!props.isSale && (
          <p className="text-describe">€{props.product.price}</p>
        )}
      </figcaption>
    </figure>
  );
};

export default ProductItem;
