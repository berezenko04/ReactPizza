import PropTypes from 'prop-types'

import styles from './PizzaCard.module.scss'

import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'

const PizzaCard = ({ imageUrl, title, price }) => {
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
                        <li className={styles.active}>тонкое</li>
                        <li>традиционное</li>
                    </ul>
                    <ul>
                        <li className={styles.active}>26 см.</li>
                        <li>30 см.</li>
                        <li>40 см.</li>
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
        </div>
    )
}

PizzaCard.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
}

export default PizzaCard
