import { RootState } from "../store"

export const categoryIdSelector = (state: RootState) => state.filter.categoryId;
export const sortTypeSelector = (state: RootState) => state.filter.sortType;
export const filterSelector = (state: RootState) => state.filter;