import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader />

      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Blog</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">Latest articles and design trends from our team of experts.</p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Post</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video w-full">
              <Image
                src="/assets/images/featured-blog.jpg"
                alt="Featured Blog Post"
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
                  6 min read
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">10 UI Design Trends That Will Dominate in 2025</h3>
              <p className="text-zinc-400 mb-6">
                Discover the cutting-edge UI design trends that are set to transform digital experiences in the coming
                year.
              </p>
              <Link href="/blog/ui-design-trends-2025" className="inline-flex items-center gap-2 text-purple-500">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="group">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={`/assets/images/blog-${index + 1}.jpg`}
                    alt={`Blog Post ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-500 rounded-full">
                    {["UI/UX", "Branding", "Typography", "Color Theory", "Design Systems", "Accessibility"][index % 6]}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full">
                    {`${3 + index} min read`}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                  {
                    [
                      "The Psychology of Color in UI Design",
                      "Typography Trends for Digital Products",
                      "Creating Accessible Designs for Everyone",
                      "How to Build a Scalable Design System",
                      "Micro-interactions That Enhance User Experience",
                      "Designing for Dark Mode: Best Practices",
                    ][index % 6]
                  }
                </h3>
                <p className="text-zinc-400 mb-4">
                  {
                    [
                      "Learn how color choices affect user perception and behavior in digital interfaces.",
                      "Explore the latest typography trends that enhance readability and brand identity.",
                      "Discover techniques to make your designs accessible to users of all abilities.",
                      "A comprehensive guide to building design systems that scale with your product.",
                      "Small details that make a big difference in how users interact with your product.",
                      "Essential tips for creating effective and beautiful dark mode experiences.",
                    ][index % 6]
                  }
                </p>
                <Link href={`/blog/post-${index + 1}`} className="inline-flex items-center gap-2 text-purple-500">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog/archive"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-md font-medium hover:bg-zinc-700 transition-colors"
            >
              View All Posts <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["UI/UX Design", "Typography", "Color Theory", "Accessibility", "Design Systems", "Case Studies"].map(
              (category, index) => (
                <Link
                  key={index}
                  href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
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
            Subscribe to our newsletter to receive the latest articles, design tips, and industry insights.
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
