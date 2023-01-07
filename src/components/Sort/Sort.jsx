import { useState } from 'react'
import PropTypes from 'prop-types'


import styles from './Sort.module.scss'


import { ReactComponent as SortIcon } from '../../assets/icons/arrow-top.svg'


const Sort = ({ value, onClickSort }) => {

    const [isOpened, setIsOpened] = useState(false);


    const categories = [
        { name: 'популярности ↑', sortProperty: 'rating', orderProperty: 'desc' },
        { name: 'популярности ↓', sortProperty: 'rating', orderProperty: 'asc' },
        { name: 'цене ↑', sortProperty: 'price', orderProperty: 'desc' },
        { name: 'цене ↓', sortProperty: 'price', orderProperty: 'asc' },
        { name: 'алфавиту ↑', sortProperty: 'title', orderProperty: 'desc' },
        { name: 'алфавиту ↓', sortProperty: 'title', orderProperty: 'asc' }
    ];

    const handleCategoryClick = (i) => {
        onClickSort(i);
        setIsOpened(false);
    }

    return (
        <div className={styles.sort}>
            <div className={styles.sort__label}>
                <SortIcon className={`${styles.sortIcon} ${isOpened && styles.sortIcon__active}`} />
                <b>Сортировка по:</b>
                <span onClick={() => setIsOpened(!isOpened)}>{value.name}</span>
            </div >
            {
                isOpened &&
                <div className={styles.sort__popup}>
                    <ul>
                        {categories.map((obj, index) => (
                            <li
                                key={index}
                                className={value.name === categories[index].name ? styles.active : null}
                                onClick={() => handleCategoryClick(obj)}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul >
                </div >
            }
        </div >
    )
}

Sort.propTypes = {
    value: PropTypes.object,
    onClickSort: PropTypes.func
}

export default Sort
