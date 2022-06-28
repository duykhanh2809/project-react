import { useNavigate } from "react-router-dom";

const ProductItem = (props) => {
  const navigate = useNavigate();
  const productClasses = props.hidden
    ? "product-item product-hidden"
    : "product-item";

  const viewItemHandler = () => {
    const productsId = props.name.toLowerCase().replaceAll(" ", "-");
    navigate(`/products/${productsId}`, { replace: true });
  };

  return (
    <figure className={productClasses} onClick={viewItemHandler}>
      {props.isSale && <span className="text-describe">-30%</span>}
      <img
        src={props.imageUrl.first}
        alt="Shoe 1"
        className="product-item__img"
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
