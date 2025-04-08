import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function TeamPage() {
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Team</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Meet the talented individuals who bring creativity, expertise, and passion to every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Leader+${index + 1}`}
                    alt={`Team Leader ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-purple-500 mb-2">Founder & Creative Director</p>
                <p className="text-zinc-400">
                  With over 15 years of experience in design, Jane leads our creative vision and ensures excellence in
                  every project.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Team Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Design Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Designer+${index + 1}`}
                    alt={`Designer ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold">John Smith</h3>
                <p className="text-purple-500">Senior Designer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Development Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Developer+${index + 1}`}
                    alt={`Developer ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold">Alex Johnson</h3>
                <p className="text-purple-500">Senior Developer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-zinc-300 mb-8">
            We&apos;re always looking for talented individuals who are passionate about design and technology.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            View Open Positions <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
