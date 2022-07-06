import { useNavigate } from "react-router-dom";
import CheckContext from "../../store/ContextAPI/check-context";
import { useContext } from "react";

const ProductItem = (props) => {
  const navigate = useNavigate();
  const productCtx = useContext(CheckContext);

  const viewItemHandler = () => {
    const productsId = props.name.toLowerCase().replaceAll(" ", "-");
    navigate(`/products/${productsId}`, { replace: true });
    productCtx.setChangingProduct(true);
  };

  return (
    <figure className="product-item" onClick={viewItemHandler}>
      {props.isSale && <span className="text-describe">-30%</span>}

      <img
        src={props.imageUrl.first}
        alt="Shoe 1"
        className="product-item__img"
      />

      <img
        src={props.imageUrl.second}
        alt="Shoe 1"
        className="product-item__img product-item__img--hover"
      />

      <figcaption>
        <p className="sub-heading">{props.name}</p>
        {props.isSale && (
          <p className="text-describe">
            <del>€{props.price}</del>€{props.priceSale}
          </p>
        )}
        {!props.isSale && <p className="text-describe">€{props.price}</p>}
      </figcaption>
    </figure>
  );
};

export default ProductItem;
