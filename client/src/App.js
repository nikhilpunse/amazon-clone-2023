import React from 'react'
import Navbar from './components/Navbar'
import MainOffers from './components/MainOffers'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import ShoppingPage from './components/ShoppingPage'
import CreateInfo from './components/CreateInfo'
import CartItem from './components/CartItem'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PlacedOrdes from './components/PlacedOrdes'

const Routing = ()=>{
  return(<>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/signup' element={<CreateAccount/>}></Route>
            <Route path='/home' element={<MainOffers/>}></Route>
            <Route path='/shopping' element={<ShoppingPage/>}></Route>
            <Route path='/orders' element={<CartItem/>}></Route>
            <Route path='/placedorder' element={<PlacedOrdes/>}></Route>
            <Route path='/createinfo' element={<CreateInfo/>}></Route>
          </Routes>
        </>)
}

function App() {
  return (
    <>
      <BrowserRouter>        
        <Routing/>
      </BrowserRouter>
    </>
  )
}

export default App