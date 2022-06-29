import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductFetch = () => {
  const [dataItem, setDataItem] = useState();
  const { productId } = useParams();

  useEffect(() => {
    const fetchShoesSale = async function () {
      const response = await fetch(
        "https://project-react-cf626-default-rtdb.firebaseio.com/all.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const dataValue = Object.values(data);

      const items = dataValue.filter((ele) => {
        const id = ele.name.toLowerCase().replaceAll(" ", "-");
        return id === productId;
      });

      setDataItem(...items);
      return data;
    };

    fetchShoesSale().catch((error) => {
      console.log(error.message);
    });
  }, [productId]);

  return (
    <section className="product-details">
      {!dataItem && <p>Loading</p>}
      {dataItem && <ProductDetails productData={dataItem} />}
    </section>
  );
};

export default ProductFetch;
