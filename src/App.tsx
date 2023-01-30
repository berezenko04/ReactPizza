import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.scss'

import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import NotFound from './pages/NotFound/NotFound'


const Cart = lazy(() => import('./pages/Cart/Cart'))


const App = () => {

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/ReactPizza/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='cart' element={<Suspense><Cart /></Suspense>} />
          <Route path='*' element={<NotFound />} /> {/* Don't work with gh-pages */}
        </Route>
      </Routes>
    </div>
  )
}

export default App