import PropTypes from 'prop-types'
import { useState } from 'react'

import styles from './PizzaCard.module.scss'

import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'


const PizzaCard = ({ imageUrl, title, price, sizes, types }) => {

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const typeNames = ['тонкое', 'традиционное'];
    return (
        <div className={styles.pizzaBlock}>
            <img
                className={styles.pizzaBlock__image}
                src={imageUrl}
                alt="Pizza"
            />
            <div className={styles.pizzaBlock__content}>
                <h4 className={styles.pizzaBlock__content__title}>{title}</h4>
                <div className={styles.pizzaBlock__content__selector}>
                    <ul>
                        {types.map((type, index) => (
                            <li onClick={() => setActiveType(index)} className={activeType === index ? styles.active : null} key={index}>{typeNames[type]}</li>
                        ))}
                    </ul>
                    <ul>
                        {sizes.map((size, index) => (
                            <li onClick={() => setActiveSize(index)} className={activeSize === index ? styles.active : null} key={index}>{size} см</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.pizzaBlock__content__bottom}>
                    <div className={styles.pizzaBlock__content__bottom__price}>от {price} ₴</div>
                    <button className={styles.pizzaBlock__content__bottom__add}>
                        <PlusIcon className={styles.plusIcon} />
                        <span>Добавить</span>
                        {/* <i>2</i> */}
                    </button>
                </div>
            </div>
        </div >
    )
}

PizzaCard.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    sizes: PropTypes.array
}

export default PizzaCard
