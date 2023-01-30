import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getPizza } from '../../API/PizzaService/PizzaService'
import { PizzaSliceState, Status, FetchPizzaProps, PizzaItem } from "./types"

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING
}

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params: FetchPizzaProps) => {
        const { categoryId, sortType, searchValue } = params;
        const pizzas = await getPizza(categoryId, sortType, searchValue);
        return pizzas;
    }
)

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<PizzaItem[]>) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizza.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        })

        builder.addCase(fetchPizza.fulfilled, (state, action: PayloadAction<PizzaItem[]>) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })

        builder.addCase(fetchPizza.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
})

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;