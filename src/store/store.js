import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import searchReducer from "../features/Search/searchSlice";
import cartReducer from "../features/Basket/basketSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});
