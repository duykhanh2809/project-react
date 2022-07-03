import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import ProductDetails from "./ProductDetails";
import useFetch from "../../hooks/use-fetch";
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
        {isLoading && <LoadingSpinner />}
        {hasError && <p className="error-boundary">{hasError}</p>}
        {dataItem && <ProductDetails productData={dataItem} />}
      </section>
    </ErrorBoundary>
  );
};

export default ProductFetch;
