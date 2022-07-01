import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/redux/cart-actions";

const ProductSelect = function (props) {
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const selectSizeHandler = (event) => {
    event.preventDefault();
    setIsClicked(true);
    setCart({ ...props.productData, size });
  };

  useEffect(() => {
    if (cart.length === 0) return;
    dispatch(addItem(cart));
  }, [cart]);

  const changeSizeHandler = (event) => {
    setSize(event.target.value);
    setIsClicked(false);
  };

  return (
    <form className="product-select">
      <select id="size" value={size} onChange={changeSizeHandler}>
        <option value="">--Size--</option>
        <option value="EU 39 | US 6 | UK 5">EU 39 | US 6 | UK 5</option>
        <option value="EU 40 | US 7 | UK 6">EU 40 | US 7 | UK 6</option>
        <option value="EU 41 | US 8 | UK 7">EU 41 | US 8 | UK 7</option>
        <option value="EU 42 | US 9 | UK 8">EU 42 | US 9 | UK 8</option>
        <option value="EU 43 | US 10 | UK 9">EU 43 | US 10 | UK 9</option>
        <option value="EU 44 | US 11| UK 10">EU 44 | US 11| UK 10</option>
        <option value="EU 45 | US 12| UK 11">EU 45 | US 12| UK 11</option>
        <option value="EU 46 | US 13| UK 12">EU 46 | US 13| UK 12</option>
      </select>
      {!isClicked && (
        <button
          className="btn btn-create btn-buy"
          disabled={!size}
          type="submit"
          onClick={selectSizeHandler}
        >
          Add to bag
        </button>
      )}
      {isClicked && (
        <button className="btn btn-create btn-buy__done" disabled={true}>
          Added to bag!
        </button>
      )}
    </form>
  );
};

export default ProductSelect;
