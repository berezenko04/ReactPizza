import axios from 'axios'

const DEFAULT__PATH__API = 'https://63b2bd1a5901da0ab36c3b06.mockapi.io/';

export default class PizzaService {

    static async getPizza() {
        const response = await axios.get(`${DEFAULT__PATH__API}/pizza`);
        return response;
    }
}
