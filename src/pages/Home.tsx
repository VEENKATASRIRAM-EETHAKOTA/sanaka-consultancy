import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Expertise from "@/components/home/Expertise"
import CTA from "@/components/home/CTA"
import Footer from "@/components/home/Footer"

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Expertise />
            <CTA />
            <Footer />
        </main>
    )
}
