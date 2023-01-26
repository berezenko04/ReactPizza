import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortItem } from '../../components/Sort/Sort';
import { FilterSliceState } from '../filter/types';

const initialState: FilterSliceState = {
    categoryId: 0,
    sortType: {
        name: 'популярности ↓',
        sortProperty: 'rating',
        orderProperty: 'desc'
    },
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSortType(state, action: PayloadAction<SortItem>) {
            state.sortType = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.categoryId = Number(action.payload.categoryId);
            state.sortType = action.payload.sortType;
        }
    }
})

export const { setCategoryId, setSortType, setFilters } = filterSlice.actions;


export default filterSlice.reducer;
