import { FiUser } from 'react-icons/fi'
import { BsBox } from 'react-icons/bs'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'

const stepsData = [
  {
    id: '01',
    icon: <FiUser className="w-8 h-8 text-purple-600" />,
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    id: '02',
    icon: <BsBox className="w-8 h-8 text-purple-600" />,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    id: '03',
    icon: <HiOutlineRocketLaunch className="w-8 h-8 text-purple-600" />,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
]

const Steps = () => {
  return (
    <section className="steps-section w-full bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="steps-header text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>

          <p className="text-gray-500 text-sm">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps grid */}
        <div className="steps-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="step-card relative bg-white rounded-2xl p-8 flex flex-col items-center text-center"
            >
              {/* Step Number Badge */}
              <span className="step-number absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {step.id}
              </span>

              {/* Icon Circle */}
              <div className="step-icon-wrapper w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="step-title text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* description */}
              <p className="step-description text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
    
  )
}

export default Steps