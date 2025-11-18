import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Services />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
