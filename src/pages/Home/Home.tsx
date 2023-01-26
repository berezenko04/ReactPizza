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

import { fetchPizza } from '../../redux/pizza/slice'
import { useAppDispatch } from '../../redux/store'
import { filterSelector } from '../../redux/filter/selectors'
import { pizzaSelector } from '../../redux/pizza/selectors'
import { searchValueSelector } from '../../redux/search/selectors'


const Home: React.FC = () => {

    const { categoryId, sortType } = useSelector(filterSelector);
    const searchValue = useSelector(searchValueSelector);
    const { items, status } = useSelector(pizzaSelector);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
