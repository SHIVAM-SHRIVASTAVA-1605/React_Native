import { configureStore } from "@reduxjs/toolkit";
import CounterSliceReducer from "../slices/counterSlices";

export const store = configureStore( {
    reducer: {
        counter: CounterSliceReducer,
    }
})