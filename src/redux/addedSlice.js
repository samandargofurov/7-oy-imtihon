import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savedProducts: [],
}

const addedSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        saveProduct: (state, action) => {
            let copied = JSON.parse(JSON.stringify(state.value))
            console.log(copied);
        }
    }
})

export const { saveProduct } = addedSlice.actions

export default addedSlice.reducer