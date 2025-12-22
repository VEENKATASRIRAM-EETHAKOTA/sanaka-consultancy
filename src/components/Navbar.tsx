import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
    const location = useLocation()
    const pathname = location.pathname
    const [darkMode, setDarkMode] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light"
        if (savedTheme === "dark") {
            setDarkMode(true)
            document.documentElement.classList.add("dark")
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (winScroll / height) * 100
            setScrollProgress(scrolled)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/consulting", label: "Consulting" },
        { href: "/product-development", label: "Product Development" },
        { href: "/application-management", label: "Application Management" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <nav className={cn(
            "sticky top-0 z-50 transition-all duration-300 border-b",
            isScrolled
                ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-border/40 py-2 shadow-lg"
                : "bg-transparent border-transparent py-4"
        )}>
            {/* Scroll Progress Bar */}
            <div
                className="absolute top-0 left-0 h-[2px] bg-primary transition-all duration-150 z-[60]"
                style={{ width: `${scrollProgress}%` }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                        <div className="relative">
                            <div className="relative h-10 w-10 overflow-hidden rounded-lg border-2 border-primary ring-1 ring-primary/20 shadow-[0_0_12px_var(--color-primary)] transition-all flex items-center justify-center bg-white dark:bg-slate-900">
                                <img
                                    src="/logo.jpg"
                                    alt="Sanaka Consultancy Logo"
                                    className="h-full w-full object-cover scale-110"
                                />
                            </div>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground uppercase whitespace-nowrap">
                            Sanaka <span className="text-primary">Consultancy</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    "text-sm font-semibold transition-colors hover:text-primary relative py-2",
                                    pathname === link.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                                <span className={cn(
                                    "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300",
                                    pathname === link.href ? "w-full" : "group-hover:w-full"
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle Only */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="rounded-full"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="px-2 pb-3">
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "px-3 py-3 text-base font-medium transition-all rounded-lg",
                                            pathname === link.href
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
