import PropTypes from 'prop-types'
import { useContext } from 'react';

import styles from './Categories.module.scss'

import AppContext from '../../Context';

const Categories = () => {

    const { categoryId, setCategoryId } = useContext(AppContext)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'
    ];

    return (
        <ul className={styles.categories}>
            {categories.map((category, index) => (
                <li
                    key={index}
                    onClick={() => setCategoryId(index)}
                    className={categoryId === index ? styles.active : null}
                >
                    {category}
                </li>
            ))}
        </ul>
    )
}

// Categories.propTypes = {
//     value: PropTypes.number,
//     onClickCategory: PropTypes.func
// }

export default Categories
