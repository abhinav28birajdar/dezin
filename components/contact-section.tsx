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
// Added Mail, Phone, MapPin to imports
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

  const emailJsFieldNames = {
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
    let stateKeyToUpdate: keyof typeof formState | null = null

    if (inputName === emailJsFieldNames.name) stateKeyToUpdate = "name"
    else if (inputName === emailJsFieldNames.emailDisplay) stateKeyToUpdate = "email"
    else if (inputName === emailJsFieldNames.phone) stateKeyToUpdate = "phone"
    else if (inputName === emailJsFieldNames.company) stateKeyToUpdate = "company"
    else if (inputName === emailJsFieldNames.message) stateKeyToUpdate = "message"

    if (stateKeyToUpdate) {
      setFormState((prev) => ({ ...prev, [stateKeyToUpdate!]: value }))
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
      .then(() => { // Removed the unused 'response' parameter
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
        formRef.current?.reset() // Reset the form fields visually
        // Optionally reset the Select component's visual state if needed,
        // though resetting formState should handle the underlying value.
        setTimeout(() => setIsSubmitted(false), 5000)
      })
      .catch((err: Error) => {
        console.error("FAILED...", err)
        setIsSubmitting(false)
        setSubmitError("Failed to send message. Please check your connection or try again later.")
      })
  }

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
          {/* --- Start: Integrated Contact Information Section --- */}
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
                  <Mail className="h-6 w-6 mr-4 text-primary flex-shrink-0 mt-1" /> {/* Added flex-shrink-0 and mt-1 for alignment */}
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground">hello@agraphicart.com</p>
                    <p className="text-muted-foreground">support@agraphicart.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-primary flex-shrink-0 mt-1" /> {/* Added flex-shrink-0 and mt-1 for alignment */}
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri: 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-primary flex-shrink-0 mt-1" /> {/* Added flex-shrink-0 and mt-1 for alignment */}
                  <div>
                    <h4 className="font-medium">Visit Us</h4>
                    <p className="text-muted-foreground">
                      Agraphicart
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
                    href="#" // Replace with actual social media links
                    aria-label="Follow us on Facebook" // Added aria-label for accessibility
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
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
                    href="#" // Replace with actual social media links
                    aria-label="Follow us on Instagram" // Added aria-label for accessibility
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
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
                    href="#" // Replace with actual social media links
                    aria-label="Follow us on LinkedIn" // Added aria-label for accessibility
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
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
                    href="#" // Replace with actual social media links
                    aria-label="Follow us on Twitter" // Added aria-label for accessibility
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
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
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* --- End: Integrated Contact Information Section --- */}


          {/* --- Start: Form Section (mostly unchanged) --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

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
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                      <p className="text-sm text-red-700">{submitError}</p> {/* Adjusted text size/color */}
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
                      {/* Label points to Input ID */}
                      <Label htmlFor={emailJsFieldNames.name}>Full Name</Label>
                      <Input
                        id={emailJsFieldNames.name} // Use field name for ID for consistency
                        name={emailJsFieldNames.name}
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        aria-required="true" // Accessibility
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
                        type="tel" // Use type="tel" for phone numbers
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
                    {/* Changed Label to target the SelectTrigger */}
                    <Label htmlFor="service-select">Service Interested In</Label>
                    {/* Assign an ID to SelectTrigger for the Label */}
                    <Select
                      name={emailJsFieldNames.service} // Add name attribute directly to Select for form submission
                      value={formState.service} // Control the value
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
                     {/* Keep the hidden input for emailjs if Select doesn't submit directly */}
                     {/* It might be redundant if emailjs picks up the Select's name attribute */}
                     {/* Test to confirm if this hidden input is still needed */}
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

                  {/* Submit Button Styling from first example */}
                  <Button
                    type="submit"
                    className="w-60 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" // Added text-white for contrast
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center"> {/* Added justify-center */}
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5" // Removed text-white as parent has it
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
                      <span className="flex items-center justify-center"> {/* Added justify-center */}
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
          {/* --- End: Form Section --- */}
        </div>
      </div>
    </section>
  )
}