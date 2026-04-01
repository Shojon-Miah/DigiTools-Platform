const CallToAction = () => {
  return (
    <section className="cta-section w-full py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white text-sm mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <button className="bg-white text-purple-600 font-medium px-6 py-3 rounded-full">
            Explore Products
          </button>
          <button className="border border-white text-white font-medium px-6 py-3 rounded-full">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction