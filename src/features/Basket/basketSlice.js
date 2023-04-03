import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, name, price, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, name, price, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
    loadCartFromLocalStorage: (state) => {
      const cartItems = localStorage.getItem("cart");
      if (cartItems) {
        state.items = JSON.parse(cartItems);
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  loadCartFromLocalStorage,
} = cartSlice.actions;

export const selectBasketTotalPrice = (state) =>
  state.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
export default cartSlice.reducer;
