import Link from "next/link"
import { ArrowRight } from "lucide-react"
import React from "react"
import Image from "next/image"

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Careers
              </span>
              <span className="text-white"> at Artynex</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Join our team of passionate creatives and help us craft digital experiences that inspire.
            </p>
            <Link
              href="#open-positions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              View Open Positions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            Discover the talented individuals who make Artynex a creative powerhouse and the team you could be joining.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Maya Johnson",
                role: "Creative Director",
                bio: "Leading our creative vision with 12+ years of industry experience in design and digital art.",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Aiden Carter",
                role: "Lead Developer",
                bio: "Transforming creative concepts into interactive digital experiences through elegant code.",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Zara Khan",
                role: "Head of Design",
                bio: "Award-winning designer passionate about creating meaningful, user-centered experiences.",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Leo Morales",
                role: "Motion Design Lead",
                bio: "Bringing static designs to life through animation and immersive motion graphics.",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Sofia Chen",
                role: "Project Manager",
                bio: "Orchestrating seamless project execution while nurturing our collaborative team culture.",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Jamal Washington",
                role: "3D Artist",
                bio: "Crafting immersive worlds and captivating 3D assets for AR/VR experiences.",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Olivia Patel",
                role: "Brand Strategist",
                bio: "Developing compelling brand narratives that resonate with audiences and drive results.",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Theo Nakamura",
                role: "UI/UX Designer",
                bio: "Creating intuitive interfaces that delight users while solving complex design challenges.",
                image: "/placeholder.svg?height=400&width=400"
              }
            ].map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-purple-400 mb-2">{member.role}</p>
                  <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Artynex?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creative Freedom",
                description:
                  "We encourage innovative thinking and provide the space for you to explore your creative potential.",
              },
              {
                title: "Growth Opportunities",
                description:
                  "We invest in your professional development with training, mentorship, and advancement paths.",
              },
              {
                title: "Collaborative Culture",
                description: "Work alongside talented individuals in a supportive environment that values teamwork.",
              },
              {
                title: "Work-Life Balance",
                description: "We believe in flexible work arrangements that respect your personal time and well-being.",
              },
              {
                title: "Impactful Projects",
                description: "Contribute to meaningful projects for diverse clients across various industries.",
              },
              {
                title: "Competitive Benefits",
                description: "Enjoy comprehensive benefits including competitive salary, health insurance, and more.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 border border-zinc-800 rounded-lg hover:border-purple-500 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          <div className="space-y-6">
            {[
              { title: "Senior UI/UX Designer", department: "Design", location: "Remote", type: "Full-time" },
              { title: "Motion Graphics Artist", department: "Animation", location: "New York", type: "Full-time" },
              { title: "3D Modeler", department: "AR/VR", location: "Remote", type: "Contract" },
              { title: "Brand Strategist", department: "Branding", location: "London", type: "Full-time" },
              { title: "Front-end Developer", department: "Development", location: "Remote", type: "Full-time" },
            ].map((position, index) => (
              <div
                key={index}
                className="p-6 border border-zinc-800 rounded-lg hover:border-purple-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-500 rounded-full">
                        {position.department}
                      </span>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full">
                        {position.location}
                      </span>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/careers/${position.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 text-purple-500"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Apply",
                description: "Submit your application through our careers page with your resume and portfolio.",
              },
              {
                number: "02",
                title: "Initial Review",
                description: "Our team reviews your application and portfolio to assess your skills and experience.",
              },
              {
                number: "03",
                title: "Interviews",
                description:
                  "Selected candidates participate in interviews with our team to discuss experience and fit.",
              },
              {
                number: "04",
                title: "Welcome Aboard",
                description: "Successful candidates receive an offer and join our creative team.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don&apos;t See a Position That Fits?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            We&apos;re always interested in connecting with talented individuals. Send us your resume for future
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}