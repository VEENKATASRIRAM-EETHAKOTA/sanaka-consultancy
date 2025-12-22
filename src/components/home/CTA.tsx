import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"
import { Link } from "react-router-dom"

export default function CTA() {
    return (
        <section className="px-4 py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 rotate-3 transition-transform hover:rotate-6">
                        <Award className="h-10 w-10 text-white" />
                    </div>
                </div>
                <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl">
                    Ready to Transform Your Business?
                </h2>
                <p className="mb-10 text-xl text-primary-foreground/90 font-medium text-pretty leading-relaxed">
                    Let's discuss how Sanaka Consultancy can help you achieve your technology goals, drive innovation, and scale with confidence.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        asChild
                        size="lg"
                        variant="secondary"
                        className="h-14 px-10 text-lg bg-white text-primary hover:bg-white/90 shadow-xl transition-all hover:scale-105 active:scale-95"
                    >
                        <Link to="/contact">Schedule a Consultation</Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="ghost"
                        className="h-14 px-10 text-lg text-white hover:bg-white/10 transition-all"
                    >
                        <Link to="/contact">Contact Sales</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
