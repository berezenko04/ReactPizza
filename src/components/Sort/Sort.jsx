import { useContext, useState } from 'react'

import styles from './Sort.module.scss'

import { ReactComponent as SortIcon } from '../../assets/icons/arrow-top.svg'
import AppContext from '../../Context'


const Sort = () => {

    const [isOpened, setIsOpened] = useState(false);

    const { sortType, setSortType } = useContext(AppContext);


    const categories = [
        { name: 'популярности ↓', sortProperty: 'rating', orderProperty: 'desc' },
        { name: 'популярности ↑', sortProperty: 'rating', orderProperty: 'asc' },
        { name: 'цене ↓', sortProperty: 'price', orderProperty: 'desc' },
        { name: 'цене ↑', sortProperty: 'price', orderProperty: 'asc' },
        { name: 'алфавиту ↓', sortProperty: 'title', orderProperty: 'desc' },
        { name: 'алфавиту ↑', sortProperty: 'title', orderProperty: 'asc' }
    ];

    const handleCategoryClick = (i) => {
        setSortType(i);
        setIsOpened(false);
    }

    return (
        <div className={styles.sort}>
            <div className={styles.sort__label}>
                <SortIcon className={`${styles.sortIcon} ${isOpened && styles.sortIcon__active}`} />
                <b>Сортировка по:</b>
                <span onClick={() => setIsOpened(!isOpened)}>{sortType.name}</span>
            </div >

            <div className={`${styles.sort__popup} ${isOpened && styles.sort__popup__active}`}>
                <ul>
                    {categories.map((obj, index) => (
                        <li
                            key={index}
                            className={sortType.name === categories[index].name ? styles.active : null}
                            onClick={() => handleCategoryClick(obj)}
                        >
                            {obj.name}
                        </li>
                    ))}
                </ul >
            </div >
        </div >
    )
}


export default Sort
