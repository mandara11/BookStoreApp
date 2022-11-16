import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from '../../pages/dashboard/Dashboard'
import Lander from '../../pages/lander/Lander'
import MyCart from '../mycart/MyCart'
import OrderSuccess from '../ordersuccess/OrderSuccess'

function Routerone() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Lander />}/>
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path='/mycart' element={<MyCart />} />
                <Route exact path='/ordersuccess' element={<OrderSuccess />} />
            </Routes>
        </Router>
    </div>
  )
}

export default Routerone
