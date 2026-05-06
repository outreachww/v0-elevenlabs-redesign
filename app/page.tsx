import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { ProductsSection } from '@/components/products-section'
import { ResearchSection } from '@/components/research-section'
import { SafetySection } from '@/components/safety-section'
import { PricingSection } from '@/components/pricing-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductsSection />
      <ResearchSection />
      <SafetySection />
      <PricingSection />
      <Footer />
    </main>
  )
}
