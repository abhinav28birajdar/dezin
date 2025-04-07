import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function CareersPage() {
  return (
    <div>
            <Link href="/">
                  <div>
                    <PageHeader title="AR/VR Design" />
                  </div>
                </Link>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See a Position That Fits?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            We're always interested in connecting with talented individuals. Send us your resume for future
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

