import ProductItem from "../Product/ProductItem";
import { CaretRight, CaretLeft } from "phosphor-react";
import { useState } from "react";

const FavoriteProduct = () => {
  // dummy data
  const [data, setData] = useState([0, 1, 2, 3, 4, 5, 6]);
  const prevItemHandler = () => {
    const itemChange = [data.at(-1)];
    const dataNew = data.slice(0, -1);
    setData(itemChange.concat(dataNew));
  };
  const nextItemHandler = () => {
    const itemChange = [data.at(0)];
    const dataNew = data.slice(1);
    setData(dataNew.concat(itemChange));
  };

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
      <div className="favorite__content">
        {data.map((ele, ind) => {
          if (ind < 3) return <ProductItem id={ele} key={ind} hidden={false} />;
          return <ProductItem id={ele} key={ind} hidden={true} />;
        })}
      </div>
    </section>
  );
};

export default FavoriteProduct;
