import PropTypes from 'prop-types'

import Header from '../Header/Header'

const Layout = ({ children, isCart = false }) => {
    return (
        <>
            <Header isCart={isCart} />
            <main>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.element,
    isCart: PropTypes.bool
}

export default Layout
