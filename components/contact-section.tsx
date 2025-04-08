"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
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
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from "lucide-react"
import emailjs from "@emailjs/browser"

// Define form state interface
interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

// Define field names interface
interface EmailJsFieldNames {
  name: string;
  emailDisplay: string;
  emailReplyTo: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)

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
  const [emailJsInitialized, setEmailJsInitialized] = useState<boolean>(false)

  // Extract environment variables
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  // Debug only in development environment
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log("EmailJS Config Status:", {
        serviceId: emailJsServiceId ? "Loaded" : "Missing",
        templateId: emailJsTemplateId ? "Loaded" : "Missing",
        publicKey: emailJsPublicKey ? "Loaded" : "Missing"
      })
    }
  }, [emailJsServiceId, emailJsTemplateId, emailJsPublicKey])

  // Initialize EmailJS once when component loads
  useEffect(() => {
    if (emailJsPublicKey && !emailJsInitialized) {
      try {
        emailjs.init(emailJsPublicKey)
        setEmailJsInitialized(true)
      } catch (error) {
        console.error("Failed to initialize EmailJS:", error)
        setSubmitError("Email service initialization failed. Please try again later.")
      }
    }
  }, [emailJsPublicKey, emailJsInitialized])

  // Field name mapping for EmailJS template
  const emailJsFieldNames: EmailJsFieldNames = {
    name: "from_name",
    emailDisplay: "from_email",
    emailReplyTo: "reply_to",
    phone: "from_phone",
    company: "from_company",
    service: "service_requested",
    message: "message"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name: inputName, value } = e.target
    let stateKeyToUpdate: keyof FormState | null = null

    if (inputName === emailJsFieldNames.name) stateKeyToUpdate = "name"
    else if (inputName === emailJsFieldNames.emailDisplay) stateKeyToUpdate = "email"
    else if (inputName === emailJsFieldNames.phone) stateKeyToUpdate = "phone"
    else if (inputName === emailJsFieldNames.company) stateKeyToUpdate = "company"
    else if (inputName === emailJsFieldNames.message) stateKeyToUpdate = "message"

    if (stateKeyToUpdate) {
      setFormState((prev) => ({ ...prev, [stateKeyToUpdate as string]: value }))
    }
  }

  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const validateConfig = (): boolean => {
    // Check if all required configuration is available
    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setSubmitError("Email service configuration is incomplete. Please contact support.")
      return false
    }
    
    if (!formRef.current) {
      setSubmitError("Form reference missing. Please refresh and try again.")
      return false
    }
    
    return true
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    // Validate configuration before proceeding
    if (!validateConfig()) {
      setIsSubmitting(false)
      return
    }

    // We've already validated these are not undefined in validateConfig
    const serviceId = emailJsServiceId as string
    const templateId = emailJsTemplateId as string

    emailjs
      .sendForm(serviceId, templateId, formRef.current as HTMLFormElement)
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
        if (formRef.current) {
          formRef.current.reset()
        }
        setTimeout(() => setIsSubmitted(false), 5000)
      })
      .catch((err: Error) => {
        console.error("Failed to send message:", err)
        setIsSubmitting(false)
        setSubmitError("Failed to send message. Please check your connection or try again later.")
      })
  }

  // Check if configuration is available
  const isConfigAvailable = emailJsServiceId && emailJsTemplateId && emailJsPublicKey

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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to elevate your brand? Get in touch with our team to discuss your project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground">hello@Artynex.com</p>
                    <p className="text-muted-foreground">support@Artynex.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri: 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Visit Us</h4>
                    <p className="text-muted-foreground">
                      Artynex
                      <br />
                      Nanded-431602 
                      <br />
                      Maharashtra, India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    aria-label="Follow us on Facebook"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-purple-500 transition-colors"
                  >
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
                  <a
                    href="https://www.instagram.com/artynexdesign/"
                    aria-label="Follow us on Instagram"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-purple-500 transition-colors"
                  >
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
                  <a
                    href="https://www.linkedin.com/in/artynex/"
                    aria-label="Follow us on LinkedIn"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-purple-500 transition-colors"
                  >
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
                  <a
                    href="https://x.com/artynexdesign"
                    aria-label="Follow us on Twitter"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-purple-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    viewBox="0 0 512 512"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                     <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                    </svg>
                  </a>
                   
                  <a
                    href="https://www.behance.net/abhinavv10"
                    aria-label="Follow us on Behance"
                    className="h-10 w-10 flex items-center justify-center rounded-full  bg-zinc-800 hover:bg-purple-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                    >
                      <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/jjQSyMCz"
                    aria-label="Follow us on Discord"
                    className="h-10 w-10 flex items-center justify-center rounded-full  bg-zinc-800 hover:bg-purple-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                     viewBox="0 0 640 512"
                      fill="currentColor"
                    >
                     <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              {!isConfigAvailable && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start mb-6">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700">
                    Email service configuration is incomplete. Please contact support or check your environment variables.
                  </p>
                </div>
              )}

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-700">{submitError}</p>
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
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service-select">Service Interested In</Label>
                    <Select
                      value={formState.service}
                      onValueChange={handleServiceChange}
                      required
                    >
                      <SelectTrigger id="service-select" aria-required="true">
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
                  
                    {/* Hidden input to ensure service value is included in form submission */}
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
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-80 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    disabled={isSubmitting || !isConfigAvailable}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}