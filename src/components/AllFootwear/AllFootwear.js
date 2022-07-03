import { useEffect } from "react";

import ProductItem from "../Product/ProductItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import useFetch from "../../hooks/use-fetch";

const AllFootwear = function () {
  const { isLoading, dataRender, fetchShoesSale } = useFetch();

  useEffect(() => {
    fetchShoesSale(
      "https://project-react-cf626-default-rtdb.firebaseio.com/all.json"
    );
  }, [fetchShoesSale]);

  return (
    <div className="pages-all">
      <p className="sub-heading mg-bt-large ">All footwear</p>
      {isLoading && <LoadingSpinner />}
      <div className="pages-all__grid">
        {dataRender.map((ele, ind) => {
          if (ind < 6)
            return (
              <ProductItem
                key={ind}
                name={ele.name}
                isSale={ele.priceSale}
                price={ele.price}
                priceSale={ele.priceSale}
                imageUrl={ele.image}
              />
            );
        })}
      </div>
      <div className="pages-all__grid-custom">
        {dataRender.map((ele, ind) => {
          if (ind > 5)
            return (
              <ProductItem
                key={ind}
                name={ele.name}
                isSale={ele.priceSale}
                price={ele.price}
                priceSale={ele.priceSale}
                imageUrl={ele.image}
              />
            );
        })}
      </div>
    </div>
  );
};

export default AllFootwear;
