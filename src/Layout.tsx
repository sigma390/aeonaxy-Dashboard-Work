// import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import { Outlet } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"

function Layout() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Outlet />
    
    </>
  )
}

export default Layout