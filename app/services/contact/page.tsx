'use client'
import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import emailjs from "@emailjs/browser"

// Define types for form state
interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

// Define types for EmailJS field mappings
interface EmailJsFieldNames {
  name: string;
  emailDisplay: string;
  emailReplyTo: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null)

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

  const emailJsFieldNames: EmailJsFieldNames = {
    name: "from_name",
    emailDisplay: "from_email",
    emailReplyTo: "reply_to",
    phone: "from_phone",
    company: "from_company",
    service: "service_requested",
    message: "message"
  }

  useEffect(() => {
    if (emailJsPublicKey) {
      emailjs.init(emailJsPublicKey)
    }
  }, [emailJsPublicKey])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name: inputName, value } = e.target
    let stateKeyToUpdate: keyof FormState | null = null

    if (inputName === emailJsFieldNames.name) stateKeyToUpdate = "name"
    else if (inputName === emailJsFieldNames.emailDisplay) stateKeyToUpdate = "email"
    else if (inputName === emailJsFieldNames.phone) stateKeyToUpdate = "phone"
    else if (inputName === emailJsFieldNames.company) stateKeyToUpdate = "company"
    else if (inputName === emailJsFieldNames.message) stateKeyToUpdate = "message"

    if (stateKeyToUpdate) {
      setFormState((prev) => ({ ...prev, [stateKeyToUpdate]: value }))
    }
  }

  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setSubmitError("Email service configuration is incomplete. Please contact support.")
      setIsSubmitting(false)
      return
    }

    if (!formRef.current) {
      setSubmitError("Form reference missing. Please refresh and try again.")
      setIsSubmitting(false)
      return
    }

    emailjs
      .sendForm(emailJsServiceId, emailJsTemplateId, formRef.current)
      .then(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        })
        formRef.current?.reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      })
      .catch((err) => {
        console.error("FAILED...", err)
        setIsSubmitting(false)
        setSubmitError("Failed to send message. Please check your connection or try again later.")
      })
  }

  return (
    <div>
        <Link href="/">
        <div>
          <PageHeader />
        </div>
      </Link>
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Get in</span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Have a project in mind? We&apos;d love to hear about it. Get in touch with us to discuss how we can help bring
              your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-zinc-400 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible. We&apos;re looking forward to learning
                more about your project.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-zinc-400">
                      Artynex
                      <br />
                      Nanded-431602 
                      <br />
                      Maharashtra, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-zinc-400">hello@Artynex.com</p>
                    <p className="text-zinc-400">support@Artynex.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                    <p className="text-zinc-400">Mon-Fri: 9am - 6pm EST</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-purple-500 hover:text-white transition-colors" aria-label="Follow us on Facebook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/artynexdesign/" className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-purple-500 hover:text-white transition-colors" aria-label="Follow us on Instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/artynex/" className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-purple-500 hover:text-white transition-colors" aria-label="Follow us on LinkedIn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://x.com/artynexdesign" className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-purple-500 hover:text-white transition-colors" aria-label="Follow us on Twitter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-black border border-zinc-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-zinc-400">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="p-4 bg-red-900/30 border border-red-700 rounded-md flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-red-400">{submitError}</p>
                      </div>
                    )}

                    {/* Hidden field for reply-to */}
                    <input
                      type="hidden"
                      name={emailJsFieldNames.emailReplyTo}
                      value={formState.email}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor={emailJsFieldNames.name}>Full Name</Label>
                        <Input
                          id={emailJsFieldNames.name}
                          name={emailJsFieldNames.name}
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          aria-required="true"
                          className="w-full px-4 py-3 rounded-md bg-black border border-zinc-700 text-white focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={emailJsFieldNames.emailDisplay}>Email Address</Label>
                        <Input
                          id={emailJsFieldNames.emailDisplay}
                          name={emailJsFieldNames.emailDisplay}
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          aria-required="true"
                          className="w-full px-4 py-3 rounded-md bg-black border border-zinc-700 text-white focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={emailJsFieldNames.phone}>Phone Number</Label>
                        <Input
                          id={emailJsFieldNames.phone}
                          name={emailJsFieldNames.phone}
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 rounded-md bg-black border border-zinc-700 text-white focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={emailJsFieldNames.company}>Company</Label>
                        <Input
                          id={emailJsFieldNames.company}
                          name={emailJsFieldNames.company}
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Your Company Name"
                          className="w-full px-4 py-3 rounded-md bg-black border border-zinc-700 text-white focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service-select">Service Interested In</Label>
                      <Select
                        name={emailJsFieldNames.service}
                        value={formState.service}
                        onValueChange={handleServiceChange}
                        required
                      >
                        <SelectTrigger 
                          id="service-select" 
                          aria-required="true"
                          className="w-full px-4 py-3 rounded-md bg-black border border-zinc-700 text-white focus:outline-none focus:border-purple-500"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="graphic-design">Graphic Design</SelectItem>
                          <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          <SelectItem value="motion">Motion Graphics</SelectItem>
                          <SelectItem value="ar-vr">AR/VR Design</SelectItem>
                          <SelectItem value="sound">Sound Design</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    
                      <input type="hidden" name={emailJsFieldNames.service} value={formState.service} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={emailJsFieldNames.message}>Message</Label>
                      <Textarea
                        id={emailJsFieldNames.message}
                        name={emailJsFieldNames.message}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your project..."
                        rows={5}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-md bg-black border border-zinc-700 text-white focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center"> 
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5" 
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is your design process?",
                answer:
                  "Our design process typically includes discovery, concept development, design, refinement, and delivery. We tailor this process to meet the specific needs of each project and client.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple branding project might take 2-4 weeks, while a comprehensive website or app design could take 2-3 months.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we offer various support packages to ensure your design continues to meet your needs after launch. We can discuss these options based on your specific requirements.",
              },
              {
                question: "What information do you need to provide a quote?",
                answer:
                  "To provide an accurate quote, we typically need to understand your project goals, scope, timeline, and any specific requirements. A brief initial consultation helps us gather this information.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 border border-zinc-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let&apos;s create something amazing together that exceeds your expectations and achieves your goals.
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
  )
}