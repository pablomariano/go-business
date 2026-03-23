import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import Benefits from "@/components/benefits"
import Gallery from "@/components/gallery"
import Clients from "@/components/clients"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Benefits />
      <Gallery />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
