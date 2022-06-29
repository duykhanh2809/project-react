import ProductItem from "../Product/ProductItem";
import { CaretRight, CaretLeft } from "phosphor-react";
import useFetch from "../../hooks/use-fetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FavoriteProduct = (props) => {
  const [dataForRender, setDataForRender] = useState([]);

  const prevItemHandler = () => {
    const itemChange = [dataForRender.at(-1)];
    const dataNew = dataForRender.slice(0, -1);
    setDataForRender(itemChange.concat(dataNew));
  };
  const nextItemHandler = () => {
    const itemChange = [dataForRender.at(0)];
    const dataNew = dataForRender.slice(1);
    setDataForRender(dataNew.concat(itemChange));
  };

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
      setDataForRender(dataValue.slice(2));
      return data;
    };

    fetchShoesSale().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <section className="favorite-section">
      <div className="favorite__heading">
        {!props.anotherSite && (
          <h2 className="heading-secondary">Our favorite models on sale</h2>
        )}
        {props.anotherSite && (
          <h2 className="heading-secondary">You might also like</h2>
        )}
        <div>
          <button className="favorite__btn" onClick={prevItemHandler}>
            <CaretLeft size={16} color="black" weight="bold" />
          </button>
          <button className="favorite__btn" onClick={nextItemHandler}>
            <CaretRight size={16} color="black" weight="bold" />
          </button>
        </div>
      </div>
      <div className="favorite__content">
        {dataForRender.map((ele, ind) => {
          if (ind < 3)
            return (
              <ProductItem
                key={ind}
                hidden={false}
                isSale={true}
                name={ele.name}
                price={ele.price}
                priceSale={ele.priceSale}
                imageUrl={ele.image}
              />
            );
          return;
        })}
      </div>
    </section>
  );
};

export default FavoriteProduct;
