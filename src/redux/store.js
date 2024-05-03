import { configureStore } from "@reduxjs/toolkit";
import addedSlice from "./addedSlice";
import counterSlice from "./counterSlice";

export const store = configureStore({
    reducer: {
        products: addedSlice,
        counter: counterSlice,
    },
})