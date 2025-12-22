import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Compass, Network, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "@/components/home/Footer"
import { SectionHeader } from "@/components/ui/SectionHeader"

const consultingServices = [
    {
        title: "Technology Consulting",
        description: "Choose the right tools and platforms for your business",
        details: "We help you understand which technologies fit your needs best. From cloud platforms to development frameworks, we provide clear recommendations based on your budget, team, and business goals.",
        icon: Lightbulb,
    },
    {
        title: "Product Strategy",
        description: "Plan your product roadmap with confidence",
        details: "We work with you to define what features matter most and how to build them efficiently. Our strategy sessions help you prioritize development work and launch products that customers actually want.",
        icon: Compass,
    },
    {
        title: "System Architecture",
        description: "Design systems that scale and perform well",
        details: "We design the foundation of your software to handle growth. Our architecture plans ensure your systems are secure, fast, and easy to maintain as your business expands.",
        icon: Network,
    }
]

const steps = [
    {
        number: "01",
        title: "Listen & Understand",
        description: "We start by listening to your challenges and goals. No jargon, just a clear conversation about what you need and where you want to go."
    },
    {
        number: "02",
        title: "Analyze & Plan",
        description: "Our team reviews your current situation and creates a practical plan. We explain our recommendations in simple terms and show you the best path forward."
    },
    {
        number: "03",
        title: "Guide & Support",
        description: "We stay with you through implementation, answering questions and making adjustments as needed. Your success is our priority."
    }
]

export default function Consulting() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 py-32 md:py-48 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)]" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mx-auto max-w-3xl text-center reveal">
                        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl leading-[1.1]">
                            Consulting <span className="text-blue-400 italic">Success</span>
                        </h1>
                        <p className="mb-10 text-xl text-slate-300 font-medium leading-relaxed">
                            We help businesses make smart technology decisions. Our experts guide you through challenges and create solutions that work for your goals.
                        </p>
                        <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full">
                            <Link to="/contact">Book a Strategy Session</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-4 py-24 md:py-32 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeader
                        badge="Strategic Value"
                        title="Our Consulting Expertise"
                        description="Leverage our deep experience to navigate the complex landscape of modern technology."
                    />

                    <div className="grid gap-8 md:grid-cols-3">
                        {consultingServices.map((service, index) => (
                            <Card key={index} className="group reveal border-border/50 bg-muted/30 hover:bg-background hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                <CardHeader className="relative">
                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                    <CardDescription className="text-base font-bold text-foreground/80">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                                        {service.details}
                                    </p>
                                    <Button asChild variant="link" className="p-0 text-primary group-hover:translate-x-2 transition-transform">
                                        <Link to="/contact">
                                            Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Process Section */}
            <section className="px-4 py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">How We <span className="text-blue-400">Drive Growth</span></h2>
                            <p className="text-xl text-slate-300 font-medium mb-12">
                                Our approach is deeply collaborative, focused on speed-to-value without compromising on long-term scalability.
                            </p>
                            <div className="space-y-4">
                                {steps.map((step, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                        <div className="flex items-start gap-6">
                                            <span className="text-3xl font-black text-blue-400/40 group-hover:text-blue-400 transition-colors">{step.number}</span>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                                <p className="text-slate-300 font-medium group-hover:text-white transition-colors">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative reveal hidden lg:block">
                            <div className="absolute inset-0 bg-primary/20 blur-[150px] animate-pulse" />
                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center p-12">
                                <div className="w-full space-y-4">
                                    <div className="h-4 bg-blue-400/40 rounded-full w-3/4 animate-pulse" />
                                    <div className="h-4 bg-blue-400/20 rounded-full w-full" />
                                    <div className="h-4 bg-blue-400/10 rounded-full w-2/3" />
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
