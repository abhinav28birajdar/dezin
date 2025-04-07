"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Palette, Layers, Briefcase, Film, Headphones, Glasses, ChevronRight, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "From print to digital, we create stunning visuals that communicate your message effectively.",
    icon: <Palette className="h-10 w-10" />,
    features: ["Brand Identity Design", "Print Collateral", "Digital Assets", "Illustration", "Packaging Design"],
    caseStudy: {
      title: "Revitalizing Eco Brand",
      description: "How we transformed a sustainable product line with cohesive visual identity.",
      imageUrl: "/graphicdesign.jpeg", // Add your image path here
    },
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance usability and create delightful experiences.",
    icon: <Layers className="h-10 w-10" />,
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Usability Testing",
      "Design Systems",
    ],
    caseStudy: {
      title: "Fintech App Redesign",
      description: "Increasing user engagement by 45% through intuitive interface design.",
      imageUrl: "/uiuxdesign.jpeg", // Add your image path here
    },
  },
  {
    id: "branding",
    title: "Branding",
    description: "Comprehensive branding strategies that build recognition and establish emotional connections.",
    icon: <Briefcase className="h-10 w-10" />,
    features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Rebranding", "Brand Messaging"],
    caseStudy: {
      title: "Tech Startup Branding",
      description: "Creating a distinctive identity in a crowded market space.",
      imageUrl: "/Branding.png", // Add your image path here
    },
  },
  {
    id: "motion",
    title: "Motion Graphics",
    description: "Dynamic animations and visual effects that bring your content to life and increase engagement.",
    icon: <Film className="h-10 w-10" />,
    features: ["2D & 3D Animation", "Explainer Videos", "Motion Branding", "Social Media Content", "Video Editing"],
    caseStudy: {
      title: "Product Launch Campaign",
      description: "Driving 2M+ views with compelling animated content.",
      imageUrl: "/motiongraphic.jpeg", // Add your image path here
    },
  },
{
  id: "event",
  title: "Cultural Event Design",
  description: "Curating memorable cultural experiences through creative themes, engaging visuals, and seamless execution.",
  icon: <CalendarDays className="h-10 w-10" />, // Optional: Replace icon to better match event design
  features: [
    "Theme Development",
    "Stage & Venue Design",
    "Visual Identity & Decor",
    "Event Flow & Scheduling",
    "Artist & Performance Coordination"
  ],
  caseStudy: {
    title: "Festive Campus Carnival",
    description: "Designed a vibrant cultural fest with captivating themes, dynamic performances, and cohesive branding.",
    imageUrl: "/eventdesign.jpeg", // Replace with your relevant image path
  }
}

  // {
  //   id: "ar-vr",
  //   title: "AR/VR Design",
  //   description: "Immersive experiences that push boundaries and create memorable interactions with your audience.",
  //   icon: <Glasses className="h-10 w-10" />,
  //   features: ["AR Applications", "VR Experiences", "3D Modeling", "Interactive Installations", "Spatial Design"],
  //   caseStudy: {
  //     title: "Virtual Showroom",
  //     description: "Revolutionizing product demonstrations with immersive VR technology.",
  //     imageUrl: "/images/case-studies/ar-vr-case.jpg", // Add your image path here
  //   },
  // },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("graphic-design")

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of design services to help your brand stand out in the digital landscape.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Center the tabs with flex layout and justify-center */}
          <div className="flex justify-center mb-12">
            <TabsList className="inline-flex bg-muted/80 rounded-lg p-1">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-2 rounded-lg bg-primary/10 text-primary">{service.icon}</div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <Link href={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Case Study</CardTitle>
                      <CardDescription>Featured work</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden relative">
                        {service.caseStudy.imageUrl ? (
                          <Image 
                            src={service.caseStudy.imageUrl} 
                            alt={`${service.title} case study`} 
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                            {service.icon}
                          </div>
                        )}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{service.caseStudy.title}</h4>
                      <p className="text-muted-foreground">{service.caseStudy.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/case-studies">View Case Study</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}