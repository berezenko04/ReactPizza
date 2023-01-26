import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { calcTotalPrice } from "../../utils/calcTotalPrice"
import getCartFromLS from "../../utils/getCartFromLS"
import { RootState } from "../store"

export type CartItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    type: string,
    count: number,
    size: number
}

interface CartSliceState {
    totalPrice: number,
    cartItems: CartItem[]
}

const { cartItems, totalPrice } = getCartFromLS();

const initialState: CartSliceState = {
    totalPrice,
    cartItems
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.cartItems.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1
                });
            }
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        removeItem(state, action: PayloadAction<string>) {
            state.cartItems = state.cartItems.filter((obj) => obj.id !== action.payload);
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        clearItems(state) {
            state.cartItems = [];
            state.totalPrice = 0;
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.cartItems.find((obj) => obj.id === action.payload);

            if (findItem && findItem.count > 0) {
                findItem.count--;
            }
        }
    }
})

export const cartSelector = (state: RootState) => state.cart;


export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;