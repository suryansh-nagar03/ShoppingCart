import Header from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/home'
import ClothingStore from './components/clothingStore'
import ShoeStore from './components/shoeStore'
import AccessoriesStore from './components/accessoriesStore'
import ItemPage from './components/itemPage'
import Cart from './components/cart'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clothing" element={<ClothingStore />} />
          <Route path="/shoes" element={<ShoeStore />} />
          <Route path="/accessories" element={<AccessoriesStore />} />
          <Route path="/itemPage" element={<ItemPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
