import styles from './CartItem.module.scss'

import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg'

const CartItem = () => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItem__left}>
                <img
                    className={styles.cartItem__left__image}
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza"
                />
                <div className={styles.cartItem__left__title}>
                    <h3>Сырный цыпленок</h3>
                    <p>тонкое тесто, 26 см.</p>
                </div>
            </div>
            <div className={styles.cartItem__count}>
                <button><MinusIcon /></button>
                <span>2</span>
                <button><PlusIcon /></button>
            </div>
            <span className={styles.cartItem__price}>770 ₴</span>
            <button className={styles.cartItem__remove}>
                <PlusIcon className={styles.remove} />
            </button>
        </div>
    )
}

export default CartItem
