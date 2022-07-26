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
            !exists ? state.items = [...state.items, { ...action.payload, quantity: 1 }] : exists.quantity++
        },

        removeFromCart: (state, action) => {
            let newCart = [...state.items]
            const index = state.items.findIndex((item: { id: number | string }) => item.id === action.payload.id);
            index >= 0 ? newCart.splice(index, 1) : toast(`can't remove product (id: ${action.payload.id}) as is not in the cart`)
            state.items = newCart;
        },
        addQuantity: q => { },
        removeQuanity: q => { },
    }
})

export const { addQuantity, addToCart, removeFromCart, removeQuanity } = cartSlice.actions;
export const currentItem = (state: { cart: { items: {} } }) => state.cart.items
export default cartSlice.reducer