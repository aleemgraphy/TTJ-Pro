import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Mission from "@/components/mission";
import Navbar from "@/components/navbar";
import ServicesGrid from "@/components/services-grid";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
        <Mission />
        <ServicesGrid />
        <WhyChooseUs />
        <HowItWorks />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
