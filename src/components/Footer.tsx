const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">MG Piscinas</h3>
            <p className="text-white/80">
              Limpeza de Piscinas em Campo Mourão e Região
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/80 mb-2">
              📞 (44) 99853-7410
            </p>
            <p className="text-white/60 text-sm">
              Atendimento em Campo Mourão e região
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-6 text-center text-white/60 text-sm">
          <p>
            © {currentYear} MG Piscinas - Limpeza de Piscinas. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
