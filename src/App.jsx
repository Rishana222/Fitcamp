import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Subscription from './pages/Subscription';
import Checkout from './pages/Checkout'
import Checkout2 from './pages/Checkout2';
import Payments from './components/Payment/Payments';
import ViewSubscription from './components/Payment/ViewSubscription';
import Transaction from './components/Payment/Transaction';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/booking" element={<Checkout2/>}/>
          <Route path="/payment" element={<Payments/>}/>
          <Route path="/viewsubscription" element={<ViewSubscription/>}/>
          <Route path="/ticket" element={<Transaction/>}/>
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
