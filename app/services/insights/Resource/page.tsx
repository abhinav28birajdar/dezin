import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader />

      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Free</span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Resources
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Free assets, tutorials, and tools to help you elevate your design and development projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "UI Component Library",
                description: "A comprehensive library of reusable UI components for your next project.",
                category: "Design Assets",
                image: "/assets/images/resource-1.jpg",
                downloadLink: "/assets/downloads/ui-component-library.zip",
              },
              {
                title: "Design System Template",
                description: "A complete Figma template to kickstart your design system.",
                category: "Templates",
                image: "/assets/images/resource-2.jpg",
                downloadLink: "/assets/downloads/design-system-template.zip",
              },
              {
                title: "Animation Library",
                description: "A collection of ready-to-use animations for web and mobile applications.",
                category: "Motion",
                image: "/assets/images/resource-3.jpg",
                downloadLink: "/assets/downloads/animation-library.zip",
              },
            ].map((resource, index) => (
              <div key={index} className="group border border-zinc-800 rounded-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-500 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{resource.description}</p>
                  <div className="flex gap-4">
                    <Link
                      href={resource.downloadLink}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md font-medium hover:opacity-90 transition-opacity"
                    >
                      <Download size={16} /> Download
                    </Link>
                    <Link
                      href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-2 text-purple-500"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Browse Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Design Assets",
                description: "UI kits, icons, illustrations, and more for your design projects.",
                icon: "🎨",
                link: "/resources/design-assets",
              },
              {
                title: "Templates",
                description: "Ready-to-use templates for websites, apps, and presentations.",
                icon: "📝",
                link: "/resources/templates",
              },
              {
                title: "Tutorials",
                description: "Step-by-step guides to improve your design and development skills.",
                icon: "📚",
                link: "/resources/tutorials",
              },
              {
                title: "Tools",
                description: "Useful tools and utilities to streamline your workflow.",
                icon: "🛠️",
                link: "/resources/tools",
              },
            ].map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="p-6 border border-zinc-800 rounded-lg hover:border-purple-500 hover:bg-purple-500/5 transition-colors"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-zinc-400 mb-4">{category.description}</p>
                <span className="inline-flex items-center gap-2 text-purple-500">
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Resources */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Latest Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="group border border-zinc-800 rounded-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={`/assets/images/resource-${index + 4}.jpg`}
                    alt={`Resource ${index + 4}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-500 rounded-full">
                      {["Design Assets", "Templates", "Tutorials", "Tools", "Fonts", "Icons"][index % 6]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                    {
                      [
                        "Icon Pack: Essential UI",
                        "Responsive Dashboard Template",
                        "Creating Custom Animations in CSS",
                        "Color Palette Generator",
                        "Premium Font Collection",
                        "Illustration Pack: Abstract Shapes",
                      ][index % 6]
                    }
                  </h3>
                  <p className="text-zinc-400 mb-4">
                    {
                      [
                        "A versatile icon pack with over 200 essential UI icons in multiple formats.",
                        "A fully responsive dashboard template built with Tailwind CSS.",
                        "Learn how to create custom animations that enhance user experience.",
                        "Generate harmonious color palettes for your design projects.",
                        "A curated collection of premium fonts for various design needs.",
                        "Abstract shape illustrations perfect for backgrounds and decorative elements.",
                      ][index % 6]
                    }
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href={`/assets/downloads/resource-${index + 4}.zip`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md font-medium hover:opacity-90 transition-opacity"
                    >
                      <Download size={16} /> Download
                    </Link>
                    <Link
                      href={`/resources/resource-${index + 4}`}
                      className="inline-flex items-center gap-2 text-purple-500"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/resources/all"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-md font-medium hover:bg-zinc-700 transition-colors"
            >
              View All Resources <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Request Resource Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Can&apos;t Find What You Need?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let us know what resources would help you in your projects, and we&apos;ll consider creating them.
          </p>
          <Link
            href="/resources/request"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Request a Resource
          </Link>
        </div>
      </section>
    </div>
  )
}