import { BsCheckLg } from 'react-icons/bs'

const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    subtitle: 'Perfect for getting started',
    price: 0,
    period: 'Month',
    badge: null,
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    buttonText: 'Get Started Free',
    isPopular: false,
  },
  {
    id: 2,
    name: 'Pro',
    subtitle: 'Best for professionals',
    price: 29,
    period: 'Month',
    badge: 'Most Popular',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    buttonText: 'Start Pro Trial',
    isPopular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    subtitle: 'For teams and businesses',
    price: 99,
    period: 'Month',
    badge: null,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    buttonText: 'Contact Sales',
    isPopular: false,
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section w-full bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="pricing-header text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-sm">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card relative rounded-2xl p-8 flex flex-col gap-4 ${
                plan.isPopular
                  ? 'bg-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white border border-gray-200 text-gray-900'
              }`}
            >

              {/* Most Popular Badge */}
              {plan.badge && (
                <span className="pricing-badge absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              {/* Plan Name */}
              <h3 className={`pricing-plan-name text-xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              {/* Subtitle */}
              <p className={`pricing-subtitle text-sm ${plan.isPopular ? 'text-purple-200' : 'text-gray-500'}`}>
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="pricing-price flex items-baseline gap-1">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`text-sm ${plan.isPopular ? 'text-purple-200' : 'text-gray-500'}`}>
                  /{plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="pricing-features flex flex-col gap-3 my-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <BsCheckLg className={`w-4 h-4 shrink-0 ${plan.isPopular ? 'text-white' : 'text-purple-600'}`} />
                    <span className={plan.isPopular ? 'text-white' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`pricing-btn w-full font-medium py-3 rounded-full transition-colors mt-auto ${
                  plan.isPopular
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {plan.buttonText}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing


