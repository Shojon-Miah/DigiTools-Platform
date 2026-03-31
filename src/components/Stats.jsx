const Stats = () => {
  return (
    <section className="stats-section w-full py-5" style={{ background: 'linear-gradient(to right, #6d28d9, #7c3aed)' }}>
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-0">

        {/* Active Users */}
        <div className="stats-item flex-1 flex flex-col items-center text-center text-white px-8">
          <span className="stats-number text-4xl font-bold mb-2">50K+</span>
          <span className="stats-label text-sm text-purple-200">Active Users</span>
        </div>

        {/* Divider */}
        <div className="stats-divider w-px h-12 bg-purple-400"></div>

        {/* Premium Tools */}
        <div className="stats-item flex-1 flex flex-col items-center text-center text-white px-8">
          <span className="stats-number text-4xl font-bold mb-2">200+</span>
          <span className="stats-label text-sm text-purple-200">Premium Tools</span>
        </div>

        {/* Divider */}
        <div className="stats-divider w-px h-12 bg-purple-400"></div>

        {/* Rating */}
        <div className="stats-item flex-1 flex flex-col items-center text-center text-white px-8">
          <span className="stats-number text-4xl font-bold mb-2">4.9</span>
          <span className="stats-label text-sm text-purple-200">Rating</span>
        </div>

      </div>
    </section>
  )
}

export default Stats

