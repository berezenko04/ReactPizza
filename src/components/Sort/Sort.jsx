import styles from './Sort.module.scss'

import { ReactComponent as SortIcon } from '../../assets/icons/arrow-top.svg'

const Sort = () => {
    return (
        <div className={styles.sort}>
            <div className={styles.sort__label}>
                <SortIcon />
                <b>Сортировка по:</b>
                <span>популярности</span>
            </div >
            <div className={styles.sort__popup}>
                <ul>
                    <li className={styles.active}>популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                </ul >
            </div >
        </div >
    )
}

export default Sort
