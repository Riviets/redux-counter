import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementBy: (state, action) => {
            state.value += action.payload
        },
        decrementBy: (state, action) => {
            state.value -= action.payload
        },
        clear: (state) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, incrementBy, decrementBy, clear} = counterSlice.actions

export default counterSlice.reducer