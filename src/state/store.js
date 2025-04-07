import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: countReducer
    }
})