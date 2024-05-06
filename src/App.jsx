

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './pages/Home'
import Whishlist from './pages/Whishlist'
import Cart from './pages/Cart'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/whishlist' element={<Whishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
