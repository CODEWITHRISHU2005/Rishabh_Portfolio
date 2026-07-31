"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"
import { Loader2, CheckCircle2, AlertCircle, Mail, MapPin, Phone, Copy, Check, Github, Linkedin, Twitter, Code2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
  const [copied, setCopied] = useState(false)

  const emailAddress = "rg2822045@gmail.com"
  const phoneNumber = "(+91) 9545142000"
  const locationText = "Dehradun, Uttarakhand, India"

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setMessage("")
    setIsSuccess(null)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
      setIsSuccess(true)
      if (response.message.toLowerCase().includes("success") || response.message.toLowerCase().includes("thanks")) {
        const form = document.querySelector("form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
      setIsSuccess(false)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-12 max-w-5xl mx-auto items-stretch">
      {/* Left Column: Contact Cards */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 flex flex-col gap-4 justify-between h-full"
      >
        <div className="space-y-4">
          {/* Card 1: Email Info */}
          <div className="p-6 rounded-2xl border border-border/80 bg-card/30 backdrop-blur-md relative group overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-25 transition-opacity duration-300">
              <Mail className="w-24 h-24 text-primary" />
            </div>
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Email Me</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 relative z-10 leading-relaxed">
              For job opportunities, code collaboration, or just a quick chat, shoot me an email!
            </p>
            <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-background/50 border border-border/60 relative z-10">
              <span className="text-sm font-medium truncate select-all">{emailAddress}</span>
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                onClick={handleCopyEmail}
                className="h-8 w-8 hover:bg-muted"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                )}
              </Button>
            </div>
          </div>

          {/* Card 2: Location & Phone */}
          <div className="p-6 rounded-2xl border border-border/80 bg-card/30 backdrop-blur-md relative group overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-25 transition-opacity duration-300">
              <MapPin className="w-24 h-24 text-primary" />
            </div>
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Location & Phone</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground relative z-10 mb-4">
              <p className="flex items-center gap-2 font-medium text-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                {locationText}
              </p>
              <p className="flex items-center gap-2 font-medium text-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                {phoneNumber}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground relative z-10">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span>Available for Backend Roles & Work</span>
            </div>
          </div>
        </div>

        {/* Dynamic Connect Social Icons */}
        <div className="p-6 rounded-2xl border border-border/80 bg-card/20 backdrop-blur-sm">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Connect elsewhere</h4>
          <div className="grid grid-cols-5 gap-2">
            {[
              { icon: Github, link: "https://github.com/CODEWITHRISHU2005", label: "GitHub", hoverColor: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black" },
              { icon: Linkedin, link: "https://t.co/Ld90L73IGS", label: "LinkedIn", hoverColor: "hover:bg-blue-600 hover:text-white" },
              { icon: Twitter, link: "https://x.com/Rishabh210305", label: "Twitter", hoverColor: "hover:bg-blue-400 hover:text-white" },
              { icon: Mail, link: `mailto:${emailAddress}`, label: "Email", hoverColor: "hover:bg-red-500 hover:text-white" },
              { icon: Code2, link: "https://leetcode.com/u/9DXfajaRfK/", label: "LeetCode", hoverColor: "hover:bg-orange-500 hover:text-white" },
            ].map((soc) => (
              <a 
                key={soc.label}
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border border-border/60 bg-background/30 transition-all duration-300 hover:scale-110 hover:shadow-md ${soc.hoverColor}`}
                aria-label={`Visit my ${soc.label}`}
              >
                <soc.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Column: Form Card */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7"
      >
        <Card className="p-6 md:p-8 border-border/85 bg-card/45 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
          <form action={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground/90">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your full name"
                  className="bg-background/40 transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none h-11 border-border/70"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground/90">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="your@email.com"
                  className="bg-background/40 transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none h-11 border-border/70"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground/90">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Tell me about your project or job opportunity..."
                  className="min-h-[140px] bg-background/40 transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none border-border/70 p-3"
                />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.01] transition-all h-11 text-sm font-semibold" 
                disabled={pending}
              >
                {pending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
              
              {message && (
                <div className={`flex items-center gap-3 p-4 rounded-xl border ${
                  isSuccess 
                    ? "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-300" 
                    : "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-300"
                } animate-fade-in`}>
                  {isSuccess ? (
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                  )}
                  <p className="text-sm font-semibold leading-relaxed">{message}</p>
                </div>
              )}
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}
