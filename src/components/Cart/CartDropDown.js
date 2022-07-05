import { Fragment, useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import CheckContext from "../../store/ContextAPI/check-context";

const CartDropDown = function () {
  const [isEmpty, setIsEmpty] = useState(true);
  const { isOrdering, setIsOrder } = useContext(CheckContext);
  const allItems = useSelector((state) => state.cart.item);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const quantity = Number(useSelector((state) => state.cart.totalQuantity));

  const checkoutHandler = () => {
    setIsOrder();
  };

  useEffect(() => {
    quantity ? setIsEmpty(false) : setIsEmpty(true);
  }, [quantity]);

  return (
    <Fragment>
      {!isOrdering && (
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
          <button
            disabled={isEmpty}
            className="btn btn-create"
            onClick={checkoutHandler}
          >
            Check out
          </button>
        </div>
      )}
      {isOrdering && <CartSummary />}
    </Fragment>
  );
};

export default CartDropDown;
