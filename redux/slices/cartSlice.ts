import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exists = state.items.find((item: { id: number | string }) => item.id === action.payload.id);
            !exists ? state.items = [...state.items, { ...action.payload, quantity: 1 }] : exists.quantity++;
        },

        removeFromCart: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            console.log(index)
            item.quantity === 1 ? state.items.splice(index, 1) : item.quantity--;
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export const currentItem = (state: { cart: { items: [] } }) => state.cart.items
export default cartSlice.reducer