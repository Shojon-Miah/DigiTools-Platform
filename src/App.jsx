import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import ProductSection from './components/ProductSection'
import Steps from './components/Steps'
import Footer from './components/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id)
    if (!alreadyInCart) {
      setCartItems([...cartItems, product])
    }
  }

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Banner />
      <Steps />
      <Stats />
      <ProductSection cartItems={cartItems} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  )
}

export default App