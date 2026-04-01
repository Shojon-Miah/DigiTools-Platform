import {
  BsImages,
  BsGraphUp,
  BsCameraVideo,
  BsEnvelope,
} from 'react-icons/bs'

import writingIcon from '../assets/products/writing.png'
import designToolIcon from '../assets/products/design-tool.png'
import operationIcon from '../assets/products/operation.png'
import portfolioIcon from '../assets/products/portfolio.png'
import socialMediaIcon from '../assets/products/social-media.png'

const imageMap = {
  'writing.png': writingIcon,
  'design-tool.png': designToolIcon,
  'operation.png': operationIcon,
  'portfolio.png': portfolioIcon,
  'social-media.png': socialMediaIcon,
}

const iconMap = {
  BsImages: <BsImages className="w-8 h-8 text-purple-600" />,
  BsGraphUp: <BsGraphUp className="w-8 h-8 text-purple-600" />,
  BsCameraVideo: <BsCameraVideo className="w-8 h-8 text-purple-600" />,
  BsEnvelope: <BsEnvelope className="w-8 h-8 text-purple-600" />,
}

const CartSection = ({ cartItems, onRemoveFromCart, onProceedToCheckout }) => {
  return (
    <div className="cart-section w-full">
      {cartItems.length === 0 ? (
        <div className="cart-empty text-center py-16">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-container border border-gray-200 rounded-2xl p-6">

          {/* Cart Title */}
          <h3 className="cart-title text-xl font-bold text-gray-900 mb-6">
            Your Cart
          </h3>

          {/* Cart Items */}
          <div className="cart-items flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
              >
                {/* Icon + Name + Price */}
                <div className="cart-item-info flex items-center gap-4">
                  <div className="cart-item-icon w-10 h-10 flex items-center justify-center">
                    {item.icon === 'image' ? (
                      <img
                        src={imageMap[item.iconPath]}
                        alt={item.name}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      iconMap[item.icon]
                    )}
                  </div>
                  <div>
                    <p className="cart-item-name text-sm font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="cart-item-price text-sm text-gray-500">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="cart-item-remove text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  )
}

export default CartSection
