import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Monitor, Smartphone, Tablet, Layers, Users, Zap } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function UiUxDesignPage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">UI/UX</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  Design
                </span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8">
                We create intuitive, engaging, and user-centered digital experiences that delight your users and achieve
                your business goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative aspect-video w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/ui ux desgin.jpeg?height=450&width=800"
                alt="UI/UX Design"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our UI/UX Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="h-8 w-8 text-purple-500" />,
                title: "Website Design",
                description:
                  "Responsive, accessible, and visually appealing websites that provide exceptional user experiences.",
              },
              {
                icon: <Smartphone className="h-8 w-8 text-purple-500" />,
                title: "Mobile App Design",
                description: "Intuitive and engaging mobile applications that users love to interact with.",
              },
              {
                icon: <Tablet className="h-8 w-8 text-purple-500" />,
                title: "Product Design",
                description: "End-to-end product design that solves real user problems and drives business growth.",
              },
              {
                icon: <Layers className="h-8 w-8 text-purple-500" />,
                title: "Design Systems",
                description: "Scalable design systems that ensure consistency across all digital touchpoints.",
              },
              {
                icon: <Users className="h-8 w-8 text-purple-500" />,
                title: "User Research",
                description: "In-depth research to understand your users' needs, behaviors, and pain points.",
              },
              {
                icon: <Zap className="h-8 w-8 text-purple-500" />,
                title: "Prototyping",
                description: "Interactive prototypes that bring your ideas to life before development.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border border-zinc-800 rounded-lg hover:border-purple-500 transition-colors"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Design Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 hidden md:block"></div>
            <div className="space-y-12 relative">
              {[
                {
                  number: "01",
                  title: "Research & Discovery",
                  description:
                    "We conduct user research, analyze competitors, and define project goals to establish a solid foundation.",
                },
                {
                  number: "02",
                  title: "Information Architecture",
                  description:
                    "We organize content and define user flows to create a logical structure for your digital product.",
                },
                {
                  number: "03",
                  title: "Wireframing",
                  description:
                    "We create low-fidelity wireframes to visualize the layout and functionality of your digital product.",
                },
                {
                  number: "04",
                  title: "UI Design",
                  description: "We develop the visual design, including color schemes, typography, and UI elements.",
                },
                {
                  number: "05",
                  title: "Prototyping & Testing",
                  description:
                    "We create interactive prototypes and conduct user testing to validate our design decisions.",
                },
                {
                  number: "06",
                  title: "Handoff & Support",
                  description:
                    "We provide developers with all necessary assets and specifications, and offer ongoing support during implementation.",
                },
              ].map((step, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-start relative">
                  <div className="md:col-span-2 md:text-right order-2 md:order-1">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-zinc-400">{step.description}</p>
                      </>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold text-lg md:ml-auto">
                        {step.number}
                      </div>
                    )}
                  </div>
                  <div className="hidden md:flex justify-center items-start">
                    <div className="w-4 h-4 rounded-full bg-purple-500 mt-3 relative z-10"></div>
                  </div>
                  <div className="md:col-span-2 order-3">
                    {index % 2 === 1 ? (
                      <>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-zinc-400">{step.description}</p>
                      </>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold text-lg">
                        {step.number}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Now with individual image components */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/ui ux desig1.jpeg"
                alt="Finance Dashboard App"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Finance Dashboard App</h3>
                  <p className="text-zinc-300">Mobile app redesign for a fintech company</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/ui ux desig2.jpeg"
                alt="E-commerce Website"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
                  <p className="text-zinc-300">Full redesign of an online fashion retailer</p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/ui ux desig3.jpeg"
                alt="Health & Fitness App"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Health & Fitness App</h3>
                  <p className="text-zinc-300">Workout tracking app with personalized recommendations</p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/ui ux desig4.jpeg"
                alt="Travel Booking Platform"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Travel Booking Platform</h3>
                  <p className="text-zinc-300">User experience redesign for vacation rental bookings</p>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create an Exceptional User Experience?</h2>
          <p className="text-xl text-zinc-300 mb-8">Let's design digital products that your users will love.</p>
          <Link
            href="/services/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}