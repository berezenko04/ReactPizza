import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import filter from './filter/slice';
import search from './search/slice'
import pizza from './pizza/slice'
import cart from './cart/slice'



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
