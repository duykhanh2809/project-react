import { cartSliceActions } from "./cart-slice";

export const addItem = (product) => {
  return async (dispatch) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    const isExist = cart.find(
      (ele) => ele.name === product.name && ele.size === product.size
    );
    // const isExist = cart.filter(
    //   (ele) => ele.name === product.name && ele.size === product.size
    // );
    console.log(isExist);
    // Check duplicates
    // if (isExist.length === 0) {
    if (!isExist) {
      const itemToAdd = {
        ...product,
        quantity: 1,
      };
      // Add to cart
      cart.push(itemToAdd);
      // Add to local storage
      localStorage.setItem("cart", JSON.stringify(cart));
      // Add to redux
      dispatch(cartSliceActions.updateCart(cart));
    } else {
      const indexExist = cart.indexOf(isExist);
      console.log(indexExist);
      const itemToAdd = {
        ...product,
        quantity: isExist.quantity + 1,
      };
      console.log(itemToAdd);
      console.log(cart);
      // Add to cart
      // cart.push(itemToAdd);
      cart.splice(indexExist, 1, itemToAdd);
      console.log(cart);
      // Add to local storage
      localStorage.setItem("cart", JSON.stringify(cart));
      // Add to redux
      dispatch(cartSliceActions.updateCart(cart));
    }
  };
};
