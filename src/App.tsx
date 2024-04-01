
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

function App() {


  return  (
    <>
    <Navbar/>
    <Header/>
    <Outlet />
    
    </>
  )
}

export default App
