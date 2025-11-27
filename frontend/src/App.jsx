import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';


function App() {

  return (

    <>
      <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
      />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
