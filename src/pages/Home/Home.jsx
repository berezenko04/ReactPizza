import { useContext } from 'react'

import styles from './Home.module.scss'

import Categories from '../../components/Categories/Categories'
import Layout from '../../components/Layout/Layout'
import Sort from '../../components/Sort/Sort'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard'
import Search from '../../components/Search/Search'
import Pagination from '../../components/Pagination/Pagination'
import AppContext from '../../Context'

const Home = () => {

    const { searchValue, items, isLoading } = useContext(AppContext);

    return (
        <Layout isCart>
            <>
                <div className={styles.content}>
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
                        <div className={styles.pagination}>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}

export default Home
