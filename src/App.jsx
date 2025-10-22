import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Search  from './components/Homepage/Search'
import GymLocation from './components/Homepage/GymLocation'
import LatestAdded from './components/Homepage/LatestAdded'
import JoinedUser from './components/Homepage/JoinedUser'
import Membership from './components/Homepage/Membership'
import Card from './components/Homepage/Card'

function App() {

  return (
    <>
      <Navbar />
          <Search />
          <GymLocation/>
          <LatestAdded/>
          <Card/>
          <JoinedUser/>
          <Membership/>
      <Footer />

    </>
  )
}

export default App
