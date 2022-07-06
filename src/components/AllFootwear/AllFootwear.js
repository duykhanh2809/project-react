import { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import ProductItem from "../Product/ProductItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorBoundary from "../UI/ErrorBoundary";

const AllFootwear = function () {
  const { isLoading, dataRender, hasError, fetchShoesSale } = useFetch();

  useEffect(() => {
    fetchShoesSale(
      "https://project-react-cf626-default-rtdb.firebaseio.com/all.json"
    );
  }, [fetchShoesSale]);

  return (
    <ErrorBoundary>
      <div className="pages-all container">
        <p className="sub-heading mg-bt-large ">All footwear</p>
        {isLoading && <LoadingSpinner />}
        {hasError && <p className="error-boundary">{hasError}</p>}
        <div className="pages-all__grid">
          {dataRender.map((ele, ind) => {
            if (ind < 6)
              return (
                <ProductItem key={ind} product={ele} isSale={ele.priceSale} />
              );
          })}
        </div>
        <div className="pages-all__grid-custom">
          {dataRender.map((ele, ind) => {
            if (ind > 5)
              return (
                <ProductItem key={ind} product={ele} isSale={ele.priceSale} />
              );
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AllFootwear;
