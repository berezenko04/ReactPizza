import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <main><Outlet /></main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.element,
    isCart: PropTypes.bool
}

export default Layout
