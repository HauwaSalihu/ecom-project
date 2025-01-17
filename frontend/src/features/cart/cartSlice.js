import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    CartSummary: {
      totalItems:
        JSON.parse(localStorage.getItem("cartSummary")) === null
          ? 0
          : JSON.parse(localStorage.getItem("cartSummary")).totalItems,
      totalPrice:
        JSON.parse(localStorage.getItem("cartSummary")) === null
          ? 0
          : JSON.parse(localStorage.getItem("cartSummary")).totalPrice,
    },
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [action.payload, ...state.cartItems];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      const { totalItems, totalPrice } = calculateCartSummary(state.cartItems);
      state.CartSummary = {
        totalItems,
        totalPrice,
      };
      localStorage.setItem("cartSummary", JSON.stringify(state.CartSummary));
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      const { totalQuantity, totalPrice } = calculateCartSummary(
        state.cartItems
      );
      state.CartSummary = {
        totalItems: totalQuantity,
        totalPrice: totalPrice,
      };
    },

    increaseCartItem: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.product_id === action.payload
          ? { ...item, product_quantity: item.product_quantity + 1 }
          : item
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      const { totalQuantity, totalPrice } = calculateCartSummary(
        state.cartItems
      );
      state.CartSummary = {
        totalItems: totalQuantity,
        totalPrice: totalPrice,
      };
    },

    decreaseCartItem: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.product_id === action.payload && item.product_quantity > 1
          ? { ...item, product_quantity: item.product_quantity - 1 }
          : item
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      const { totalQuantity, totalPrice } = calculateCartSummary(
        state.cartItems
      );
      state.CartSummary = {
        totalItems: totalQuantity,
        totalPrice: totalPrice,
      };
    },

    clearUserCartItems: (state, action) => {
      state.cartItems = [];
      state.CartSummary = {
        totalItems: 0,
        totalPrice: 0,
      };
    },
  },
});

export const {
  addToCart,
  removeItem,
  increaseCartItem,
  decreaseCartItem,
  clearUserCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;

//a helper function to calculate cart summary

function calculateCartSummary(cart) {
  let totalPrice = 0;
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalQuantity += item.product_quantity;
    totalPrice += item.product_price * item.product_quantity;
  });

  localStorage.setItem(
    "cartSummary",
    JSON.stringify({ totalQuantity, totalPrice })
  );

  return {
    totalQuantity,
    totalPrice,
  };
}
