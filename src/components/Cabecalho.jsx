function Cabecalho() {
  return (
    <header className="bg-orange-50 border-b border-orange-100 py-3 px-4 md:py-4 md:px-6 sticky top-0 z-50 shadow-md text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
        {/* Título / Logo do Menu */}
        <a 
          href="#" 
          className="font-bold text-base sm:text-lg text-emerald-800 tracking-wide uppercase text-center md:text-left"
        >
          🥗 Sabores da Alta Paulista
        </a>

        {/* Links de Navegação */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-6 font-semibold text-xs sm:text-sm text-gray-600">
          <a href="#sobre" className="hover:text-orange-600 transition-colors">
            Sobre
          </a>
          <a href="#programacao" className="hover:text-orange-600 transition-colors">
            Programação
          </a>
          <a href="#atracoes" className="hover:text-orange-600 transition-colors">
            Atrações
          </a>
          <a href="#inscricao" className="hover:text-orange-600 transition-colors">
            Inscrição
          </a>
          <a href="#duvidas" className="hover:text-orange-600 transition-colors">
            Dúvidas
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
