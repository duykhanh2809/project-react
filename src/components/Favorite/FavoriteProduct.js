import ProductItem from "../Product/ProductItem";
import { CaretRight, CaretLeft } from "phosphor-react";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import useFetch from "../../hooks/use-fetch";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="favorite__btn" onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="favorite__btn" onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};

const FavoriteProduct = (props) => {
  const { isLoading, dataRender, hasError, fetchShoesSale } = useFetch();

  useEffect(() => {
    fetchShoesSale(
      "https://project-react-cf626-default-rtdb.firebaseio.com/sales.json"
    );
  }, [fetchShoesSale]);

  return (
    <section className="favorite-section container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <div className="favorite__heading">
          {!props.anotherSite && (
            <h2 className="heading-secondary">Our favorite models on sale</h2>
          )}
          {props.anotherSite && (
            <h2 className="heading-secondary">You might also like</h2>
          )}
          <div>
            <SwiperButtonPrev>
              <CaretLeft size={16} color="black" weight="bold" />
            </SwiperButtonPrev>
            <SwiperButtonNext>
              <CaretRight size={16} color="black" weight="bold" />
            </SwiperButtonNext>
          </div>
        </div>

        {dataRender.map((ele, ind) => {
          return (
            <SwiperSlide key={ind}>
              <ProductItem
                key={ind}
                isSale={true}
                name={ele.name}
                price={ele.price}
                priceSale={ele.priceSale}
                imageUrl={ele.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {isLoading && <LoadingSpinner />}
      {hasError && <p className="error-boundary">{hasError}</p>}
    </section>
  );
};

export default FavoriteProduct;
