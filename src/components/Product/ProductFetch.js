import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import LoadingSpinner from "../UI/LoadingSpinner";
import ProductDetails from "./ProductDetails";
import ErrorBoundary from "../UI/ErrorBoundary";

const ProductFetch = () => {
  const [dataItem, setDataItem] = useState();
  const { productId } = useParams();
  const { isLoading, hasError, fetchShoesSale } = useFetch();

  useEffect(() => {
    const matchItem = function (dataValue) {
      const items = dataValue.filter((ele) => {
        const id = ele.name.toLowerCase().replaceAll(" ", "-");
        return id === productId;
      });
      setDataItem(...items);
    };

    fetchShoesSale(
      "https://project-react-cf626-default-rtdb.firebaseio.com/all.json",
      matchItem
    );
  }, [productId]);

  return (
    <ErrorBoundary>
      <section className="product-details">
        <div className="product-error">
          {isLoading && <LoadingSpinner />}
          {hasError && <p className="error-boundary">{hasError}</p>}
        </div>
        {dataItem && <ProductDetails productData={dataItem} />}
      </section>
    </ErrorBoundary>
  );
};

export default ProductFetch;
