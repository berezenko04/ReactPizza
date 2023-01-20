import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Header.module.scss'

import { ReactComponent as PizzaLogo } from '../../assets/icons/pizza-logo.svg'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { useSelector } from 'react-redux'

const Header = ({ isCart }) => {

    const { cartItems, totalPrice } = useSelector((state) => state.cart);
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Link to='/ReactPizza' className={styles.header__logo}>
                        <PizzaLogo className={styles.pizzaLogo} />
                        <div>
                            <h1>React Pizza</h1>
                            <p>Самая реактивная пицца</p>
                        </div>
                    </Link>
                    {isCart &&
                        <Link to='/ReactPizza/cart' className={styles.header__cart}>
                            <span>{totalPrice} ₴</span>
                            <div className={styles.header__cart__delimiter}></div>
                            <div className={styles.header__cart__items}>
                                <CartIcon className={styles.cartIcon} />
                                <span>{cartItems.length}</span>
                            </div>
                        </Link>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header


Header.propTypes = {
    isCart: PropTypes.bool
}