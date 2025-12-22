import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react"
import { useState } from "react"
import Footer from "@/components/home/Footer"
import { SectionHeader } from "@/components/ui/SectionHeader"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [statusMessage, setStatusMessage] = useState("")
    const [isError, setIsError] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatusMessage("")

        if (!name || !email || !message) {
            setStatusMessage("Please fill in all fields.")
            setIsError(true)
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch("/contact.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            })

            const result = await response.json()

            if (response.ok) {
                setStatusMessage(result.message || "Thank you for your message! We'll get back to you soon.")
                setIsError(false)
                setName("")
                setEmail("")
                setMessage("")
            } else {
                throw new Error(result.message || "Something went wrong. Please try again later.")
            }
        } catch (error) {
            setStatusMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.")
            setIsError(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen">
            {/* Minimal Background Hero */}
            <section className="relative px-4 py-24 md:py-32 bg-muted/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mx-auto max-w-3xl text-center reveal">
                        <h1 className="mb-6 text-5xl font-black tracking-tight text-foreground md:text-7xl">
                            Let&apos;s <span className="text-primary italic">Connect</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-bold leading-relaxed">
                            Have a project in mind? Our team is ready to help you scale your technology vision.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-24 md:py-32 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid gap-16 lg:grid-cols-5">
                        {/* Contact Form */}
                        <div className="lg:col-span-3 reveal">
                            <Card className="border-border/50 shadow-2xl overflow-hidden glass-card">
                                <CardHeader className="bg-primary/5 p-8 border-b border-border/50">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <MessageSquare className="h-5 w-5 text-primary" />
                                        </div>
                                        <CardTitle className="text-2xl">Send a Message</CardTitle>
                                    </div>
                                    <CardDescription className="text-base font-medium text-foreground/70">We typically respond within 12 hours.</CardDescription>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-black uppercase tracking-wider text-muted-foreground">
                                                    Your Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    placeholder="John Doe"
                                                    className="h-12 bg-background border-border/80 focus:border-primary"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-black uppercase tracking-wider text-muted-foreground">
                                                    Email Address
                                                </label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="h-12 bg-background border-border/80 focus:border-primary"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-black uppercase tracking-wider text-muted-foreground">
                                                How can we help?
                                            </label>
                                            <Textarea
                                                id="message"
                                                placeholder="Briefly describe your project or technical challenge..."
                                                rows={6}
                                                className="bg-background border-border/80 focus:border-primary resize-none py-4"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required
                                            />
                                        </div>

                                        {statusMessage && (
                                            <div
                                                className={`p-4 rounded-xl text-sm font-bold animate-in fade-in zoom-in duration-300 ${isError
                                                    ? "bg-red-500/10 text-red-600 border border-red-200"
                                                    : "bg-green-500/10 text-green-600 border border-green-200"
                                                    }`}
                                            >
                                                {statusMessage}
                                            </div>
                                        )}

                                        <Button type="submit" className="w-full h-14 text-lg font-bold rounded-xl shadow-xl" disabled={isSubmitting}>
                                            {isSubmitting ? "Sending Request..." : "Send Request"}
                                            {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="reveal space-y-8">
                                <SectionHeader
                                    title="Contact Us"
                                    align="left"
                                    description="Available for global consulting and dedicated development cycles."
                                />

                                <div className="space-y-8">
                                    <div className="flex gap-6 group">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg group-hover:scale-110 transition-transform">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Email</h3>
                                            <p className="text-muted-foreground font-bold select-all">info@sanaka.co.in</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 group">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white shadow-lg group-hover:scale-110 transition-transform">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Phone</h3>
                                            <div className="space-y-1">
                                                <p className="text-muted-foreground font-bold select-all">
                                                    <span className="text-xs uppercase opacity-70 block">India</span>
                                                    +91-9398813085
                                                </p>
                                                <p className="text-muted-foreground font-bold select-all">
                                                    <span className="text-xs uppercase opacity-70 block">USA</span>
                                                    +1 (804) 658-6696
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 group">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg group-hover:scale-110 transition-transform">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Address</h3>
                                            <p className="text-muted-foreground font-bold leading-relaxed">
                                                4-478, Nowluru, Mangalagiri,<br />
                                                AP. Pin 522503
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 group">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg group-hover:scale-110 transition-transform opacity-80">
                                            <Clock className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Response Time</h3>
                                            <p className="text-muted-foreground font-bold">12-24 hours Mon-Fri</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
