import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';


function App() {

  return (

    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
