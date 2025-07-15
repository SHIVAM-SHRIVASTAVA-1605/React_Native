import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const item = action.payload;
      if (!state.items.find(i => i.id === item.id)) {
        state.items.push(item);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
