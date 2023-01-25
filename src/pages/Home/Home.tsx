import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import styles from './Home.module.scss'

import Categories from '../../components/Categories/Categories'
import Sort from '../../components/Sort/Sort'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard'
import Search from '../../components/Search/Search'
import { fetchPizza } from '../../redux/slices/pizzaSlice'
import { RootState, useAppDispatch } from '../../redux/store'


const Home: React.FC = () => {

    const { categoryId, sortType } = useSelector((state: RootState) => state.filter);
    const searchValue = useSelector((state: RootState) => state.search.searchValue);
    const { items, status } = useSelector((state: RootState) => state.pizza);
    const dispatch = useAppDispatch();
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
        dispatch(fetchPizza({
            categoryId,
            sortType,
            searchValue,
        }))

        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue])

    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sortType.sortProperty,
            sortOrder: sortType.orderProperty,
            categoryId
        })
        navigate(`?${queryString}`);
    }, [categoryId, sortType])

    return (
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

                {status === 'error' ? (
                    <h2>Произошла ошибка при загрузке товаров, попробуйте позже 😥</h2>
                ) : (
                    <div className={styles.content__items}>
                        {status === 'loading' ? [...new Array(4)].map((_, index) => (
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
                )
                }
            </div>
        </div>
    )
}

export default Home
