import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/page-header";

export default function MotionGraphicsPage() {
  return (
    <div>
      {/* Link the PageHeader - Assuming you want the header linked */}
      <Link href="/">
        <div>
          <PageHeader title={""} /> {/* Removed title prop as it's unused in PageHeader component */}
        </div>
      </Link>
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Motion</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  Graphics
                </span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8">
                We create dynamic visual content that brings your stories to life and captivates your audience through
                movement and animation.
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
                src="/placeholder.svg?height=450&width=800" // Keep placeholder or replace with actual image
                alt="Motion Graphics"
                fill
                className="object-cover rounded-lg"
                priority // Add priority if it's LCP
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Motion Team</h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            Meet the creative minds behind our stunning motion graphics and animations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Emily Rodriguez",
                role: "Motion Director",
                bio: "Expert in storytelling through animation with 8+ years experience in the industry.",
                image: "/placeholder.svg?height=400&width=400", // Placeholder or actual image
              },
              {
                name: "Kai Zhang",
                role: "2D Animator",
                bio: "Specializes in character animation and fluid motion design for brands.",
                image: "/placeholder.svg?height=400&width=400", // Placeholder or actual image
              },
              {
                name: "Nadia Patel",
                role: "3D Animation Lead",
                bio: "Creates immersive 3D animations that push creative boundaries.",
                image: "/placeholder.svg?height=400&width=400", // Placeholder or actual image
              },
              {
                name: "Marcus Taylor",
                role: "Motion Graphics Artist",
                bio: "Transforms concepts into engaging animated content for digital platforms.",
                image: "/placeholder.svg?height=400&width=400", // Placeholder or actual image
              },
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

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Motion Graphics Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Explainer Videos",
                description: "Clear and engaging animations that explain complex concepts, products, or services.",
              },
              {
                title: "Brand Animations",
                description: "Dynamic logo animations and brand elements that bring your identity to life.",
              },
              {
                title: "Social Media Content",
                description: "Eye-catching animated content optimized for various social media platforms.",
              },
              {
                title: "UI Animations",
                description: "Subtle and purposeful animations that enhance user experience in digital products.",
              },
              {
                title: "Video Intros/Outros",
                description: "Professional animated intros and outros for your video content.",
              },
              {
                title: "Animated Infographics",
                description: "Data visualizations and information presented in an engaging animated format.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="group relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=450&width=800&text=Motion+Project+${index + 1}`} // Placeholder or actual image
                  alt={`Motion Project ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Motion Project {index + 1}</h3>
                    <p className="text-zinc-300">Explainer video for a tech product</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact" // Consider linking to a portfolio page if it exists
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Animation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Concept & Script",
                description: "We develop the concept and script that will form the foundation of your animation.",
              },
              {
                number: "02",
                title: "Storyboarding",
                description: "We create visual representations of each scene to plan the animation flow.",
              },
              {
                number: "03",
                title: "Style Frames",
                description: "We design key frames that establish the visual style of your animation.",
              },
              {
                number: "04",
                title: "Animation",
                description: "We bring your content to life through fluid and engaging animation.",
              },
              {
                number: "05",
                title: "Sound Design",
                description: "We add music, sound effects, and voiceover to enhance the viewing experience.",
              },
              {
                number: "06",
                title: "Delivery",
                description: "We provide the final animation in all required formats for your specific needs.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
          {/* FIX: Replaced ' with ' */}
          <p className="text-xl text-zinc-300 mb-8">
            Let's create animations that engage your audience and communicate your message effectively.
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
  );
}