import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Layers, Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const services = [
    {
        title: "Consulting",
        description: "Strategic guidance to align your technology with business goals",
        content: "We guide you with the right technology strategy, system architecture, and ongoing technical support.",
        icon: Code2,
        href: "/consulting"
    },
    {
        title: "Product Development",
        description: "Build scalable software products from concept to launch",
        content: "We build scalable and reliable software tailored to your business needs using modern technologies.",
        icon: Layers,
        href: "/product-development"
    },
    {
        title: "Application Management",
        description: "Ongoing support and optimization for your systems",
        content: "From responsive websites to powerful mobile apps, we create user-friendly digital experiences.",
        icon: Settings,
        href: "/application-management"
    }
]

export default function Services() {
    return (
        <section className="px-4 py-24 bg-muted/50 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Our Services</h2>
                    <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        Comprehensive IT solutions tailored to your unique business challenges and growth objectives.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <Card key={index} className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10">
                            <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
                                <service.icon className="h-24 w-24" />
                            </div>
                            <CardHeader>
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary ring-1 ring-secondary/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-2xl">{service.title}</CardTitle>
                                <CardDescription className="text-base font-medium text-foreground/80">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                                    {service.content}
                                </p>
                                <Button asChild variant="link" className="p-0 text-secondary group-hover:translate-x-1 transition-transform">
                                    <Link to={service.href}>
                                        Explore service <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
