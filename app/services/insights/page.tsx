import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function InsightsPage() {
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Insights
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Explore our thoughts on design, technology, and creative processes that drive our work.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Article</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video w-full">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Featured Article"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-500 rounded-full">
                  Design Trends
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full">
                  5 min read
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">The Evolution of Digital Design: Past, Present, and Future</h3>
              <p className="text-zinc-400 mb-6">
                Explore how digital design has evolved over the decades, current trends shaping the industry, and what
                the future might hold for designers and users alike.
              </p>
              <Link
                href="/insights/evolution-of-digital-design"
                className="inline-flex items-center gap-2 text-purple-500"
              >
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="group">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={`/placeholder.svg?height=450&width=800&text=Article+${index + 1}`}
                    alt={`Article ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-500 rounded-full">
                    {["UI/UX", "Branding", "Motion Graphics", "AR/VR", "Design Trends", "Industry Insights"][index % 6]}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full">
                    {`${3 + index} min read`}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                  The Importance of User-Centered Design in Modern Applications
                </h3>
                <p className="text-zinc-400 mb-4">
                  Discover why putting users at the center of the design process leads to more successful digital
                  products.
                </p>
                <Link
                  href={`/insights/article-${index + 1}`}
                  className="inline-flex items-center gap-2 text-purple-500"
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["UI/UX Design", "Branding", "Motion Graphics", "AR/VR", "Design Trends", "Industry Insights"].map(
              (category, index) => (
                <Link
                  key={index}
                  href={`/insights/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="p-4 border border-zinc-800 rounded-lg text-center hover:border-purple-500 hover:bg-purple-500/5 transition-colors"
                >
                  <span className="font-medium">{category}</span>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Subscribe to our newsletter to receive the latest insights, articles, and updates from our team.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md bg-black border border-zinc-700 text-white focus:outline-none focus:border-purple-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

