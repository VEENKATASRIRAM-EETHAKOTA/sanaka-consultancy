import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-4 py-20 md:py-32 lg:py-48">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto max-w-6xl">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                        Trusted by 50+ Startups
                    </div>
                    <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-balance md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                        Reliable Software Solutions for Growing Businesses
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground font-medium text-pretty md:text-xl leading-relaxed">
                        Sanaka Consultancy helps startups design, build, and scale high-performance digital solutions.
                        We turn your vision into secure, enterprise-grade software.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="h-12 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all hover:scale-105">
                            <Link to="/contact">Get Started Today</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-12 px-8 backdrop-blur-sm border-border/50 hover:bg-muted/50 transition-all">
                            <Link to="/product-development">View Our Work</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
