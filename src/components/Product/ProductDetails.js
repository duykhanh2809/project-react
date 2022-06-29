import { Fragment } from "react";
import FavoriteProduct from "../Favorite/FavoriteProduct";
import ProductBuy from "./ProductBuy";
import ProductInfo from "./ProductInfo";

const ProductDetails = (props) => {
  const imageRender = Object.values(props.productData.image);
  return (
    <Fragment>
      <div className="product-inner">
        <div className="product-images">
          {imageRender.map((ele, ind) => {
            return (
              <img
                src={ele}
                alt="Image details"
                key={ind}
                className="product-img"
              />
            );
          })}
        </div>
        <ProductBuy productData={props.productData} />
      </div>
      <ProductInfo />
      <FavoriteProduct anotherSite={true} />
    </Fragment>
  );
};

export default ProductDetails;
