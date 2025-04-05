"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  // State uses simple names for easier handling within React
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "", // Holds the value for the Select component state
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // --- Environment Variables ---
  const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  // --- Field Names mapping to EmailJS Template Variables ---
  // --- !! IMPORTANT: These MUST match your HTML template {{variables}} !! ---
  const emailJsFieldNames = {
    name: "from_name",          // Corresponds to {{from_name}}
    emailDisplay: "from_email", // Corresponds to {{from_email}} in the body
    emailReplyTo: "reply_to",   // Standard EmailJS field for Reply-To header
    phone: "from_phone",        // Corresponds to {{from_phone}}
    company: "from_company",      // Corresponds to {{from_company}}
    service: "service_requested", // Corresponds to {{service_requested}}
    message: "message"            // Corresponds to {{message}}
  };
  // --- !! IMPORTANT !! ---


  useEffect(() => {
    // Initialize EmailJS
    if (emailJsPublicKey) {
      emailjs.init(emailJsPublicKey);
    } else {
      console.warn("EmailJS Public Key is missing (NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).");
    }
    // Warn if other keys are missing
    if (!emailJsServiceId) console.warn("EmailJS Service ID is missing (NEXT_PUBLIC_EMAILJS_SERVICE_ID).");
    if (!emailJsTemplateId) console.warn("EmailJS Template ID is missing (NEXT_PUBLIC_EMAILJS_TEMPLATE_ID).");

  }, [emailJsPublicKey, emailJsServiceId, emailJsTemplateId]);

  // Handles changes for Input and Textarea
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name: inputName, value } = e.target; // inputName is "from_name", "from_email", etc.

    // Find the corresponding state key ('name', 'email', 'phone', 'company', 'message')
    let stateKeyToUpdate: keyof typeof formState | null = null;
    if (inputName === emailJsFieldNames.name) stateKeyToUpdate = 'name';
    else if (inputName === emailJsFieldNames.emailDisplay) stateKeyToUpdate = 'email'; // Update 'email' state from 'from_email' input
    else if (inputName === emailJsFieldNames.phone) stateKeyToUpdate = 'phone';
    else if (inputName === emailJsFieldNames.company) stateKeyToUpdate = 'company';
    else if (inputName === emailJsFieldNames.message) stateKeyToUpdate = 'message';

    if (stateKeyToUpdate) {
      setFormState((prev) => ({ ...prev, [stateKeyToUpdate]: value }));
    } else {
       console.warn(`handleChange received an unmapped input name: ${inputName}`);
    }
  };

  // Handles change for the Select component
  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value })); // Update the 'service' state
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setSubmitError("Email service configuration is incomplete. Please contact support.");
      setIsSubmitting(false);
      console.error("Missing EmailJS environment variables.");
      return;
    }
    if (!formRef.current) {
      setSubmitError("An unexpected error occurred (form ref). Please try again.");
      setIsSubmitting(false);
      console.error("Form reference is not available.");
      return;
    }

    // Send the form using emailjs.sendForm
    emailjs.sendForm(emailJsServiceId, emailJsTemplateId, formRef.current)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form state
        setFormState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
        // Reset the actual form elements (including hidden inputs and select placeholder)
        formRef.current?.reset();

        setTimeout(() => setIsSubmitted(false), 5000); // Hide success message
      })
      .catch((err: Error) => {
        console.error('FAILED...', err);
        setIsSubmitting(false);
        // Provide a more user-friendly error based on potential issues
        if (err.message?.includes('service_id')) {
             setSubmitError('Email service configuration error. Please contact support.');
        } else if (err.message?.includes('template_id')) {
             setSubmitError('Email template configuration error. Please contact support.');
        } else if (err.message?.includes('user_id')) {
             setSubmitError('Email public key configuration error. Please contact support.');
        }
         else {
             setSubmitError('Failed to send message. Please check your connection or try again later.');
        }
      });
  };

  const canSubmit = emailJsPublicKey && emailJsServiceId && emailJsTemplateId;

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Create Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to elevate your brand? Get in touch with our team to discuss your project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info Column (Assumed unchanged) */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
          >
             <div className="bg-card rounded-lg p-8 shadow-sm">
                {/* ... (Keep your contact info details here) ... */}
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                 {/* ... Mail, Phone, MapPin, Social Icons ... */}
             </div>
          </motion.div>

          {/* Contact Form Column */}
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
                  <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                // The ref is attached to the form element itself
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-red-600">{submitError}</p>
                    </div>
                  )}

                  {/* --- Hidden input for Reply-To Header --- */}
                  <input type="hidden" name={emailJsFieldNames.emailReplyTo} value={formState.email} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="from_name">Full Name</Label>
                      <Input
                        id="from_name" // id can be different from name
                        name={emailJsFieldNames.name} // MUST match template {{from_name}}
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="from_email">Email Address</Label>
                      <Input
                        id="from_email"
                        name={emailJsFieldNames.emailDisplay} // MUST match template {{from_email}}
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="from_phone">Phone Number (Optional)</Label>
                      <Input
                        id="from_phone"
                        name={emailJsFieldNames.phone} // MUST match template {{from_phone}}
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="from_company">Company (Optional)</Label>
                      <Input
                        id="from_company"
                        name={emailJsFieldNames.company} // MUST match template {{from_company}}
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select
                      // Select's value is controlled by React state
                      value={formState.service}
                      // onValueChange updates the React state
                      onValueChange={handleServiceChange}
                    >
                      <SelectTrigger id="service">
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
                    {/* --- FIX FOR SELECT: Add Hidden Input for submission --- */}
                    <input
                      type="hidden"
                      name={emailJsFieldNames.service} // MUST match template {{service_requested}}
                      value={formState.service} // Takes value from React state
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name={emailJsFieldNames.message} // MUST match template {{message}}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      aria-required="true"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold disabled:opacity-60"
                    disabled={isSubmitting || !canSubmit} // Disable if submitting or config missing
                    aria-live="polite"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"> <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  {!canSubmit && (
                    <p className="text-xs text-red-500 text-center mt-2">
                        Email sending is disabled due to missing configuration.
                    </p>
                   )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}