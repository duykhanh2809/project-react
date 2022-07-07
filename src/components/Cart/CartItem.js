import { useEffect, useState } from "react";
import { removeItem } from "../../store/redux/cart-actions";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const [itemDeleted, setItemDeleted] = useState(null);
  const dispatch = useDispatch();

  const removeItemHandler = (event) => {
    event.preventDefault();
    setItemDeleted(props.productSelected);
  };

  useEffect(() => {
    if (!itemDeleted) return;
    dispatch(removeItem(itemDeleted));
  }, [itemDeleted, dispatch]);

  return (
    <div className="cart__item">
      <img
        src={props.productSelected.imageCart}
        alt="product show preview"
        className="cart__item-img"
      />
      <div className="cart__item-info">
        <p className="cart__item-general">
          {props.productSelected.quantity}x {props.productSelected.name}
        </p>
        <p>{props.productSelected.size}</p>
      </div>
      <div className="cart__item-price">
        <div>
          {props.productSelected.priceSale && (
            <del>
              €{props.productSelected.price * props.productSelected.quantity}
            </del>
          )}
          {props.productSelected.priceSale && (
            <p>
              €
              {props.productSelected.priceSale * props.productSelected.quantity}
            </p>
          )}
          {!props.productSelected.priceSale && (
            <p>
              €{props.productSelected.price * props.productSelected.quantity}
            </p>
          )}
        </div>
        <button className="btn btn-remove" onClick={removeItemHandler}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
