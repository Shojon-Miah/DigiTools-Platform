import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

function App() {
  const [cartItems] = useState([])

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Banner />
    </div>
  )
}

export default App