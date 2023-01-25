import { configureStore } from "@reduxjs/toolkit";

import filter from './slices/filterSlice';
import search from './slices/searchSlice'
import pizza from './slices/pizzaSlice'
import cart from './slices/cartSlice'
import { useDispatch } from "react-redux";


export const store = configureStore({
    reducer: {
        filter,
        search,
        pizza,
        cart
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
