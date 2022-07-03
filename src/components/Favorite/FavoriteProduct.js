import ProductItem from "../Product/ProductItem";
import { CaretRight, CaretLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import useFetch from "../../hooks/use-fetch";

const FavoriteProduct = (props) => {
  const { isLoading, dataRender, fetchShoesSale } = useFetch();
  // custom
  const [currentSlide, setCurrentSlide] = useState(2);

  const prevItemHandler = () => {
    setCurrentSlide(
      currentSlide !== 0 ? currentSlide - 1 : dataRender.length - 1
    );
  };
  const nextItemHandler = () => {
    setCurrentSlide(currentSlide === dataRender.length ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    fetchShoesSale(
      "https://project-react-cf626-default-rtdb.firebaseio.com/sales.json"
    );
  }, [fetchShoesSale]);

  return (
    <section className="favorite-section">
      <div className="favorite__heading">
        {!props.anotherSite && (
          <h2 className="heading-secondary">Our favorite models on sale</h2>
        )}
        {props.anotherSite && (
          <h2 className="heading-secondary">You might also like</h2>
        )}
        <div>
          <button className="favorite__btn" onClick={prevItemHandler}>
            <CaretLeft size={16} color="black" weight="bold" />
          </button>
          <button className="favorite__btn" onClick={nextItemHandler}>
            <CaretRight size={16} color="black" weight="bold" />
          </button>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      <div className="favorite__content">
        {dataRender.map((ele, ind) => {
          return (
            <ProductItem
              key={ind}
              isSale={true}
              name={ele.name}
              price={ele.price}
              priceSale={ele.priceSale}
              imageUrl={ele.image}
            />
          );
          return;
        })}
      </div>
    </section>
  );
};

export default FavoriteProduct;
