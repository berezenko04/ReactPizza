import { Link, useLocation } from 'react-router-dom'

import styles from './Header.module.scss'

import { ReactComponent as PizzaLogo } from '../../assets/icons/pizza-logo.svg'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../redux/slices/cartSlice'

const Header: React.FC = () => {

    const { cartItems, totalPrice } = useSelector(cartSelector);

    const totalCount = cartItems.reduce((acc: number, item) => acc + item.count, 0);
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <Link to='/ReactPizza' className={styles.header__logo}>
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
