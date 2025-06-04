import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MobileFooter from '../components/MobileFooter'
import MobileSlider from '../components/MobileSlider'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <MobileSlider/>
        <Outlet/>
        <Footer/>
        <MobileFooter/>
    </div>
  )
}

export default RootLayout