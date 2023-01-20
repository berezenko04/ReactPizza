import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    categoryId: 0,
    sortType: {
        name: 'популярности ↓',
        sortProperty: 'rating',
        orderProperty: 'desc'
    },
    currentPage: 1
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
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId);
            state.sortType = action.payload.sortType;
            state.currentPage = Number(action.payload.currentPage);
        }
    }
})

export const { setCategoryId, setSortType, setCurrentPage, setFilters } = filterSlice.actions;


export default filterSlice.reducer;
