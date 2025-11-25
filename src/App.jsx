import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Players from './components/Players'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    const storedCoin = localStorage.getItem('coin');
    if (storedCoin) {
      setCoin(Number(storedCoin));
    }
  }, []);

  return (
    <>
      <Navbar coin={coin} />
      <div className="mt-5 sm:mt-3">
        <Hero setCoin={setCoin} />
      </div>
      <div className="mt-5 sm:mt-3">
        <Players coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
      </div>
      <div className="mt-5 sm:mt-3">
        <div className="flex items-center justify-center bg-transparent mb-16">
          <Newsletter />
        </div>
      </div>
      <div className="mt-5 sm:mt-3">
        <Footer />
      </div>
    </>
  )
}

export default App
