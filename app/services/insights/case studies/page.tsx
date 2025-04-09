import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader />

      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Case</span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Studies
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              In-depth analysis of our projects and the impact they've made for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Case Study</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video w-full">
              <Image
                src="/assets/images/featured-case-study.jpg"
                alt="Featured Case Study"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-500 rounded-full">
                  E-commerce
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full">
                  Complete Redesign
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Transforming the Online Shopping Experience for LuxeRetail</h3>
              <p className="text-zinc-400 mb-6">
                How we increased conversion rates by 45% and reduced cart abandonment through strategic UX improvements
                and a complete visual overhaul.
              </p>
              <Link href="/case-studies/luxeretail-redesign" className="inline-flex items-center gap-2 text-purple-500">
                View Case Study <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="group border border-zinc-800 rounded-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={`/assets/images/case-study-${index + 1}.jpg`}
                    alt={`Case Study ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-500 rounded-full">
                      {["E-commerce", "SaaS", "FinTech", "Healthcare", "Education", "Travel"][index % 6]}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full">
                      {["UX Design", "Branding", "Web App", "Mobile App", "Design System", "Website"][index % 6]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                    {
                      [
                        "TechFlow: Simplifying Complex Workflows",
                        "FinanceApp: Reimagining Personal Banking",
                        "HealthTrack: Patient-Centered Healthcare",
                        "LearnHub: Modernizing Online Education",
                        "TravelEase: Streamlining Travel Planning",
                        "FoodDelivery: Enhancing the Ordering Experience",
                      ][index % 6]
                    }
                  </h3>
                  <p className="text-zinc-400 mb-4">
                    {
                      [
                        "How we simplified complex workflows to improve productivity and user satisfaction.",
                        "A complete redesign of a banking app that increased user engagement by 60%.",
                        "Creating an intuitive healthcare platform focused on patient experience.",
                        "Transforming online learning through intuitive design and engaging interactions.",
                        "Simplifying the travel booking process through user-centered design.",
                        "Redesigning a food delivery app to improve order completion rates.",
                      ][index % 6]
                    }
                  </p>
                  <Link
                    href={`/case-studies/project-${index + 1}`}
                    className="inline-flex items-center gap-2 text-purple-500"
                  >
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["E-commerce", "SaaS", "FinTech", "Healthcare", "Education", "Travel"].map((industry, index) => (
              <Link
                key={index}
                href={`/case-studies/industry/${industry.toLowerCase().replace(/\s+/g, "-")}`}
                className="p-4 border border-zinc-800 rounded-lg text-center hover:border-purple-500 hover:bg-purple-500/5 transition-colors"
              >
                <span className="font-medium">{industry}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let's collaborate to create exceptional digital experiences that drive results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}
