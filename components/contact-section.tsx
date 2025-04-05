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
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"

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
      .then((response: EmailJSResponseStatus) => {
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground">You can reach out to us anytime via email or phone.</p>
            </div>
          </motion.div>

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
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <p className="text-red-600">{submitError}</p>
                    </div>
                  )}

                  <input
                    type="hidden"
                    name={emailJsFieldNames.emailReplyTo}
                    value={formState.email}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="from_name">Full Name</Label>
                      <Input
                        id="from_name"
                        name={emailJsFieldNames.name}
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="from_email">Email Address</Label>
                      <Input
                        id="from_email"
                        name={emailJsFieldNames.emailDisplay}
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="from_phone">Phone Number</Label>
                      <Input
                        id="from_phone"
                        name={emailJsFieldNames.phone}
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="from_company">Company</Label>
                      <Input
                        id="from_company"
                        name={emailJsFieldNames.company}
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Service</Label>
                    <Select onValueChange={handleServiceChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="web_design">Web Design</SelectItem>
                        <SelectItem value="ui_ux">UI/UX Design</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      name={emailJsFieldNames.service}
                      value={formState.service}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name={emailJsFieldNames.message}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
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
