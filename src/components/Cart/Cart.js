import { useSelector } from "react-redux";
import { useContext } from "react";
import CheckContext from "../../store/ContextAPI/check-context";

const Cart = () => {
  const accountCtx = useContext(CheckContext);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const showCartHandler = () => {
    accountCtx.cancelCheck();
    accountCtx.setCartChecking();
  };
  return (
    <button className="header__cart" onClick={showCartHandler}>
      <span>{quantity}</span>
    </button>
  );
};

export default Cart;
