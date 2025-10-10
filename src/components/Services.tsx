import { Droplet, Calendar, Home, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Droplet,
      title: "Limpeza Avulsa",
      description:
        "Ideal para quem precisa deixar a piscina pronta para uso. Tratamento completo e rápido para sua piscina.",
    },
    {
      icon: Calendar,
      title: "Manutenção Regular",
      description:
        "Acompanhamento semanal ou mensal para manter sua piscina sempre limpa e com água cristalina.",
    },
    {
      icon: Home,
      title: "Residências",
      description:
        "Serviço especializado para piscinas residenciais, com cuidado e atenção aos detalhes.",
    },
    {
      icon: Sparkles,
      title: "Piscinas de Aluguel",
      description:
        "Atendimento flexível para piscinas de aluguel, garantindo que estejam sempre impecáveis para seus hóspedes.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para manter sua piscina sempre limpa e
            pronta para uso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
