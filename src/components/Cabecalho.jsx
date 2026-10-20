function Cabecalho() {
  return (
    <header className="bg-orange-50 border-b border-orange-100 py-4 px-6 sticky top-0 z-50 shadow-md text-black">


      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Título / Logo do Menu */}
       <span className="font-bold text-lg text-emerald-800 tracking-wide uppercase">
           🥗 Sabores da Alta Paulista
        </span>

        {/* Links de Navegação */}
        <nav className="flex gap-6 font-semibold text-sm text-gray-600">
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
        </nav>
      </div>
    </header>
  )
}
export default Cabecalho