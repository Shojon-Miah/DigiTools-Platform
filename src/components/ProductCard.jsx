import {
  BsImages,
  BsGraphUp,
  BsCameraVideo,
  BsEnvelope,
  BsCheckLg,
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

const tagStyles = {
  'popular': 'bg-purple-100 text-purple-600',
  'new': 'bg-green-100 text-green-600',
  'best-seller': 'bg-yellow-100 text-yellow-600',
}

const periodLabel = {
  'monthly': '/Mo',
  'one-time': '/One-Time',
  'yearly': '/Yr',
}

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const { name, description, price, period, tag, tagType, features, icon, iconPath } = product

  const isInCart = cartItems.some((item) => item.id === product.id)

  return (
    <div className="product-card relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">

      {/* Tag Badge */}
      <span className={`product-tag absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[tagType]}`}>
        {tag}
      </span>

      {/* Icon */}
      <div className="product-icon w-12 h-12 flex items-center justify-center">
        {icon === 'image' ? (
          <img
            src={imageMap[iconPath]}
            alt={name}
            className="w-10 h-10 object-contain"
          />
        ) : (
          iconMap[icon]
        )}
      </div>

      {/* Name */}
      <h3 className="product-name text-xl font-bold text-gray-900">
        {name}
      </h3>

      {/* Description */}
      <p className="product-description text-gray-500 text-sm leading-relaxed">
        {description}
      </p>

      {/* Price + Period */}
      <div className="product-price flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">${price}</span>
        <span className="text-sm text-gray-500">{periodLabel[period]}</span>
      </div>

      {/* Features */}
      <ul className="product-features flex flex-col gap-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <BsCheckLg className="text-purple-600 w-4 h-4 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={() => onAddToCart(product)}
        className={`product-buy-btn w-full font-medium py-3 rounded-full transition-colors mt-auto ${
          isInCart
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        }`}
        disabled={isInCart}
      >
        {isInCart ? 'Added to Cart' : 'Buy Now'}
      </button>

    </div>
  )
}

export default ProductCard