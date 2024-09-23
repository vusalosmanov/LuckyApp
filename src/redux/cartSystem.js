import { createSlice } from "@reduxjs/toolkit";

const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const removeFromWishlist = (productId) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: productId,
  };
};

const initialState = {
  cart: [],
  quantity: 0,
  wishlist: [],
  comparison: [],
};

const cartSystem = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.cart.push(tempvar);
      }
    },
    DecreaseCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0 && state.cart[find].quantity > 1) {
        state.cart[find].quantity -= 1;
      }
    },
    RemoveFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cart.splice(index, 1);
      }
    },
    AddToWishlist: (state, action) => {
      const find = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find === -1) {
        state.wishlist.push(action.payload);
      }
    },
    RemoveFromWishlist: (state, action) => {
      const index = state.wishlist.findIndex(
        (item) => item.id === action.payload
      );
      if (index >= 0) {
        state.wishlist.splice(index, 1);
      }
    },
    AddtoComparison: (state, action) => {
      const find = state.comparison.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.comparison[find].quantity += 1;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.comparison.push(newItem);
      }
    },
  },
});

export const {
  AddCart,
  DecreaseCart,
  RemoveFromCart,
  AddToWishlist,
  RemoveFromWishlist,
  AddtoComparison,
} = cartSystem.actions;

export default cartSystem.reducer;
