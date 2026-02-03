import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ConsultationCard } from "@/components/home/ConsultationCard";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { Testimonials } from "@/components/home/Testimonials";
import { CTAForm } from "@/components/home/CTAForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ConsultationCard />
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTAForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
