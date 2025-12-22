import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Rocket, ChevronRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "@/components/home/Footer"
import { SectionHeader } from "@/components/ui/SectionHeader"

const devServices = [
    {
        title: "Web Application Development",
        description: "Build powerful websites and web apps that work everywhere",
        content: "We create modern web applications using the latest technologies. Whether you need a business website, customer portal, or complex web platform, we build fast and reliable solutions.",
        icon: Globe,
        features: ["Responsive Design", "SEO Optimized", "API Integration"]
    },
    {
        title: "Mobile App Development",
        description: "Create apps for iPhone and Android users",
        content: "Reach your customers on their phones with native mobile apps. We design apps that are easy to use, look great, and work smoothly on all devices.",
        icon: Smartphone,
        features: ["Native iOS/Android", "Cross-Platform", "App Store Optimization"]
    },
    {
        title: "MVP Development",
        description: "Launch your product idea quickly and affordably",
        content: "Test your business idea without spending too much. We build minimum viable products that let you learn from real users and improve based on their feedback.",
        icon: Rocket,
        features: ["Rapid Prototyping", "User-Centric Design", "Scalable Foundation"]
    }
]

export default function ProductDevelopment() {
    return (
        <main className="min-h-screen">
            {/* Premium Hero */}
            <section className="relative px-4 py-32 md:py-56 overflow-hidden bg-slate-950">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mx-auto max-w-4xl text-center reveal">
                        <h1 className="mb-6 text-5xl font-black tracking-tight text-white md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-none">
                            BUILDING <br /><span className="text-secondary italic">THE FUTURE</span>
                        </h1>
                        <p className="mb-10 text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                            We build software products that people love to use. From vision to deployment, we are your engineering partner.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg">
                                <Link to="/contact">Start Building</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg text-white border-white/20 hover:bg-white/10 bg-white/5 hover:text-white transition-all">
                                <Link to="/contact">Our Tech Stack</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overhaul */}
            <section className="px-4 py-24 md:py-40 bg-background relative">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeader
                        badge="Engineering Excellence"
                        title="Product Engineering"
                        description="Our multi-disciplinary team delivers end-to-end development services across web and mobile platforms."
                    />

                    <div className="grid gap-12 lg:grid-cols-3">
                        {devServices.map((service, index) => (
                            <div key={index} className="reveal group relative">
                                <div className="absolute -inset-4 bg-secondary/5 rounded-3xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 -z-10" />
                                <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-2xl transition-transform group-hover:-translate-y-2 group-hover:rotate-6">
                                    <service.icon className="h-10 w-10 text-secondary" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed mb-8 text-lg">
                                    {service.content}
                                </p>
                                <div className="space-y-3 mb-10">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3 text-sm font-bold text-foreground/90">
                                            <div className="h-5 w-5 rounded-full bg-secondary/10 flex items-center justify-center">
                                                <Check className="h-3 w-3 text-secondary" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <Button asChild variant="outline" className="rounded-full group-hover:bg-secondary group-hover:text-white transition-all">
                                    <Link to="/contact">Request Info</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Approach Cards */}
            <section className="px-4 py-24 md:py-40 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeader
                        badge="Agile Delivery"
                        title="Our Process"
                        description="How we translate complex problems into elegant software solutions."
                    />

                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { title: "Define", desc: "Deep discovery phase to align goals, user needs, and technical constraints." },
                            { title: "Design", desc: "Iterative UX/UI prototyping focused on human-centered design principles." },
                            { title: "Deploy", desc: "Robust engineering with CI/CD, automated testing, and scalable infrastructure." }
                        ].map((step, idx) => (
                            <Card key={idx} className="reveal border-none shadow-sm h-full group">
                                <CardHeader>
                                    <span className="text-xs font-black text-secondary tracking-widest uppercase mb-4 block">Phase {idx + 1}</span>
                                    <CardTitle className="text-3xl font-bold">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-medium leading-relaxed text-lg">{step.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
