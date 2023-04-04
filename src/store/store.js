import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/Search/searchSlice";
import cartReducer from "../features/Basket/basketSlice";
import sortReducer from "../features/Sort/sortSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    sort: sortReducer,
  },
});
