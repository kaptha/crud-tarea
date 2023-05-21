import { BrowserRouter, Route, Routes} from "react-router-dom";

import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Products from './Products'
import Login from "../paginas/login";
import Cart from "../paginas/cart";

export default function Inicio() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBar /> }>
             <Route path='/' element={ <Header/> }/>
             <Route path='/' element={ <Products/> }/>
             <Route path='Login' element={ <Login/> }/>
             <Route path='Cart' element={ <Cart/> }/>
          </Route>
        </Routes>
      </BrowserRouter>   
      
    </div>
  )
}
