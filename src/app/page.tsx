import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { DelayCauses } from "@/components/DelayCauses";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#14161c] text-[#edeff4]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <ProcessTimeline />
        <PortfolioShowcase />
        <DelayCauses />
        <ComparisonTable />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
