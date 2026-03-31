import { BsYoutube, BsFacebook, BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer-section w-full bg-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="footer-top grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">

          {/* Logo + Description */}
          <div className="footer-brand md:col-span-1">
            <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="footer-links-product md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-links-company md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-links-resources md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <div className="flex items-center gap-3">
              
            <a href="#"
                className="footer-social-icon w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
               >
                <BsYoutube className="w-5 h-5 text-white" />
            </a>
              
               <a href="#"
                className="footer-social-icon w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
               >
                <BsFacebook className="w-5 h-5 text-white" />
              </a>
              
             <a href="#"
                className="footer-social-icon w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
              >
                <BsTwitterX className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom Section */}
        <div className="footer-bottom flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="footer-bottom-links flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer