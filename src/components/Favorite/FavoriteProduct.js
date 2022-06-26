import ProductItem from "../Product/ProductItem";
import { CaretRight, CaretLeft } from "phosphor-react";

const order = [0, 1, 2, 3, 4, 5, 6];

const FavoriteProduct = () => {
  const prevItemHandler = () => {};
  const nextItemHandler = () => {};

  return (
    <section className="favorite-section">
      <div className="favorite__heading">
        <h2 className="heading-secondary">Our favorite models on sale</h2>
        <div>
          <button className="favorite__btn" onClick={prevItemHandler}>
            <CaretLeft size={16} color="black" weight="bold" />
          </button>
          <button className="favorite__btn" onClick={nextItemHandler}>
            <CaretRight size={16} color="black" weight="bold" />
          </button>
        </div>
      </div>
      <div className="favorite__content" id="1">
        {order.map((ele, ind) => {
          return <ProductItem key={ind} id={ind} />;
        })}
      </div>
    </section>
  );
};

export default FavoriteProduct;
