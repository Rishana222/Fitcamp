import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Outlet,useLocation } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';


function App() {

  const location = useLocation();
   const hideNavbarFooter = location.pathname === "/login" || location.pathname === "/signup";
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
      {!hideNavbarFooter && <Navbar />}
      <Outlet />
      {!hideNavbarFooter && <Footer />}
    </>
  )
}

export default App
