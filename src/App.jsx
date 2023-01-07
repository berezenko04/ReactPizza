import { Route, Routes } from 'react-router-dom'

import './App.scss'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import NotFound from './pages/NotFound/NotFound'

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path='/ReactPizza' element={<Home />} />
        <Route exact path='/ReactPizza/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App