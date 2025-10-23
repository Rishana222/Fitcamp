import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Search  from './components/Homepage/Search'
// import GymLocation from './components/Homepage/GymLocation'
// import LatestAdded from './components/Homepage/LatestAdded'
// import JoinedUser from './components/Homepage/JoinedUser'
// import Membership from './components/Homepage/Membership'
// import Card from './components/Homepage/Card'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
       <Footer />
    </Router>
      {/* <Navbar />
          <Search />
          <GymLocation/>
          <LatestAdded/>
         <Card/>
          <JoinedUser/>
          <Membership/>
      <Footer /> */}

    </>
  )
}

export default App
