import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './App.scss'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import NotFound from './pages/NotFound/NotFound'
import AppContext from './Context'
import PizzaService from './API/PizzaService/PizzaService'

const App = () => {

  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярности ↓', sortProperty: 'rating', orderProperty: 'desc'
  });
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        PizzaService.getPizza(categoryId, sortType, searchValue, currentPage)
          .then(response => {
            setItems(response.data);
            setIsLoading(false);
          })
      } catch (error) {
        alert('Ошибка при запросе данных :(');
        console.error(error);
      }
    }
    window.scrollTo(0, 0);
    fetchData();
  }, [categoryId, sortType, searchValue, currentPage])

  return (
    <div className="wrapper">
      <AppContext.Provider value={{
        searchValue,
        setSearchValue,
        items,
        categoryId,
        setCategoryId,
        sortType,
        setSortType,
        isLoading,
        setCurrentPage
      }}>
        <Routes>
          <Route exact path='/ReactPizza' element={<Home />} />
          <Route exact path='/ReactPizza/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App