import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Layers, Settings, Shield, Zap, Users, TrendingUp, Award } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Reliable Software Solutions for Growing Startups and Small Businesses
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl">
              Sanaka Consultancy helps startups and small businesses design, build, and scale reliable digital solutions.
              We turn your ideas into secure, high-quality software that supports long-term business growth.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive IT solutions tailored to your needs</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Code2 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Consulting</CardTitle>
                <CardDescription>Strategic guidance to align your technology with business goals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We guide you with the right technology strategy, system architecture, and ongoing technical support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Layers className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Product Development</CardTitle>
                <CardDescription>Build scalable software products from concept to launch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build scalable and reliable software tailored to your business needs using modern technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Settings className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Application Management</CardTitle>
                <CardDescription>Ongoing support and optimization for your systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From responsive websites to powerful mobile apps, we create user-friendly digital experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">We understand startup challenges and build solutions that grow with your business.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Reliable & Secure</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enterprise-grade security and 99.9% uptime guarantee for all solutions
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Agile methodologies ensure quick turnaround without compromising quality
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expert Team</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seasoned professionals with decades of combined industry experience
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Proven Results</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Track record of successful projects across diverse industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Expertise</h2>
            <p className="text-lg text-muted-foreground">Technologies and domains we excel in</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Cloud Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">AWS, Azure, Google Cloud</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">React, Next.js, Node.js</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Mobile Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">iOS, Android, React Native</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">CI/CD, Docker, Kubernetes</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Big Data, Machine Learning</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Enterprise Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">ERP, CRM, Custom Solutions</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">API Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">REST, GraphQL, Microservices</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Penetration Testing, Audits</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80 text-pretty">
            Let's discuss how Sanaka Consultancy can help you achieve your technology goals and drive innovation.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Schedule a Consultation
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
