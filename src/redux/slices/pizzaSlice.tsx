import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import PizzaService from '../../API/PizzaService/PizzaService'
import { SortItem } from "../../components/Sort/Sort"

export type PizzaItem = {
    id: string,
    title: string,
    price: number,
    sizes: number[],
    types: number[],
    imageUrl: string
}

interface PizzaSliceState {
    items: PizzaItem[],
    status: Status
}

type FetchPizzaProps = {
    categoryId: number,
    sortType: SortItem,
    searchValue: string
}

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING
}

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params: FetchPizzaProps) => {
        const { categoryId, sortType, searchValue } = params;
        const pizzas = await PizzaService.getPizza(categoryId, sortType, searchValue);
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