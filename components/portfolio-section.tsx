"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Eco Brand Identity",
    category: "Branding",
    tags: ["Logo Design", "Packaging", "Brand Guidelines"],
    image: "/ecofriend.jpeg?height=600&width=800",
    link: "/portfolio/eco-brand-identity",
  },
  {
    id: 2,
    title: "Finance App UX Design",
    category: "UI/UX",
    tags: ["Mobile App", "User Research", "Prototyping"],
    image: "/mobileuiux.jpeg?height=600&width=800",
    link: "https://www.figma.com/design/LLUfJ30unjRPO7L4ML9GXt/women-safety?node-id=0-1&t=8UPITAt8sxl6eASW-1",
  },
  {
    id: 3,
    title: "Product Launch Campaign",
    category: "Motion",
    tags: ["Animation", "Social Media", "Video"],
    image: "/motion graphic.jpeg?height=600&width=800",
    link: "/portfolio/product-launch",
  },
  {
    id: 4,
    title: "Virtual Reality Experience",
    category: "AR/VR",
    tags: ["VR", "3D Modeling", "Interactive"],
    image: "/Virtual Reality.jpeg?height=600&width=800",
    link: "/portfolio/vr-experience",
  },
  {
    id: 5,
    title: "Corporate Identity System",
    category: "Branding",
    tags: ["Logo", "Stationery", "Guidelines"],
    image: "/Corporate.jpeg?height=600&width=800",
    link: "/portfolio/corporate-identity",
  },
  {
    id: 6,
    title: "E-commerce Website Redesign",
    category: "UI/UX",
    tags: ["Web Design", "UX Research", "Conversion"],
    image: "/E-commerce Website.jpeg?height=600&width=800",
    link: "/portfolio/ecommerce-redesign",
  },
]

// Filter categories
const categories = ["All", "Branding", "UI/UX", "Motion", "AR/VR", "Graphic Design", "Sound"]

export function PortfolioSection() {
  const [filter, setFilter] = useState("All")

  const filteredItems = filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse collection of projects showcasing our expertise across various design disciplines.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild variant="secondary">
                      <Link href={item.link}>View Project</Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <Badge>{item.category}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={item.link}
                    className="text-sm font-medium text-primary flex items-center group-hover:underline"
                  >
                    View Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

