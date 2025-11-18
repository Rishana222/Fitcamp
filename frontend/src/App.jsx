import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';



function App() {

  return (
    <>
        <Navbar />
       <Outlet/>
        <Footer />
    </>
  )
}

export default App
