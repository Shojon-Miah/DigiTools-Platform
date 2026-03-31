import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [cartItems] = useState([])

  return (
    <div>
      <Navbar cartItems={cartItems} />
    </div>
  )
}

export default App