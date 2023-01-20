import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalPrice: 0,
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.cartItems.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
        },
        removeItem(state, action) {
            state.cartItems.filter((obj) => obj.id !== action.payload);
        },
        clearItems(state) {
            state.cartItems = [];
        },
    }
})

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;