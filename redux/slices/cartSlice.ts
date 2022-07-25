import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 1,
            name: "neklace set",
            desciption: "lorem mpiled client and server successfully in 474 ms (525 modules) wait  - compiling / login...event - compiled client and server successfully in 816 ms(531 modules) wait - compiling...wait - compiling...",
            price: 10,
            quantity: 1
        },
        {
            id: 2,
            name: "neklace set",
            desciption: "lorem mpiled client and server successfully in 474 ms (525 modules) wait  - compiling / login...event - compiled client and server successfully in 816 ms(531 modules) wait - compiling...wait - compiling...",
            price: 10,
            quantity: 1
        }
    ]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: ({ items }, { payload, type }) => {
            const exists = items.find(i => i.id === payload.id)
            exists ? exists.quantity++ : items = [...items, { ...payload, quantity: 1 }]
        },
        removeFromCart: p => { },
        addQuantity: q => { },
        removeQuanity: q => { },
    }
})

export const { addQuantity, addToCart, removeFromCart, removeQuanity } = cartSlice.actions
export default cartSlice.reducer