import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

import styles from './Header.module.scss'

import { ReactComponent as PizzaLogo } from '../../assets/icons/pizza-logo.svg'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../redux/cart/selectors'

const Header: React.FC = () => {

    const { cartItems, totalPrice } = useSelector(cartSelector);

    const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);
    const location = useLocation();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(cartItems);
            localStorage.setItem('cart', json);
        }
        isMounted.current = true;
    }, [cartItems])

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <Link to='/ReactPizza/' className={styles.header__logo}>
                        <PizzaLogo className={styles.pizzaLogo} />
                        <div>
                            <h1>React Pizza</h1>
                            <p>Самая реактивная пицца</p>
                        </div>
                    </Link>
                    {location.pathname !== '/ReactPizza/cart' && <Link to='/ReactPizza/cart' className={styles.header__cart}>
                        <span>{totalPrice} ₴</span>
                        <div className={styles.header__cart__delimiter}></div>
                        <div className={styles.header__cart__items}>
                            <CartIcon className={styles.cartIcon} />
                            <span>{totalCount}</span>
                        </div>
                    </Link>}
                </div>
            </div>
        </header>
    )
}

export default Header
