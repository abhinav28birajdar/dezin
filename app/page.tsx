import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
// import { TestimonialsSection } from "@/components/testimonials-tesction"
import { InsightsSection } from "@/components/insights-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        {/* <TestimonialsSection /> */}
        <InsightsSection />
        <ContactSection />
      </main>
    
    </div>
  )
}

