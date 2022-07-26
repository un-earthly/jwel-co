import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exists = state.items.find((item) => item.id === action.payload.id);
            !exists ? state.items = [...state.items, { ...action.payload, quantity: 1 }] : exists.quantity++
        },

        removeFromCart: p => { },
        addQuantity: q => { },
        removeQuanity: q => { },
    }
})

export const { addQuantity, addToCart, removeFromCart, removeQuanity } = cartSlice.actions;
export const currentItem = state => state.cart.items
export default cartSlice.reducer