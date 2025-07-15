import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slices/userSlice";
import cartReducer from "../slices/cartSlice";
import favoritesReducer from "../slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
