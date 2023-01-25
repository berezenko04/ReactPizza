import { Route, Routes } from 'react-router-dom'

import './App.scss'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import NotFound from './pages/NotFound/NotFound'
import PizzaItem from './pages/PizzaItem/PizzaItem'
import Layout from './components/Layout/Layout'


const App = () => {

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/ReactPizza/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='pizza/:id' element={<PizzaItem />}></Route>
          <Route path='*' element={<NotFound />} /> {/* Don't work with gh-pages */}
        </Route>
      </Routes>
    </div>
  )
}

export default App