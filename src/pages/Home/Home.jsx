import { useEffect, useState } from 'react'

import styles from './Home.module.scss'

import Categories from '../../components/Categories/Categories'
import Header from '../../components/Header/Header'
import Sort from '../../components/Sort/Sort'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import PizzaService from '../../API/PizzaService/PizzaService'
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard'

const Home = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortType, setSortType] = useState({
        name: 'популярности ↑', sortProperty: 'rating', orderProperty: 'desc'
    });
    const [categoryId, setCategoryId] = useState(0);


    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                PizzaService.getPizza(categoryId, sortType)
                    .then(response => {
                        setItems(response.data);
                        setIsLoading(false);
                    })
            } catch (error) {
                alert('Ошибка при запросе данных :(');
                console.error(error);
            }
        }
        window.scrollTo(0, 0);
        fetchData();
    }, [categoryId, sortType])

    return (
        <>
            <Header isCart />
            <div className={styles.content}>
                <div className="container">
                    <div className={styles.content__top}>
                        <Categories
                            value={categoryId}
                            onClickCategory={(id) => setCategoryId(id)}
                        />
                        <Sort
                            value={sortType}
                            onClickSort={(type) => setSortType(type)}
                        />
                    </div>
                    <h2 className={styles.content__title}>Все пиццы</h2>
                    <div className={styles.content__items}>
                        {isLoading ? [...new Array(8)].map((_, index) => (
                            <SkeletonCard key={index} />
                        )) :
                            items.map((pizza) => (
                                < PizzaCard
                                    key={pizza.id}
                                    {...pizza}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
