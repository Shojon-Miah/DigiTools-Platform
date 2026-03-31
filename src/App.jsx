import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Steps from './components/Steps'
import Stats from './components/Stats'

function App() {
  const [cartItems] = useState([])

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Banner />
      <Steps />
      <Stats />
    </div>
  )
}

export default App