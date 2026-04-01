const CallToAction = () => {
  return (
    <section
      className="cta-section w-full py-20"
      style={{ background: 'linear-gradient(to right, #6d28d9, #7c3aed)' }}
    >
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="cta-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="cta-description text-purple-200 text-sm mb-10 max-w-md mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          
        <a href="#products"
            className="cta-btn-primary w-full sm:w-auto bg-white text-purple-600 font-semibold px-10 py-3 rounded-full hover:bg-purple-50 transition-colors shadow-md"
        >
            Explore Products
          </a>
          
        <a href="#pricing"
            className="cta-btn-secondary w-full sm:w-auto border-2 border-white text-white font-semibold px-10 py-3 rounded-full hover:bg-purple-700 transition-colors"
        >
            View Pricing
          </a>
        </div>

        {/* Subtext */}
        <p className="cta-subtext text-purple-200 text-sm tracking-wide">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  )
}

export default CallToAction