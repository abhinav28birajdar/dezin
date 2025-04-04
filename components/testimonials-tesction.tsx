"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "EcoTech Solutions",
    avatar: "/placeholder.svg?height=100&width=100", // Replace with actual path or remove if not used
    logo: "/placeholder-logo.svg", // Replace with actual path or remove if not used
    content:
      "Working with AgraphicArt transformed our brand identity. Their team understood our vision perfectly and delivered beyond our expectations. The new design system has significantly improved our brand recognition.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "FinanceApp",
    avatar: "/placeholder.svg?height=100&width=100", // Replace with actual path
    logo: "/placeholder-logo.svg", // Replace with actual path
    content:
      "The UI/UX redesign of our app resulted in a 45% increase in user engagement. AgraphicArt's approach to user-centered design and their attention to detail made all the difference.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "CEO",
    company: "Creative Studios",
    avatar: "/placeholder.svg?height=100&width=100", // Replace with actual path
    logo: "/placeholder-logo.svg", // Replace with actual path
    content:
      "The motion graphics campaign created by AgraphicArt helped us launch our product with a bang. The animations were stunning and perfectly captured the essence of our brand.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Brand Manager",
    company: "Retail Innovations",
    avatar: "/placeholder.svg?height=100&width=100", // Replace with actual path
    logo: "/placeholder-logo.svg", // Replace with actual path
    content:
      "AgraphicArt's branding work helped us stand out in a crowded market. Their strategic approach to visual identity has been instrumental in our recent growth.",
    rating: 4,
  },
  {
    id: 5,
    name: "Jessica Taylor",
    role: "Creative Director",
    company: "Media Group",
    avatar: "/placeholder.svg?height=100&width=100", // Replace with actual path
    logo: "/placeholder-logo.svg", // Replace with actual path
    content:
      "The AR experience designed by AgraphicArt for our exhibition was nothing short of revolutionary. Our visitors were amazed, and it generated significant press coverage.",
    rating: 5,
  },
]

const clientLogos = [
  "/placeholder-logo.svg", // Replace with actual path
  "/placeholder-logo.svg", // Replace with actual path
  "/placeholder-logo.svg", // Replace with actual path
  "/placeholder-logo.svg", // Replace with actual path
  "/placeholder-logo.svg", // Replace with actual path
  "/placeholder-logo.svg", // Replace with actual path
]

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const handleSelect = () => {
      setCurrent(api?.selectedScrollSnap() ?? 0)
    }

    api.on("select", handleSelect)

    return () => {
      api?.off("select", handleSelect)
    }
  }, [api])

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Client Testimonials</h2>
          {/* FIXED Line 120 - Escaped single quotes */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full"> {/* Added h-full */}
                  <Card className="h-full flex flex-col"> {/* Added h-full and flex flex-col */}
                    <CardContent className="pt-6 flex-grow"> {/* Added flex-grow */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      {/* FIXED Line 149 - Escaped double quotes */}
                      <p className="text-muted-foreground mb-6">&quot;{testimonial.content}&quot;</p>
                    </CardContent>
                    <CardFooter className="flex items-center border-t pt-4 mt-auto"> {/* Added mt-auto */}
                      <Avatar className="h-10 w-10 mr-4">
                         {/* Use a real image or ensure placeholder renders */}
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                      <div className="ml-auto flex-shrink-0"> {/* Added flex-shrink-0 */}
                        {/* Use a real image or ensure placeholder renders */}
                        <Image
                          src={testimonial.logo || "/placeholder.svg"} // Provide a default/fallback
                          alt={`${testimonial.company} logo`} // More descriptive alt text
                          width={60}
                          height={30}
                          className="opacity-70 object-contain" // Added object-contain
                        />
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center items-center mt-8">
             <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <div className="flex space-x-1 mx-4">
              {api?.scrollSnapList().map((_, index) => (
                 <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                      current === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`} // Accessibility
                 />
              ))}
            </div>
             <CarouselNext className="relative static translate-y-0 ml-2" />
          </div>
        </Carousel>

        <div className="mt-24">
          <h3 className="text-center text-xl font-semibold mb-10">Trusted by Leading Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                {/* Use a real image or ensure placeholder renders */}
                <Image
                  src={logo || "/placeholder.svg"} // Provide a default/fallback
                  alt={`Client Logo ${index + 1}`} // More descriptive alt text
                  width={120}
                  height={40} // Adjusted height for better aspect ratio potentially
                  className="h-10 w-auto object-contain" // Adjusted height class, added object-contain
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}