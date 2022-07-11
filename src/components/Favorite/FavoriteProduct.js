import { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import ProductItem from "../Product/ProductItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import { CaretRight, CaretLeft } from "phosphor-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import useReveal from "../../hooks/use-reveal";

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
  const [isReveal, sectionRef] = useReveal();
  const { isLoading, dataRender, hasError, fetchShoesSale } = useFetch();

  useEffect(() => {
    fetchShoesSale(
      "https://project-react-cf626-default-rtdb.firebaseio.com/sales.json"
    );
  }, [fetchShoesSale]);

  const favoriteClasses = !isReveal ? "section-reveal" : "";

  return (
    <section
      className={`favorite-section container ${favoriteClasses}`}
      ref={sectionRef}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 600px
          600: {
            slidesPerView: 2,
          },
          // when window width is >= 700px
          700: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="favorite__heading">
          {!props.anotherSite && (
            <h2 className="heading-secondary">Our favorite models on sale</h2>
          )}
          {props.anotherSite && (
            <h2 className="heading-secondary">You might also like</h2>
          )}
          <div className="favorite__heading-btn">
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
              <ProductItem isSale={true} key={ind} product={ele} />
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
