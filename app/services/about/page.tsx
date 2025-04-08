import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  return (
    <div>
      <Link href="/">
        <div>
          <PageHeader  />
        </div>
      </Link>

      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">About</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Us</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8">
                We are a creative design studio dedicated to crafting exceptional digital experiences that inspire and
                engage.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/aboutheader.jpeg?height=600&width=600"
                alt="About Us"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt="Our Story"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  Founded in 2015, Artynex Design began as a small team of passionate designers with a shared vision: to
                  create digital experiences that not only look beautiful but also drive real results for our clients.
                </p>
                <p>
                  Over the years, we&apos;ve grown into a full-service design studio with expertise across multiple
                  disciplines, from graphic design and branding to motion graphics and immersive AR/VR experiences.
                </p>
                <p>
                  What sets us apart is our commitment to blending creativity with strategy. We don&apos;t just create
                  visually stunning designs; we create solutions that help our clients achieve their business goals and
                  connect with their audiences in meaningful ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creativity",
                description:
                  "We push boundaries and think outside the box to deliver innovative solutions that stand out.",
              },
              {
                title: "Excellence",
                description: "We are committed to delivering the highest quality work in everything we do.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partner closely with our clients to achieve shared goals.",
              },
              {
                title: "Innovation",
                description:
                  "We stay at the forefront of design trends and technology to deliver cutting-edge solutions.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with honesty, transparency, and ethical practices in all our business relationships.",
              },
              {
                title: "Impact",
                description:
                  "We measure our success by the positive impact our work has on our clients and their audiences.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 border border-zinc-800 rounded-lg hover:border-purple-500 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold">Our Leadership Team</h2>
            <Link href="/team" className="inline-flex items-center gap-2 text-purple-500 mt-4 md:mt-0">
              Meet the entire team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Team+Member+${index + 1}`}
                    alt={`Team Member ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-purple-500">Creative Director</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let&apos;s create something amazing that exceeds your expectations and achieves your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}