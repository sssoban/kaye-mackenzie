import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MobileFooter from '../components/MobileFooter'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <MobileFooter/>
    </div>
  )
}

export default RootLayout