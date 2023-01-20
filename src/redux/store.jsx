import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filterSlice";
import search from './slices/searchSlice'
import pizza from './slices/pizzaSlice'
import cart from './slices/cartSlice'


export const store = configureStore({
    reducer: {
        filter,
        search,
        pizza,
        cart
    },
})
