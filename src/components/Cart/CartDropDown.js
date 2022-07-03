import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartDropDown = function () {
  const [isEmpty, setIsEmpty] = useState(true);
  const allItems = useSelector((state) => state.cart.item);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const quantity = Number(useSelector((state) => state.cart.totalQuantity));

  // toi uu useEffect bang hook nao ta?

  useEffect(() => {
    quantity ? setIsEmpty(false) : setIsEmpty(true);
  }, [quantity]);

  return (
    <div className="cart__drop">
      <div className="cart__show">
        {allItems.map((item, ind) => {
          return <CartItem productSelected={item} key={ind} />;
        })}
      </div>
      <div className="cart__total">
        {isEmpty && (
          <p className="cart__total-modify">Your bag is currently empty</p>
        )}
        {!isEmpty && (
          <Fragment>
            <p className="cart__total-heading">Subtotal:</p>
            <p className="cart__total-price">€{totalPrice}</p>
          </Fragment>
        )}
      </div>
      <button className="btn btn-create">Check out</button>
    </div>
  );
};

export default CartDropDown;
