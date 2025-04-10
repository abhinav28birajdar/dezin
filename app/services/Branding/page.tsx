import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function BrandingPage() {
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
                  Branding
                </span>
                <span className="text-white"> Services</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8">
                We create distinctive brand identities that resonate with your audience and set you apart from the
                competition.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/Branding Services.jpeg?height=600&width=600"
                alt="Branding"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Branding Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Strategy",
                description:
                  "We develop comprehensive brand strategies that align with your business goals and resonate with your target audience.",
              },
              {
                title: "Logo Design",
                description:
                  "We create memorable logos that capture the essence of your brand and make a lasting impression.",
              },
              {
                title: "Visual Identity",
                description:
                  "We design cohesive visual systems including color palettes, typography, and graphic elements.",
              },
              {
                title: "Brand Guidelines",
                description:
                  "We create detailed guidelines to ensure consistent application of your brand across all touchpoints.",
              },
              {
                title: "Brand Messaging",
                description: "We craft compelling brand messaging that communicates your unique value proposition.",
              },
              {
                title: "Rebranding",
                description: "We help established brands evolve while maintaining their core values and recognition.",
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
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Branding Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/Branding1.jpeg",
                title: "Cozy Café Brand",
                desc: "Warm and inviting branding for an artisanal coffee shop",
              },
              {
                img: "/Branding2.jpeg",
                title: "MinimGlobe Skincare",
                desc: "Elegant, minimalist branding for a luxury skincare line",
              },
              {
                img: "/Branding3.jpeg",
                title: "Creative Eye Studio",
                desc: "Bold, colorful identity system for a design agency",
              },
              {
                img: "/Branding4.jpeg",
                title: "Luxury M Brand",
                desc: "Premium gold-foil branding for an exclusive lifestyle brand",
              },
              {
                img: "/Branding5.jpeg",
                title: "Premium Real Estate",
                desc: "Sophisticated gold signage and branding for a luxury property developer",
              },
              {
                img: "/Branding6.jpeg",
                title: "Aline Design Studio",
                desc: "Vibrant, colorful branding for a graphic design and creative agency",
              },
            ].map((project, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-zinc-300">{project.desc}</p>
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
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Branding Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We dive deep into your business, industry, competitors, and audience to understand your unique position.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "We develop a comprehensive brand strategy that aligns with your business goals and resonates with your audience.",
              },
              {
                number: "03",
                title: "Design",
                description:
                  "We create visual elements that bring your brand to life, from logo to complete visual identity.",
              },
              {
                number: "04",
                title: "Implementation",
                description:
                  "We provide guidelines and assets to ensure consistent application across all touchpoints.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Powerful Brand?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let&rsquo;s create a brand identity that resonates with your audience and drives business growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}