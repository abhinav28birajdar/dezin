"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const insights = [
  {
    id: 1,
    title: "The Future of UI Design: Trends to Watch in 2025",
    excerpt: "Explore emerging UI design trends that will shape the digital landscape in the coming year.",
    category: "Design Trends",
    date: "April 2, 2025",
    image: "/placeholder.svg?height=400&width=600",
    link: "/insights/ui-design-trends-2025",
  },
  {
    id: 2,
    title: "How AR is Transforming the Retail Experience",
    excerpt: "Discover how augmented reality is revolutionizing the way consumers interact with products and brands.",
    category: "AR/VR",
    date: "March 28, 2025",
    image: "/placeholder.svg?height=400&width=600",
    link: "/insights/ar-retail-experience",
  },
  {
    id: 3,
    title: "The Psychology of Color in Brand Identity",
    excerpt: "Understanding how color choices influence consumer perception and brand recognition.",
    category: "Branding",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=400&width=600",
    link: "/insights/psychology-color-branding",
  },
]

export function InsightsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our latest articles, case studies, and resources to stay ahead in the world of design.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/insights" className="flex items-center">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{insight.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    {insight.date}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={insight.link}>{insight.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{insight.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto pt-2">
                  <Link
                    href={insight.link}
                    className="text-sm font-medium text-primary flex items-center group-hover:underline"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

