import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setIsUSerLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    logout: (state) => {
      state.isUserLoggedIn = false;
      AsyncStorage.removeItem("token");
    },
  },
});

export const { setIsUSerLoggedIn, setLoading, logout } = userSlice.actions;

export default userSlice.reducer;
