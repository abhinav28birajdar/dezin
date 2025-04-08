import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import React from "react"
import PageHeader from "@/components/page-header"

export default function CulturalEventDesignPage() {
  return (
    <div>
        <Link href="/">
                <div>
                  <PageHeader />
                </div>
              </Link>
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Cultural Event
                </span>
                <span className="text-white"> Design</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8">
                We create immersive cultural experiences that celebrate heritage, connect communities, and leave lasting impressions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Plan Your Event <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Cultural Event Design"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Cultural Event Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Festival Design",
                description:
                  "Comprehensive planning and design for cultural festivals that showcase traditions and arts.",
              },
              {
                title: "Heritage Celebrations",
                description:
                  "Authentic celebrations that honor cultural heritage with appropriate themes and decor.",
              },
              {
                title: "Traditional Stage Design",
                description:
                  "Stage setups that reflect cultural aesthetics while meeting modern technical requirements.",
              },
              {
                title: "Cultural Branding",
                description:
                  "Visual identity and branding for cultural events that communicate their essence effectively.",
              },
              {
                title: "Interactive Exhibits",
                description: "Engaging exhibits that educate and immerse attendees in cultural experiences.",
              },
              {
                title: "Cultural Workshops",
                description: "Design and coordination of hands-on cultural workshops and demonstrations.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border border-zinc-800 rounded-lg hover:border-purple-500 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Cultural Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Event+${index + 1}`}
                  alt={`Cultural Event ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cultural Event {index + 1}</h3>
                    <p className="text-zinc-300">Traditional celebration design for a community festival</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-purple-500 text-purple-500 px-6 py-3 rounded-md font-medium hover:bg-purple-500/10 transition-colors"
            >
              View All Events <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Event Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Cultural Research",
                description:
                  "We research traditions, symbols, and customs to ensure authentic and respectful representation.",
              },
              {
                number: "02",
                title: "Concept Development",
                description:
                  "We create event concepts that balance tradition with innovation for memorable experiences.",
              },
              {
                number: "03",
                title: "Visual Design",
                description:
                  "We design all visual elements including decor, signage, and promotional materials.",
              },
              {
                number: "04",
                title: "Execution",
                description:
                  "We oversee implementation to ensure the event stays true to its cultural vision.",
              },
            ].map((step, index) => (
              <div key={index} className="relative p-6 border border-zinc-800 rounded-lg">
                <span className="text-5xl font-bold text-purple-500/20 absolute top-4 right-4">{step.number}</span>
                <h3 className="text-xl font-semibold mb-2 relative">{step.title}</h3>
                <p className="text-zinc-400 relative">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Celebrate Culture in Style?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let&apos;s create an unforgettable cultural event that honors traditions while creating new memories.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}