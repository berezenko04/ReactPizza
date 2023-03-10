import styles from './CartItem.module.scss'
import { useDispatch } from 'react-redux'

import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg'
import { addItem, minusItem, removeItem } from '../../redux/cart/slice'
import { CartItem } from '../../redux/cart/types'


type CartItemProps = {
    id: string,
    title: string,
    price: number,
    count: number,
    imageUrl: string,
    type: string,
    size: number
}

const CartItemBlock: React.FC<CartItemProps> = ({ id, title, price, count, imageUrl, type, size }) => {

    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(addItem({
            id,
        } as CartItem))
    }

    const onClickMinus = () => {
        dispatch(minusItem(id));
    }

    const onClickRemove = () => {
        if (window.confirm('Вы действительно хочешь удалить этот товар?')) {
            dispatch(removeItem(id));
        }
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItem__left}>
                <img
                    className={styles.cartItem__left__image}
                    src={imageUrl}
                    alt="Pizza"
                />
                <div className={styles.cartItem__left__title}>
                    <h3>{title}</h3>
                    <p>{type}, {size} см.</p>
                </div>
            </div>
            <div className={styles.cartItem__count}>
                <button disabled={count === 1} onClick={onClickMinus}><MinusIcon /></button>
                <span>{count}</span>
                <button onClick={onClickPlus}><PlusIcon /></button>
            </div>
            <span className={styles.cartItem__price}>{price * count} ₴</span>
            <button onClick={onClickRemove} className={styles.cartItem__remove}>
                <PlusIcon className={styles.remove} />
            </button>
            <button onClick={onClickRemove} className={styles.cartItem__remove__md}>
                Удалить товар
            </button>
        </div>
    )
}

export default CartItemBlock
