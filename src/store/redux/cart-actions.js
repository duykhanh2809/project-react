import { cartSliceActions } from "./cart-slice";

const updateLocalStorage = (cart, quantity, price) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalQuantity", quantity);
  localStorage.setItem("totalPrice", price);
};

export const addItem = (product) => {
  return async (dispatch) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const counter = localStorage.getItem("totalQuantity") || 0;

    let priceSum = localStorage.getItem("totalPrice") || 0;

    const isExist = cart.find(
      (ele) => ele.name === product.name && ele.size === product.size
    );

    // Check duplicates
    if (!isExist) {
      const itemToAdd = {
        ...product,
        quantity: 1,
      };
      // Add to cart
      cart.push(itemToAdd);
    } else {
      const indexExist = cart.indexOf(isExist);

      const itemToAdd = {
        ...product,
        quantity: isExist.quantity + 1,
      };

      // Add to cart
      cart.splice(indexExist, 1, itemToAdd);
    }

    if (priceSum) {
      product.priceSale
        ? (priceSum = Number(priceSum) + product.priceSale)
        : (priceSum = Number(priceSum) + product.price);
    } else {
      product.priceSale
        ? (priceSum = product.priceSale)
        : (priceSum = product.price);
    }

    // Local storage updated

    updateLocalStorage(cart, Number(counter) + 1, priceSum.toFixed(2));

    // Add to redux
    dispatch(
      cartSliceActions.updateCart({
        item: cart,
        counter: Number(counter) + 1,
        sum: priceSum.toFixed(2),
      })
    );
  };
};

export const removeItem = (product) => {
  return async (dispatch) => {
    // Get information
    const cart = JSON.parse(localStorage.getItem("cart"));
    let priceSum = Number(localStorage.getItem("totalPrice"));
    let quantitySum = Number(localStorage.getItem("totalQuantity"));

    // using findIndex (instead of indexOf)
    const indexDeleted = cart.findIndex(
      (ele) => ele.name === product.name && ele.size === product.size
    );
    const counterDeleted = product.quantity;
    const priceDeleted = product.priceSale ? product.priceSale : product.price;

    // Update value
    quantitySum = quantitySum - counterDeleted;
    priceSum = priceSum - counterDeleted * priceDeleted;
    cart.splice(indexDeleted, 1);

    // Update local storage
    updateLocalStorage(cart, quantitySum, priceSum.toFixed(2));

    // Update redux
    dispatch(
      cartSliceActions.updateCart({
        item: cart,
        counter: quantitySum,
        sum: priceSum.toFixed(2),
      })
    );
  };
};
