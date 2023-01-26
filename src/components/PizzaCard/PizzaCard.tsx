import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import styles from './PizzaCard.module.scss'

import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'

import { addItem } from '../../redux/cart/slice'
import { CartItem } from '../../redux/cart/types'
import { RootState } from '../../redux/store'

type PizzaCardProps = {
    id: string,
    title: string,
    price: number,
    sizes: number[],
    types: number[],
    imageUrl: string
}


const PizzaCard: React.FC<PizzaCardProps> = ({ id, imageUrl, title, price, sizes, types }) => {

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const typeNames = ['тонкое', 'традиционное'];
    const cartItem = useSelector((state: RootState) => state.cart.cartItems.find((obj) => obj.id === id));
    const addedCount = cartItem ? cartItem.count : 0;

    const dispatch = useDispatch();

    const onClickAdd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize],
            count: 0
        }
        dispatch(addItem(item));
    }

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
                    <button
                        className={styles.pizzaBlock__content__bottom__add}
                        onClick={onClickAdd}
                    >
                        <PlusIcon className={styles.plusIcon} />
                        <span>Добавить</span>
                        {addedCount > 0 && <i>{addedCount}</i>}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default PizzaCard
