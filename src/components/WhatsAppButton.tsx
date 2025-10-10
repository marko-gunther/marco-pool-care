import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5544998537410?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20de%20limpeza%20de%20piscinas"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-8"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
