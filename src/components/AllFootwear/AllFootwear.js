import { useState, useEffect } from "react";

import ProductItem from "../Product/ProductItem";

const AllFootwear = function () {
  const [dataAll, setDataAll] = useState([]);
  const [dataSale, setDataSale] = useState([]);

  // Data render
  useEffect(() => {
    const fetchShoesSale = async function () {
      const response = await fetch(
        "https://project-react-cf626-default-rtdb.firebaseio.com/noDiscount.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const dataAll = await response.json();
      const dataValueAll = Object.values(dataAll);
      setDataAll(dataValueAll);

      // fetching sale items
      const responseSale = await fetch(
        "https://project-react-cf626-default-rtdb.firebaseio.com/sales.json"
      );
      if (!responseSale.ok) {
        throw new Error("Something went wrong!");
      }
      const dataSale = await responseSale.json();
      const dataValueSale = Object.values(dataSale);
      setDataSale(dataValueSale);
      return dataSale;
    };

    fetchShoesSale().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <div className="pages-all">
      <p className="sub-heading mg-bt-large ">All footwear</p>
      <div className="pages-all__grid">
        {dataAll.map((ele, ind) => {
          return (
            <ProductItem
              key={ind}
              name={ele.name}
              isSale={false}
              price={ele.price}
              priceSale={ele.priceSale}
              imageUrl={ele.image}
            />
          );
        })}
      </div>
      <div className="pages-all__grid-custom">
        {dataSale.map((ele, ind) => {
          return (
            <ProductItem
              key={ind}
              name={ele.name}
              isSale={true}
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
