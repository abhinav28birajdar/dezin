import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function GraphicDesignPage() {
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
                <span className="text-white">Graphic</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  Design
                </span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8">
                We create visual content that communicates messages, solves problems, and captivates audiences. Our
                graphic design services blend artistry with strategy to deliver impactful results.
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
                src="/graphicheader.jpeg?height=300&width=300"
                alt="Graphic Design"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Graphic Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Print Design",
                description:
                  "Brochures, flyers, posters, business cards, and other print materials designed to make a lasting impression.",
              },
              {
                title: "Digital Graphics",
                description:
                  "Social media graphics, digital ads, email templates, and other online visuals that drive engagement.",
              },
              {
                title: "Illustration",
                description: "Custom illustrations that bring your ideas to life and add a unique touch to your brand.",
              },
              {
                title: "Packaging Design",
                description: "Eye-catching packaging that stands out on shelves and enhances the customer experience.",
              },
              {
                title: "Infographics",
                description: "Visual representations of data and information that simplify complex concepts.",
              },
              {
                title: "Typography",
                description: "Custom lettering and font selection that communicates your brand's personality.",
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
    <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="group relative aspect-square overflow-hidden rounded-lg">
        <Image
          src="/graphicdesign1.jpeg"
          alt="Brand Identity"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
            <p className="text-zinc-300">Complete branding for a tech startup</p>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="group relative aspect-square overflow-hidden rounded-lg">
        <Image
          src="/graphicdesign4.jpeg"
          alt="Print Collateral"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Print Collateral</h3>
            <p className="text-zinc-300">Brochures and marketing materials</p>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="group relative aspect-square overflow-hidden rounded-lg">
        <Image
          src="/graphicdesign3.jpeg"
          alt="Packaging Design"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Packaging Design</h3>
            <p className="text-zinc-300">Custom product packaging for retail</p>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="group relative aspect-square overflow-hidden rounded-lg">
        <Image
          src="/graphicdesign2.jpeg"
          alt="Social Media Graphics"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Social Media Graphics</h3>
            <p className="text-zinc-300">Engaging content for digital platforms</p>
          </div>
        </div>
      </div>
    
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
    </div>
  )
}

