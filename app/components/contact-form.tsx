"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setMessage("")
    setIsSuccess(null)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
      setIsSuccess(true)
      // Reset form on success
      if (response.message.toLowerCase().includes("success")) {
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
    <Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
      <form action={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span className="text-destructive">*</span>
          </label>
          <Input 
            id="name" 
            name="name" 
            required 
            placeholder="Your full name"
            className="transition-all focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-destructive">*</span>
          </label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            required 
            placeholder="your@email.com"
            className="transition-all focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message <span className="text-destructive">*</span>
          </label>
          <Textarea 
            id="message" 
            name="message" 
            required 
            placeholder="Tell me about your project or opportunity..."
            className="min-h-[120px] transition-all focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all" 
          disabled={pending}
          size="lg"
        >
          {pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
        
        {message && (
          <div className={`flex items-center gap-2 p-4 rounded-lg border ${
            isSuccess 
              ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200" 
              : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
          } animate-fade-in`}>
            {isSuccess ? (
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}
      </form>
    </Card>
  )
}
