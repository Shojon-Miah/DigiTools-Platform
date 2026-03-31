import { BsCart3 } from 'react-icons/bs'

const Navbar = ({ cartItems }) => {
  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="navbar-logo">
          <a href="/" className="text-2xl font-bold text-purple-600">
            DigiTools
          </a>
        </div>

        {/* Nav */}
        <div className="navbar-links hidden md:flex items-center gap-8">
          <a href="#products" className="text-gray-600 hover:text-purple-600 font-medium">
            Products
          </a>
          <a href="#features" className="text-gray-600 hover:text-purple-600 font-medium">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-purple-600 font-medium">
            Pricing
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-purple-600 font-medium">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-600 hover:text-purple-600 font-medium">
            FAQ
          </a>
        </div>

        {/* Cart + Login + Get Started */}
        <div className="navbar-actions flex items-center gap-4">

          {/* cart icon with count */}
          <div className="navbar-cart relative cursor-pointer">
            <BsCart3 className="w-6 h-6 text-gray-600" />

            {/* Cart count Badge */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* Login utton */}
          <a href="#" className="text-gray-600 hover:text-purple-600 font-medium">
            Login
          </a>

          {/* Get Started Button */}
          
          <a href="#"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2 rounded-full transition-colors"
           >
            Get Started
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar