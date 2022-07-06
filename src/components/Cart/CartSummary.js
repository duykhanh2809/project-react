import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/redux/cart-slice";
import CheckContext from "../../store/ContextAPI/check-context";
import CartItem from "./CartItem";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartSummary = function () {
  const { cancelCheck } = useContext(CheckContext);
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.cart.item);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const confirmHandler = () => {
    setIsConfirm(true);
  };

  const cancelOrderHandler = () => {
    cancelCheck();
  };

  const orderHandler = (event) => {
    event.preventDefault();
    setOrderSuccess(true);
    toast.success("Order successful, thank you!!!", {
      position: toast.POSITION.TOP_CENTER,
      className: "info-bar",
      autoClose: 2000,
    });
  };

  useEffect(() => {
    if (!orderSuccess) return;
    const time = setTimeout(() => {
      localStorage.removeItem("cart");
      localStorage.removeItem("totalQuantity");
      localStorage.removeItem("totalPrice");
      dispatch(
        cartSliceActions.updateCart({
          item: [],
          counter: 0,
          sum: 0,
        })
      );
      cancelCheck();
    }, 2500);
    return () => clearTimeout(time);
  }, [orderSuccess]);

  const cartClasses = isConfirm ? "cart__show cart__show-modify" : "cart__show";

  return (
    <div className="cart__summary">
      <h3 className="heading-tertiary mg-bt-medium">
        Please check again the information of order
      </h3>
      <div className={cartClasses}>
        {allItems.map((item, ind) => {
          return <CartItem productSelected={item} key={ind} />;
        })}
      </div>
      <div className="cart__total mg-bt-medium">
        <p className="cart__total-heading">Subtotal:</p>
        <p className="cart__total-price">€{totalPrice}</p>
      </div>
      {isConfirm && (
        <form className="cart__orders" onSubmit={orderHandler}>
          <h3 className="heading-tertiary mg-bt-medium">
            Please fill in the order recipient information
          </h3>
          <label htmlFor="fullname">Fullname</label>
          <input type="text" id="fullname" required />
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" required />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
          <div className="cart__btn-group mg-top-medium">
            <button className="btn btn-remove" onClick={cancelOrderHandler}>
              Cancel
            </button>
            <button className="btn btn-create" type="submit">
              Order
            </button>
          </div>
        </form>
      )}
      {!isConfirm && (
        <div className="cart__btn-group">
          <button className="btn btn-remove" onClick={cancelOrderHandler}>
            Cancel
          </button>
          <button className="btn btn-create" onClick={confirmHandler}>
            Confirm
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default CartSummary;
