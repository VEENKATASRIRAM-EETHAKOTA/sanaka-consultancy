import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="border-t border-border/50 bg-background px-4 py-16">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.jpg"
                                alt="Sanaka Consultancy Logo"
                                className="h-10 w-10 rounded-md object-cover shrink-0"
                            />
                            <span className="text-xl font-black tracking-tight text-foreground uppercase whitespace-nowrap">
                                Sanaka <span className="text-primary">Consultancy</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground max-w-xs leading-relaxed">
                            Expert IT solutions for modern businesses. We design, build, and scale reliable digital products.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/consulting" className="hover:text-secondary transition-colors">Consulting</Link></li>
                            <li><Link to="/product-development" className="hover:text-secondary transition-colors">Product Development</Link></li>
                            <li><Link to="/application-management" className="hover:text-secondary transition-colors">App Management</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                            <li><Link to="#" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link to="#" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-border/50 flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Sanaka Consultancy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-foreground transition-colors">Twitter</Link>
                        <Link to="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
                        <Link to="#" className="hover:text-foreground transition-colors">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
