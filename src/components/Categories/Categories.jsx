import PropTypes from 'prop-types'

import styles from './Categories.module.scss'

const Categories = ({ value, onClickCategory }) => {



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
                    onClick={() => onClickCategory(index)}
                    className={value === index ? styles.active : null}
                >
                    {category}
                </li>
            ))}
        </ul>
    )
}

Categories.propTypes = {
    value: PropTypes.number,
    onClickCategory: PropTypes.func
}

export default Categories
