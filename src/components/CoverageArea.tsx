import { MapPin } from "lucide-react";

const CoverageArea = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <MapPin className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Atendimento em Campo Morão e Região
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Atendimento a domicílio, sem endereço fixo. Vamos até você em{" "}
            <span className="font-semibold text-primary">Campo Morão</span> e
            cidades próximas para oferecer o melhor serviço de limpeza e
            manutenção de piscinas.
          </p>

          <div className="inline-block px-6 py-3 bg-primary/10 border-2 border-primary/20 rounded-lg">
            <p className="text-primary font-semibold">
              📍 Servindo Campo Morão e região com excelência
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
