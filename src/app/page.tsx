import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AudienceGrid } from "@/components/sections/AudienceGrid";
import { FeaturesShowcase } from "@/components/sections/FeaturesShowcase";
import { UseCases } from "@/components/sections/UseCases";
import { TemplatesShowcase } from "@/components/sections/TemplatesShowcase";
import { Testimonial } from "@/components/sections/Testimonial";
import { Faqs } from "@/components/sections/Faqs";
import { VideoResources } from "@/components/sections/VideoResources";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="mt-20 space-y-0">
        <Hero />
        <AudienceGrid />
        <FeaturesShowcase />
        <UseCases />
        <TemplatesShowcase />
        <Testimonial />
        <Faqs />
        <VideoResources />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
}
