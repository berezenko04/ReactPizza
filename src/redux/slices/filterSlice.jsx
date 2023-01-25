import { createSlice } from '@reduxjs/toolkit'


const initialState = {
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
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSortType(state, action) {
            state.sortType = action.payload;
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId);
            state.sortType = action.payload.sortType;
        }
    }
})

export const { setCategoryId, setSortType, setFilters } = filterSlice.actions;


export default filterSlice.reducer;
