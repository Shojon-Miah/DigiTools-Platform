ProductCard.jsx

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

