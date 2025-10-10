import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pool.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Piscina limpa e cristalina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Limpeza de Piscinas em
          <br />
          <span className="text-accent">Campo Morão e Região</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Serviço confiável, rápido e com resultado impecável para sua piscina.
          Água cristalina e tratamento profissional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/5544998537410?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20de%20limpeza%20de%20piscinas", "_blank")}
            className="bg-accent hover:bg-accent/90 text-secondary font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Falar no WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById("servicos");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6"
          >
            Conhecer Serviços
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
