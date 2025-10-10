import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CoverageArea from "@/components/CoverageArea";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <Services />
      <About />
      <CoverageArea />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
