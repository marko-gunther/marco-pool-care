import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-secondary to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h2>

          <p className="text-xl text-white/95 mb-12 leading-relaxed">
            Solicite um orçamento sem compromisso. Estamos prontos para deixar
            sua piscina impecável e pronta para uso!
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3 text-white">
                <Phone className="w-8 h-8" />
                <p className="font-semibold">(44) 99853-7410</p>
              </div>
              <div className="flex flex-col items-center gap-3 text-white">
                <MessageCircle className="w-8 h-8" />
                <p className="font-semibold">WhatsApp</p>
              </div>
              <div className="flex flex-col items-center gap-3 text-white">
                <Mail className="w-8 h-8" />
                <p className="font-semibold">Atendimento Rápido</p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() =>
                window.open("https://wa.me/5544998537410?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20de%20limpeza%20de%20piscinas", "_blank")
              }
              className="bg-accent hover:bg-accent/90 text-secondary font-bold text-xl px-12 py-7 shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full md:w-auto"
            >
              Chamar no WhatsApp Agora
            </Button>

            <p className="text-white/80 text-sm mt-6">
              Resposta rápida • Orçamento gratuito • Atendimento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
