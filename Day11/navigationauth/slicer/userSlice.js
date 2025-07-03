import AsyncStorage from "@react-native-async-storage/async-storage";
import  { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserLoggedIn: false,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setIsUserLoggedIn: (state, action) => {
            state.isUserLoggedIn = ActionSheetIOS.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        getUser: async (state, action) => {
            try {
                state.loading = true;
                console.log("Get User Is Called");
                const token = await AsyncStorage.getItem("token");
                if(token) {
                    console.log("Token found");
                    state.isUserLoggedIn = true;
                }
            } catch (error) {
                
            }
        }
    }
});