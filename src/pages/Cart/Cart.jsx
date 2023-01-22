import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Cart.module.scss'

import Layout from '../../components/Layout/Layout'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'
import { ReactComponent as BackIcon } from '../../assets/icons/arrow-left.svg'
import { ReactComponent as SadIcon } from '../../assets/icons/sad.svg'
import EmptyCart from '../../assets/img/empty-cart.webp'
import CartItem from '../../components/CartItem/CartItem'
import { clearItems } from '../../redux/slices/cartSlice'




const Cart = () => {
    const dispatch = useDispatch();

    const { cartItems, totalPrice } = useSelector((state) => state.cart);

    const onClickClear = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearItems());
        }
    }

    return (
        <Layout>
            <div className={styles.container__cart}>
                <div className="container">
                    <div className={`${styles.content} ${cartItems.length === 0 ? styles.contentFullHeight : ''}`}>
                        <div className={styles.content__cart}>
                            {cartItems.length === 0 ?
                                (
                                    <div className={styles.cartEmpty}>
                                        <div className={styles.cartEmpty__content}>
                                            <div className={styles.cartEmpty__content__text}>
                                                <div className={styles.cartEmpty__content__text__title}>
                                                    <h2>Корзина пустая</h2>
                                                    <SadIcon />
                                                </div>
                                                <p>Вероятней всего, вы не заказывали ещё пиццу. <br></br>
                                                    Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                                            </div>
                                            <img src={EmptyCart} alt="Empty cart" />
                                        </div>
                                        <Link to='/ReactPizza/' className={styles.cartEmpty__button}>Вернутьcя назад</Link>
                                    </div>
                                )
                                : (
                                    <>
                                        <div className={styles.content__cart__top}>
                                            <div className={styles.content__cart__top__title}>
                                                <CartIcon className={styles.cartIcon} />
                                                <h2>Корзина</h2>
                                            </div>
                                            <button
                                                className={styles.content__cart__top__clear}
                                                onClick={onClickClear}
                                            >
                                                <TrashIcon className={styles.trashIcon} />
                                                <span>Очистить корзину</span>
                                            </button>
                                        </div>
                                        <div className={styles.content__items}>
                                            {cartItems.map((item) => (
                                                <CartItem
                                                    key={item.id}
                                                    {...item}
                                                />
                                            ))}
                                        </div>
                                        <div className={styles.content__cart__bottom}>
                                            <div className={styles.content__cart__bottom__details}>
                                                <span> Всего пицц: <b>{cartItems.reduce((acc, item) => acc + item.count, 0)} шт.</b> </span>
                                                <span> Сумма заказа: <b className={styles.summary}>{totalPrice} ₴</b> </span>
                                            </div>
                                            <div className={styles.content__cart__bottom__buttons}>
                                                <Link to='/ReactPizza/' className={styles.content__cart__bottom__buttons__back}>
                                                    <BackIcon />
                                                    <span>Вернуться назад</span>
                                                </Link>
                                                <button className={styles.content__cart__bottom__buttons__pay}>
                                                    Оплатить сейчас
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}

                        </div>
                    </div>
                </div >
            </div>
        </Layout >
    )
}

export default Cart
