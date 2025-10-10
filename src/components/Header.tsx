import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Serviços", id: "servicos" },
    { label: "Sobre", id: "sobre" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            MG Piscinas
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() =>
                window.open("https://wa.me/5544998537410?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20de%20limpeza%20de%20piscinas", "_blank")
              }
              className="bg-primary hover:bg-primary/90"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary font-medium transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() =>
                window.open("https://wa.me/5544998537410?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20de%20limpeza%20de%20piscinas", "_blank")
              }
              className="bg-primary hover:bg-primary/90 w-full"
            >
              WhatsApp
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
