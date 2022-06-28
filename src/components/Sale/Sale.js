import ProductItem from "../Product/ProductItem";
import { useState, useEffect } from "react";

const Sale = function () {
  const [dataRender, setDataRender] = useState([]);

  // Data render
  useEffect(() => {
    const fetchShoesSale = async function () {
      const response = await fetch(
        "https://project-react-cf626-default-rtdb.firebaseio.com/sales.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const dataValue = Object.values(data);
      setDataRender(dataValue);
      return data;
    };

    fetchShoesSale().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <div className="pages-sale">
      <p className="sub-heading mg-bt-medium ">We're live.</p>
      <h2 className="heading-secondary mg-bt-huge">S/S 22 Sale. 30% Off.</h2>
      <div className="pages-sale__grid">
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
  );
};

export default Sale;
