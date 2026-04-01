import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import ProductSection from './components/ProductSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id)
    if (!alreadyInCart) {
      setCartItems([...cartItems, product])
      toast.success(`${product.name} added to cart!`)
    } else {
      toast.warning(`${product.name} is already in cart!`)
    }
  }

  const handleRemoveFromCart = (productId) => {
    const product = cartItems.find((item) => item.id === productId)
    setCartItems(cartItems.filter((item) => item.id !== productId))
    toast.error(`${product.name} removed from cart!`)
  }

  const handleProceedToCheckout = () => {
    setCartItems([])
    toast.success('Checkout successful! Your cart has been cleared.')
  }

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartItems={cartItems} />
      <Banner />
      <Steps />
      <Stats />
      <ProductSection
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
      />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App