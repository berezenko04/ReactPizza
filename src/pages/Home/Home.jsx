import { useEffect, useState } from 'react'

import styles from './Home.module.scss'

import Categories from '../../components/Categories/Categories'
import Header from '../../components/Header/Header'
import Sort from '../../components/Sort/Sort'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import PizzaService from '../../API/PizzaService/PizzaService'

const Home = () => {

    useEffect(() => {
        async function fetchData() {
            try {
                PizzaService.getPizza()
                    .then(response => {
                        setItems(response.data);
                    })
            } catch (error) {
                alert('Ошибка при запросе данных :(');
                console.error(error);
            }
        }
        fetchData();
    }, [])

    const [items, setItems] = useState([]);

    return (
        <>
            <Header isCart />
            <div className={styles.content}>
                <div className="container">
                    <div className={styles.content__top}>
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className={styles.content__title}>Все пиццы</h2>
                    <div className={styles.content__items}>
                        {items.map((pizza) => (
                            <PizzaCard
                                key={pizza.id}
                                {...pizza}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
