import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function CareersPage() {
  return (
    <div>
      <Link href="/">
        <div>
          <PageHeader title="Careers" />
        </div>
      </Link>
      
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Join Our</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  Team
                </span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8">
                We&apos;re always looking for talented individuals passionate about creating exceptional digital experiences.
              </p>
              <Link
                href="#job-listings"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                View Open Positions <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative aspect-video w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Team Collaboration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Projects",
                description: "Work on cutting-edge projects for industry-leading clients and brands.",
              },
              {
                title: "Growth Opportunities",
                description: "Continuous learning and career advancement paths for all team members.",
              },
              {
                title: "Work-Life Balance",
                description: "Flexible schedules and remote work options to support your lifestyle needs.",
              },
              {
                title: "Collaborative Culture",
                description: "Join a supportive team that values collaboration, creativity, and open communication.",
              },
              {
                title: "Competitive Benefits",
                description: "Comprehensive health coverage, retirement plans, and generous paid time off.",
              },
              {
                title: "Modern Workspace",
                description: "Access to state-of-the-art tools and a comfortable, inspiring work environment.",
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

      {/* Current Openings */}
      <section className="py-20 px-6 bg-zinc-900/50" id="job-listings">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Senior Motion Designer",
                department: "Creative",
                location: "Remote",
                type: "Full-time",
              },
              {
                title: "UX/UI Designer",
                department: "Design",
                location: "New York, NY",
                type: "Full-time",
              },
              {
                title: "3D Animator",
                department: "Animation",
                location: "Remote",
                type: "Contract",
              },
              {
                title: "Front-end Developer",
                department: "Development",
                location: "San Francisco, CA",
                type: "Full-time",
              },
            ].map((job, index) => (
              <div key={index} className="p-6 border border-zinc-800 rounded-lg hover:border-purple-500 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm">{job.department}</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm">{job.location}</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm">{job.type}</span>
                </div>
                <p className="text-zinc-400 mb-4">
                  We&apos;re seeking a talented {job.title.toLowerCase()} to join our {job.department.toLowerCase()} team.
                </p>
                <Link
                  href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300"
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovation",
                description: "We embrace new technologies and approaches to create forward-thinking solutions.",
              },
              {
                title: "Excellence",
                description: "We strive for the highest quality in everything we do, from design to delivery.",
              },
              {
                title: "Collaboration",
                description: "We believe the best ideas come from diverse perspectives working together.",
              },
              {
                title: "Integrity",
                description: "We&apos;re committed to ethical practices and transparent relationships with clients and team members.",
              },
            ].map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-zinc-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Hear From Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Working here has given me the opportunity to grow professionally while collaborating with some of the most talented people in the industry.",
                name: "Alex Chen",
                role: "Senior Designer",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                quote: "The supportive environment and challenging projects keep me engaged and excited to come to work every day.",
                name: "Sarah Johnson",
                role: "Motion Graphics Artist",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                quote: "I&apos;ve never worked at a company that values work-life balance and employee growth as much as this one does.",
                name: "Marcus Williams",
                role: "Developer",
                avatar: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 border border-zinc-800 rounded-lg">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="text-zinc-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Application Review",
                description: "We carefully review your resume, portfolio, and cover letter.",
              },
              {
                number: "02",
                title: "Initial Interview",
                description: "A conversation to learn more about you and your experience.",
              },
              {
                number: "03",
                title: "Skills Assessment",
                description: "A practical evaluation of your skills relevant to the position.",
              },
              {
                number: "04",
                title: "Team Interview",
                description: "Meet the team you&apos;ll be working with and discuss collaboration.",
              },
            ].map((step, index) => (
              <div key={index} className="relative p-6 border border-zinc-800 rounded-lg">
                <span className="text-4xl font-bold text-purple-500/20 absolute top-4 right-4">{step.number}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">No Current Openings That Fit?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            We&apos;re always interested in connecting with talented individuals. Send us your resume for future opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Submit Your Resume <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}