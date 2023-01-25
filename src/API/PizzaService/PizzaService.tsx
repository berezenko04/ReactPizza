import axios from 'axios'

const DEFAULT__PATH__API = 'https://63b2bd1a5901da0ab36c3b06.mockapi.io';


export default class PizzaService {

    static async getPizza(id: number, type: { sortProperty: string, orderProperty: string }, searchValue: string) {
        const { data } = await axios.get(
            `${DEFAULT__PATH__API}/pizza${id === 0 ? '?' : `?category=${id}`}&sortBy=${type.sortProperty}&order=${type.orderProperty}&search=${searchValue}`
        );
        return data;
    }
}
