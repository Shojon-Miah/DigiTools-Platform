import { FaPlay } from 'react-icons/fa'
import bannerImage from '../assets/banner.png'

const Banner = () => {
  return (
    <section className="banner-section w-full bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Text Content */}
        <div className="banner-content flex-1">

          {/* Badge */}
          <div className="banner-badge inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="banner-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="banner-description text-gray-500 text-base mb-2 max-w-md">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.

          </p>
          <p className="banner-subtext text-gray-500 text-base mb-8">
            Explore Products
          </p>

          {/* Buttons */}
          <div className="banner-buttons flex items-center gap-4">
            
            <a  href="#products"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full transition-colors"
             >
              Explore Products
            </a>
            
            <a  href="#"
              className="flex items-center gap-2 border border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 font-medium px-6 py-3 rounded-full transition-colors"
             >
              <FaPlay className="w-3 h-3" />
              Watch Demo
            </a>
          </div>

        </div>

        {/* Image */}
        <div className="banner-image flex-1 flex justify-center">
          <img
            src={bannerImage}
            alt="Digital workflow illustration"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Banner