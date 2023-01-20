import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import styles from './Home.module.scss'

import Categories from '../../components/Categories/Categories'
import Layout from '../../components/Layout/Layout'
import Sort from '../../components/Sort/Sort'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard'
import Search from '../../components/Search/Search'
import Pagination from '../../components/Pagination/Pagination'
import PizzaService from '../../API/PizzaService/PizzaService'

import { setItems } from '../../redux/slices/pizzaSlice'


const Home = () => {

    const { categoryId, sortType, currentPage } = useSelector((state) => state.filter);
    const searchValue = useSelector((state) => state.search.searchValue);
    const items = useSelector((state) => state.pizza.items);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();


    // useEffect(() => {
    //     if (window.location.search) {
    //         const params = qs.parse(window.location.search.substring(1));
    //         const sort = sortList.find(obj => obj.sortProperty === params.sortProperty);
    //         dispatch(
    //             setFilters({
    //                 ...params,
    //                 sort
    //             })
    //         )
    //     }
    // }, [])

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const pizzas = await PizzaService.getPizza(categoryId, sortType, searchValue, currentPage);
                dispatch(setItems(pizzas));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе данных :(');
                console.error(error);
            }
        })();

        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage])

    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sortType.sortProperty,
            sortOrder: sortType.orderProperty,
            categoryId,
            currentPage,
        })
        navigate(`?${queryString}`);
    }, [categoryId, sortType, currentPage])

    return (
        <Layout isCart>
            <div className={`${styles.content} ${items.length === 0 ? styles.contentFullHeight : 0}`}>
                <div className="container">
                    <div className={styles.content__top}>
                        <Categories />
                        <Sort />
                    </div>
                    <div className={styles.content__title}>
                        <h2>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все пиццы'}</h2>
                        <Search />
                    </div>
                    <div className={styles.content__items}>
                        {isLoading ? [...new Array(4)].map((_, index) => (
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
                    {searchValue !== '' || (items.length < 4 && currentPage != 3) ? '' : <Pagination />}
                </div>
            </div>
        </Layout>
    )
}

export default Home
