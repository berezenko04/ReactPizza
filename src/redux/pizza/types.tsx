import { SortItem } from "../../components/Sort/Sort"

export type PizzaItem = {
    id: string,
    title: string,
    price: number,
    sizes: number[],
    types: number[],
    imageUrl: string
}

export interface PizzaSliceState {
    items: PizzaItem[],
    status: Status
}

export type FetchPizzaProps = {
    categoryId: number,
    sortType: SortItem,
    searchValue: string
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}