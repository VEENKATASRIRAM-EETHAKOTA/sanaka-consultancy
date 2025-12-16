import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Gauge, Headphones } from "lucide-react"

export default function ApplicationManagementPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Application Management
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl">
              Keep your software running smoothly with our ongoing support and management services. We monitor,
              optimize, and maintain your applications so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* Three Management Cards */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Activity className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Application Monitoring</CardTitle>
                <CardDescription>Watch your systems 24/7 to catch problems early</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We keep an eye on your applications all day, every day. If something goes wrong, we know right away
                  and can fix it before it affects your users or business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Gauge className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription>Make your applications faster and more efficient</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We analyze how your systems perform and find ways to make them work better. Faster apps mean happier
                  users and lower costs for you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Headphones className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Ongoing Support & Maintenance</CardTitle>
                <CardDescription>Regular updates and help when you need it</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We provide regular software updates, security patches, and bug fixes. Our team is always ready to help
                  when you have questions or need assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Support You Section */}
      <section className="px-4 py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">How We Support You</h2>
            <p className="text-lg text-muted-foreground">Our simple process for keeping your apps healthy</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  1
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Monitor Everything</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We set up tools to watch your applications constantly. We track performance, uptime, errors, and user
                experience to spot issues quickly.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  2
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Fix Problems Fast</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When we find an issue, we act immediately. Our experienced team knows how to solve problems quickly to
                minimize any impact on your business.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  3
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Keep Improving</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We regularly review your systems and suggest improvements. We apply updates, add new features, and make
                sure your applications stay modern and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Need Reliable Application Support?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80 text-pretty">
            Let us take care of your applications so you can focus on growing your business. Our team is ready to help.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Get Support
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
