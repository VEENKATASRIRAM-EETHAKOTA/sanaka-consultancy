import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Gauge, Headphones, ShieldCheck, BarChart3, Cloud } from "lucide-react"
import Footer from "@/components/home/Footer"
import { SectionHeader } from "@/components/ui/SectionHeader"

const managementFeatures = [
    {
        title: "Real-time Monitoring",
        description: "Watch your systems 24/7 to catch problems early",
        icon: Activity,
        metric: "99.99% Uptime"
    },
    {
        title: "Performance Tuning",
        description: "Make your applications faster and more efficient",
        icon: Gauge,
        metric: "<200ms Latency"
    },
    {
        title: "Predictive Support",
        description: "Regular updates and help when you need it",
        icon: Headphones,
        metric: "24/7 Response"
    }
]

export default function ApplicationManagement() {
    return (
        <main className="min-h-screen">
            {/* Premium Hero */}
            <section className="relative px-4 py-32 md:py-48 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent)]" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mx-auto max-w-3xl text-center reveal">
                        <h1 className="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl">
                            MISSION <span className="text-secondary tracking-widest uppercase text-3xl block mt-2 opacity-90">Critical</span>
                        </h1>
                        <p className="mb-10 text-xl text-slate-300 font-medium">
                            We monitor, optimize, and maintain your digital products so you can scale without boundaries.
                        </p>
                        <div className="flex justify-center gap-6">
                            <div className="text-left">
                                <span className="text-secondary font-mono text-sm block font-bold">NODE_STATUS</span>
                                <span className="text-white font-bold">OPERATIONAL</span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="text-left">
                                <span className="text-secondary font-mono text-sm block font-bold">UPTIME_LAST_30D</span>
                                <span className="text-white font-bold">99.982%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Management Grid */}
            <section className="px-4 py-24 md:py-32 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeader
                        badge="Operational Excellence"
                        title="Managed Services"
                        description="Our management framework is built on proactive prevention rather than reactive fixes."
                    />

                    <div className="grid gap-8 md:grid-cols-3">
                        {managementFeatures.map((feature, index) => (
                            <Card key={index} className="reveal border-border/50 bg-muted/20 hover:bg-background hover:shadow-2xl transition-all duration-500">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="h-12 w-12 rounded-lg bg-slate-950 flex items-center justify-center">
                                            <feature.icon className="h-6 w-6 text-secondary" />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-secondary px-2 py-1 rounded bg-secondary/10 border border-secondary/20">{feature.metric}</span>
                                    </div>
                                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Extra Features Dashboard Look */}
            <section className="px-4 py-24 md:py-32 bg-slate-950 text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="reveal space-y-6">
                            <div className="h-12 w-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                                <ShieldCheck className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Security Audits</h3>
                            <p className="text-slate-300 font-medium">Regular pentesting and compliance checks to keep your data safe and secure at all times.</p>
                        </div>
                        <div className="reveal space-y-6" style={{ transitionDelay: '0.1s' }}>
                            <div className="h-12 w-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                                <BarChart3 className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Traffic Analysis</h3>
                            <p className="text-slate-300 font-medium">Deep insights into user behavior and resource allocation to prevent bottlenecks before they happen.</p>
                        </div>
                        <div className="reveal space-y-6" style={{ transitionDelay: '0.2s' }}>
                            <div className="h-12 w-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                                <Cloud className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Cloud Optimization</h3>
                            <p className="text-slate-300 font-medium">Serverless scaling and cost-efficiency management for AWS, Azure, and Google Cloud environments.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
