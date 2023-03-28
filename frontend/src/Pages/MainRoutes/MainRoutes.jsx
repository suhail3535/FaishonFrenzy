import React from 'react'
import HomePage from '../HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default MainRoutes