import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const expertise = [
    { area: "Cloud Services", stack: "AWS, Azure, GCP" },
    { area: "Web Development", stack: "React, Next.js, Node.js" },
    { area: "Mobile Apps", stack: "iOS, Android, React Native" },
    { area: "DevOps", stack: "CI/CD, Docker, Kubernetes" },
    { area: "Data Analytics", stack: "Big Data, Machine Learning" },
    { area: "Enterprise Systems", stack: "ERP, CRM, Custom Solutions" },
    { area: "API Development", stack: "REST, GraphQL, Microservices" },
    { area: "Security", stack: "Pentesting, Compliance, Audits" }
]

export default function Expertise() {
    return (
        <section className="px-4 py-24 bg-gradient-to-b from-transparent to-muted/30">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-foreground">Our Expertise</h2>
                    <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        We leverage cutting-edge technologies and deep domain knowledge to deliver exceptional results.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {expertise.map((item, index) => (
                        <Card key={index} className="group border-none bg-card shadow-sm ring-1 ring-border/50 hover:ring-secondary/50 transition-all duration-300">
                            <CardHeader className="p-5 pb-2">
                                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                    {item.area}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-5 pt-0">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    {item.stack}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
