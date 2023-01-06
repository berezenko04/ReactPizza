import styles from './Sort.module.scss'
import { useState } from 'react'

import { ReactComponent as SortIcon } from '../../assets/icons/arrow-top.svg'


const Sort = () => {

    const [isOpened, setIsOpened] = useState(false);
    const [isCategoryActive, setIsCategoryActive] = useState(0);

    const categories = [
        'популярности',
        'цене',
        'алфавиту'
    ];

    const handleSortClick = () => {
        setIsOpened(!isOpened);
    }

    const handleCategoryClick = (i) => {
        setIsCategoryActive(i);
        setIsOpened(false);
    }

    return (
        <div className={styles.sort}>
            <div className={styles.sort__label}>
                <SortIcon className={`${styles.sortIcon} ${isOpened && styles.sortIcon__active}`} />
                <b>Сортировка по:</b>
                <span onClick={handleSortClick}>{categories[isCategoryActive]}</span>
            </div >
            {isOpened &&
                <div className={styles.sort__popup}>
                    <ul>
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className={isCategoryActive === index ? styles.active : null}
                                onClick={() => handleCategoryClick(index)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul >
                </div >
            }
        </div >
    )
}

export default Sort
