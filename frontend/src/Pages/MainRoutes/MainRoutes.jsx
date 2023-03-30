import React from 'react'
import HomePage from '../HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import { SingleProduct } from '../SingleProduct/SingleProduct'
import CartPage from '../CartPage/CartPage'
import Admin from "../Admin/Admin"
import Edit from '../Admin/Edit'

const MainRoutes = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/single" element={<SingleProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    );
}

export default MainRoutes