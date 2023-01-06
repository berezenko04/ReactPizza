import { Link } from 'react-router-dom'

import styles from './Cart.module.scss'

import Header from '../../components/Header/Header'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'
import { ReactComponent as BackIcon } from '../../assets/icons/arrow-left.svg'
import { ReactComponent as SadIcon } from '../../assets/icons/sad.svg'
import EmptyCart from '../../assets/img/empty-cart.webp'
import CartItem from '../../components/CartItem/CartItem'



const Cart = () => {
    const empty = true;

    return (
        <>
            <Header />
            <div className={styles.container__cart}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.content__cart}>
                            {empty ?
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
                                        <Link to='/' className={styles.cartEmpty__button}>Вернутьcя назад</Link>
                                    </div>
                                )
                                : (
                                    <>
                                        <div className={styles.content__cart__top}>
                                            <div className={styles.content__cart__top__title}>
                                                <CartIcon className={styles.cartIcon} />
                                                <h2>Корзина</h2>
                                            </div>
                                            <button className={styles.content__cart__top__clear}>
                                                <TrashIcon className={styles.trashIcon} />
                                                <span>Очистить корзину</span>
                                            </button>
                                        </div>
                                        <div className={styles.content__items}>
                                            <CartItem />
                                            <CartItem />
                                            <CartItem />
                                        </div>
                                        <div className={styles.content__cart__bottom}>
                                            <div className={styles.content__cart__bottom__details}>
                                                <span> Всего пицц: <b>3 шт.</b> </span>
                                                <span> Сумма заказа: <b className={styles.summary}>900 ₴</b> </span>
                                            </div>
                                            <div className={styles.content__cart__bottom__buttons}>
                                                <Link to='/' className={styles.content__cart__bottom__buttons__back}>
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
        </>
    )
}

export default Cart
