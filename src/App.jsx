import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Search  from './components/Homepage/Search'
import GymLocation from './components/Homepage/GymLocation'
import LatestAdded from './components/Homepage/LatestAdded'
import JoinedUser from './components/Homepage/JoinedUser'

function App() {

  return (
    <>
      <Navbar />
          <Search />
          <GymLocation/>
          <LatestAdded/>
          <JoinedUser/>
      <Footer />

    </>
  )
}

export default App
