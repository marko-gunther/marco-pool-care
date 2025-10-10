import { Shield, Clock, ThumbsUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Confiança",
      description: "Profissional experiente e comprometido com a qualidade",
    },
    {
      icon: Clock,
      title: "Rapidez",
      description: "Atendimento ágil e pontual para sua comodidade",
    },
    {
      icon: ThumbsUp,
      title: "Resultado",
      description: "Piscina limpa e cristalina, sempre impecável",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quem é MG Piscinas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Com anos de experiência e dedicação, a MG Piscinas oferece um
              serviço de limpeza de piscinas que une eficiência e confiança.
              Atendendo em Campo Morão e região, cuidamos da sua piscina como se
              fosse nossa — garantindo água limpa, cristalina e segura para toda a
              família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
