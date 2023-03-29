import React from 'react'
import HomePage from '../HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import { SingleProduct } from '../SingleProduct/SingleProduct'
import CartPage from '../CartPage/CartPage'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>} />          
                <Route path='/cart' element={<CartPage/>} />          
                <Route path='/single' element={<SingleProduct/>} />          
            </Routes>
        </div>
    )
}

export default MainRoutes