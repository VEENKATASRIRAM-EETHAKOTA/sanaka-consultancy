import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Compass, Network } from "lucide-react"

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Consulting Services
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl">
              We help businesses make smart technology decisions. Our experts guide you through challenges and create
              solutions that work for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Three Consulting Cards */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Technology Consulting</CardTitle>
                <CardDescription>Choose the right tools and platforms for your business</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We help you understand which technologies fit your needs best. From cloud platforms to development
                  frameworks, we provide clear recommendations based on your budget, team, and business goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Compass className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Product Strategy</CardTitle>
                <CardDescription>Plan your product roadmap with confidence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We work with you to define what features matter most and how to build them efficiently. Our strategy
                  sessions help you prioritize development work and launch products that customers actually want.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Network className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>System Architecture</CardTitle>
                <CardDescription>Design systems that scale and perform well</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We design the foundation of your software to handle growth. Our architecture plans ensure your systems
                  are secure, fast, and easy to maintain as your business expands.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="px-4 py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">How We Work</h2>
            <p className="text-lg text-muted-foreground">A simple process to get you the help you need</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  1
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Listen & Understand</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We start by listening to your challenges and goals. No jargon, just a clear conversation about what you
                need and where you want to go.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  2
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Analyze & Plan</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team reviews your current situation and creates a practical plan. We explain our recommendations in
                simple terms and show you the best path forward.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  3
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Guide & Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We stay with you through implementation, answering questions and making adjustments as needed. Your
                success is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Ready to Get Expert Advice?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80 text-pretty">
            Let's have a conversation about your technology needs. We'll help you find the right solutions.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Talk to Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">Sanaka Consultancy</h3>
              <p className="text-sm text-muted-foreground">Expert IT solutions for modern businesses</p>
            </div>
            <div className="text-center text-sm text-muted-foreground md:text-right">
              <p>&copy; {new Date().getFullYear()} Sanaka Consultancy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
