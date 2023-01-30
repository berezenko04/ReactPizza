import axios from 'axios'
import { PizzaItem } from '../../redux/pizza/types'

const DEFAULT__PATH__API = 'https://63b2bd1a5901da0ab36c3b06.mockapi.io';

type ISort = Record<string, string>

export const getPizza = async (id: number, sort: ISort, searchValue: string) => {
    const { data } = await axios.get(
        `${DEFAULT__PATH__API}/pizza${id === 0 ? '?' : `?category=${id}`}&sortBy=${sort.sortProperty}&order=${sort.orderProperty}&search=${searchValue}`
    );
    return data as PizzaItem[];
}

