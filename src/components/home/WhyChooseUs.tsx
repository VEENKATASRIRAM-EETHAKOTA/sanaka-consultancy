import { Shield, Zap, Users, TrendingUp } from "lucide-react"

const reasons = [
    {
        title: "Reliable & Secure",
        description: "Enterprise-grade security and 99.9% uptime guarantee for all solutions",
        icon: Shield,
    },
    {
        title: "Fast Delivery",
        description: "Agile methodologies ensure quick turnaround without compromising quality",
        icon: Zap,
    },
    {
        title: "Expert Team",
        description: "Seasoned professionals with decades of combined industry experience",
        icon: Users,
    },
    {
        title: "Proven Results",
        description: "Track record of successful projects across diverse industries",
        icon: TrendingUp,
    }
]

export default function WhyChooseUs() {
    return (
        <section className="px-4 py-24 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Why Choose Us</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We understand startup challenges and build solutions that grow with your business.
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl scale-0 group-hover:scale-110 transition-transform duration-500" />
                                <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary ring-1 ring-secondary/20 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 shadow-inner">
                                    <reason.icon className="h-10 w-10 transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </div>
                            <h3 className="mb-3 text-xl font-bold">{reason.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
