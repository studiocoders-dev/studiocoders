import { Navbar } from "@/components/Navbar";
import { MotionController } from "@/components/MotionController";
import { Hero } from "@/components/Hero";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { ServicesSection } from "@/components/ServicesSection";
import { CommercialGuarantees } from "@/components/CommercialGuarantees";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { DelayCauses } from "@/components/DelayCauses";
import { AuditGuarantees } from "@/components/AuditGuarantees";
import { PublicCode } from "@/components/PublicCode";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { QuickStepsCTA } from "@/components/QuickStepsCTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#14161c] text-[#edeff4]">
      <MotionController />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ImpactMetrics />
        <ServicesSection />
        <CommercialGuarantees />
        <ProcessTimeline />
        <PortfolioShowcase />
        <DelayCauses />
        <AuditGuarantees />
        <PublicCode />
        <ComparisonTable />
        <FAQ />
        <QuickStepsCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
