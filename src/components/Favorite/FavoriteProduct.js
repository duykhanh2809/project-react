import ProductItem from "../Product/ProductItem";
import { CaretRight, CaretLeft } from "phosphor-react";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import useFetch from "../../hooks/use-fetch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const FavoriteProduct = (props) => {
  const { isLoading, dataRender, hasError, fetchShoesSale } = useFetch();

  const sliderRef = useRef(null);

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
          <button
            className="favorite__btn"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <CaretLeft size={16} color="black" weight="bold" />
          </button>
          <button
            className="favorite__btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            <CaretRight size={16} color="black" weight="bold" />
          </button>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      {hasError && <p className="error-boundary">{hasError}</p>}
      {/* <div className="favorite__content"> */}
      <Slider {...settings} ref={sliderRef}>
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
        })}
      </Slider>
      {/* </div> */}
    </section>
  );
};

export default FavoriteProduct;
