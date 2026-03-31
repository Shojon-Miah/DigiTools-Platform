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
   <>
   </>
  )
}

export default Pricing