'use client'

import { AudioOverview } from './audio-overview'
import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'FREE',
    price: '$0',
    period: '/month',
    description: 'For individuals exploring voice AI',
    features: [
      '10,000 characters/month',
      '3 custom voices',
      'Standard quality',
      'Community support',
    ],
    cta: 'GET STARTED',
    featured: false,
  },
  {
    name: 'CREATOR',
    price: '$22',
    period: '/month',
    description: 'For content creators and small projects',
    features: [
      '100,000 characters/month',
      '30 custom voices',
      'Professional quality',
      'Voice cloning',
      'API access',
      'Priority support',
    ],
    cta: 'START TRIAL',
    featured: true,
  },
  {
    name: 'ENTERPRISE',
    price: 'CUSTOM',
    period: '',
    description: 'For organizations with custom needs',
    features: [
      'Unlimited characters',
      'Unlimited voices',
      'Highest quality',
      'Dedicated support',
      'Custom SLA',
      'On-premise options',
    ],
    cta: 'CONTACT SALES',
    featured: false,
  },
]

const pricingText = `Choose a plan that fits your needs. From free tier for exploration to enterprise solutions for scale. All plans include access to our core voice AI technology.`

export function PricingSection() {
  return (
    <section id="pricing" className="border-b-2 border-foreground">
      <div className="border-b-2 border-foreground px-4 py-8 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest text-muted-foreground">[04]</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight md:text-4xl">PRICING</h2>
          </div>
          <AudioOverview text={pricingText} label="OVERVIEW" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`flex flex-col border-b-2 border-foreground p-6 md:border-b-0 md:p-8 ${
              index < 2 ? 'md:border-r-2' : ''
            } ${plan.featured ? 'bg-foreground text-background' : ''}`}
          >
            <div className="mb-6">
              <span className={`text-xs tracking-widest ${plan.featured ? 'text-background/60' : 'text-muted-foreground'}`}>
                {plan.name}
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold md:text-5xl">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? 'text-background/60' : 'text-muted-foreground'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-2 font-sans text-sm ${plan.featured ? 'text-background/80' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>
            </div>

            <div className="mb-8 flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0" strokeWidth={2} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#"
              className={`block border-2 py-3 text-center text-xs tracking-widest transition-colors ${
                plan.featured
                  ? 'border-background bg-background text-foreground hover:bg-transparent hover:text-background'
                  : 'border-foreground hover:bg-foreground hover:text-background'
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
