import { useState } from 'react'
import styles from './Categories.module.scss'

const Categories = () => {

    const [isActive, setIsActive] = useState(0);

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
            {categories.map((item, index) => (
                <li key={index} onClick={() => setIsActive(index)} className={isActive === index ? styles.active : null}>{item}</li>
            ))}
        </ul>
    )
}

export default Categories
