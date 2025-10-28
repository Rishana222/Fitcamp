import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Subscription from './pages/Subscription';


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
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
