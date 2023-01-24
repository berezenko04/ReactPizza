import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PizzaService from '../../API/PizzaService/PizzaService'

const initialState = {
    items: []
}

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const { categoryId, sortType, searchValue, currentPage } = params;
        const pizzas = await PizzaService.getPizza(categoryId, sortType, searchValue, currentPage); 
        return pizzas;
    }
)

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchPizza.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchPizza.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },
        [fetchPizza.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        }
    }
})

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;