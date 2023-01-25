import { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

import styles from './PizzaItem.module.scss'

const PizzaItem: React.FC = () => {

    const { id } = useParams();
    const [pizza, setPizza] = useState<{
        imageUrl: string,
        title: string,
        price: number
    }>();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(`https://63b2bd1a5901da0ab36c3b06.mockapi.io/pizza/${id}`);
                setPizza(data);
            } catch (error) {
                alert('Произошла ошибка при загрузке пиццы, попробуйте позже.');
                console.error(error);
                navigate('/ReactPizza/');
            }
        }
        fetchPizza();
    })

    if (!pizza) {
        return <h2>Загрузка...</h2>
    }


    return (
        <div className='container'>
            <img src={`/${pizza.imageUrl}`} alt="pizza" />
            <h2>{pizza.title}</h2>
            <p>{pizza.price}</p>
        </div>
    )
}

export default PizzaItem
