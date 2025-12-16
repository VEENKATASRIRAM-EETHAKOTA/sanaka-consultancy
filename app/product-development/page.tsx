import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Rocket } from "lucide-react"

export default function ProductDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Product Development
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl">
              We build software products that people love to use. From simple websites to complex applications, our team
              creates solutions that help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Three Development Cards */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Web Application Development</CardTitle>
                <CardDescription>Build powerful websites and web apps that work everywhere</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We create modern web applications using the latest technologies. Whether you need a business website,
                  customer portal, or complex web platform, we build fast and reliable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Smartphone className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Mobile App Development</CardTitle>
                <CardDescription>Create apps for iPhone and Android users</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reach your customers on their phones with native mobile apps. We design apps that are easy to use,
                  look great, and work smoothly on all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Rocket className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>MVP Development</CardTitle>
                <CardDescription>Launch your product idea quickly and affordably</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Test your business idea without spending too much. We build minimum viable products that let you learn
                  from real users and improve based on their feedback.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="px-4 py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Approach</h2>
            <p className="text-lg text-muted-foreground">How we bring your product to life</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  1
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Understand Your Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We learn about your business goals and what you want to achieve. We ask questions to make sure we build
                exactly what you need.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  2
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Build in Small Steps</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We develop your product in phases, showing you progress regularly. This way you can give feedback early
                and we can make changes quickly.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  3
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Launch & Improve</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We help you launch your product and teach your team how to use it. After launch, we continue to add
                features and improvements based on user needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Ready to Build Your Product?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80 text-pretty">
            Let's discuss your product idea and create a plan to bring it to life. We're here to help you succeed.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Start Your Project
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
