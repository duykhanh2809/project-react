import ProductItem from "../Product/ProductItem";
import { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorBoundary from "../UI/ErrorBoundary";

const Sale = function () {
  const { isLoading, dataRender, hasError, fetchShoesSale } = useFetch();

  useEffect(() => {
    fetchShoesSale(
      "https://project-react-cf626-default-rtdb.firebaseio.com/sales.json"
    );
  }, [fetchShoesSale]);

  return (
    <ErrorBoundary>
      <div className="pages-sale">
        <p className="sub-heading mg-bt-medium ">We're live.</p>
        <h2 className="heading-secondary mg-bt-huge">S/S 22 Sale. 30% Off.</h2>
        <div className="pages-sale__grid">
          {isLoading && <LoadingSpinner />}
          {hasError && <p className="error-boundary">{hasError}</p>}
          {dataRender.map((ele, ind) => {
            return (
              <ProductItem
                isSale={true}
                key={ind}
                name={ele.name}
                price={ele.price}
                priceSale={ele.priceSale}
                imageUrl={ele.image}
              />
            );
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Sale;
