import React from 'react'
import HomePage from '../HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import { SingleProduct } from '../SingleProduct/SingleProduct'
import CartPage from '../CartPage/CartPage'
import Admin from "../Admin/Admin"
import Edit from '../Admin/Edit'
import AuthPage from '../AuthPage/AuthPage'
import Dresses from '../Dresses/Dresses'
import ShippingAdresss from '../Shipping/ShippingAdress'
import ShippingDetails from '../Shipping/ShippingDetails'
import Dashboard from '../Admin/Dashboard'

const MainRoutes = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="/dress" element={<Dresses />} />
          <Route path="/ship" element={<ShippingAdresss />} />
          <Route path="/dress/:id" element={<SingleProduct />} />
          <Route path="/shipping_address" element={<ShippingDetails />} />
          <Route path="/admin_Dashboard" element={<Dashboard/>} />
          {/* <Route path="/top" element={<top/>} />
          <Route path="/dress/:id" element={<SingleProduct />} />

          <Route path="/shoes" element={<shoes/>} /> */}
          {/* <Route path="/shoes/:id" element={<SingleProduct/>} /> */}
        </Routes>
      </div>
    );
}

export default MainRoutes