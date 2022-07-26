import { createSlice } from "@reduxjs/toolkit";
interface ArrayOfObjects {
    items: any
}
const initialState: ArrayOfObjects = {
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
            const item = state.items.find((item: { id: number | string }) => item.id === action.payload.id);
            const index = state.items.findIndex((item: { id: number | string }) => item.id === action.payload.id);
            item.quantity === 1 ? state.items.splice(index, 1) : item.quantity--;
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export const currentItem = (state: { cart: { items: [] } }) => state.cart.items
export default cartSlice.reducer