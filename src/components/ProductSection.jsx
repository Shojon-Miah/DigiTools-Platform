import { useState } from 'react'
import ProductCard from './ProductCard'
import CartSection from './CartSection'
import productsData from '../data/products.json'

const ProductSection = ({ cartItems, onAddToCart, onRemoveFromCart, onProceedToCheckout }) => {
  const [activeTab, setActiveTab] = useState('products')

  return (
    <section id="products" className="product-section w-full bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="product-section-header text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="product-toggle flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'products'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-purple-600 hover:text-purple-600'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'cart'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-purple-600 hover:text-purple-600'
            }`}
          >
            Cart ({cartItems.length})
          </button>
        </div>

        {/* Products Grid */}
        {activeTab === 'products' && (
          <div className="products-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
              />
            ))}
          </div>
        )}

        {/* Cart Section */}
        {activeTab === 'cart' && (
          <CartSection
            cartItems={cartItems}
            onRemoveFromCart={onRemoveFromCart}
            onProceedToCheckout={onProceedToCheckout}
          />
        )}

      </div>
    </section>
  )
}

export default ProductSection