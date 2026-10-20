function Hero() {
  return (
    // 🟤 Fundo marrom-areia suave e elegante
    <section className="bg-[#f2e6d6] text-slate-800 py-20 px-6 text-center border-b border-orange-100/50">
      
      {/* 🟢 Título principal em verde musgo elegante e bem grande */}
      <h1 className="font-black text-4xl md:text-5xl text-emerald-800 tracking-wide uppercase text-center max-w-4xl mx-auto leading-tight mb-4">
        Festival Sabores da Alta Paulista
      </h1>
      
      {/* 🔴 Subtítulo em vermelho terracota (tom de fogão a lenha/gastronomia) */}
      <h2 className="text-[#b91c1c] text-xl md:text-2xl font-black max-w-2xl mx-auto mb-6 tracking-wide">
        Três dias para provar o melhor da cozinha da região.
      </h2>
      
      {/* 📅 Informações de data e local em marrom café nítido */}
      <div className="bg-white/60 backdrop-blur-sm inline-block px-6 py-4 rounded-2xl border border-[#eadaa6]/30 shadow-sm space-y-1.5">
        <p className="text-[#451a03] font-extrabold text-base md:text-lg flex items-center justify-center gap-2">
          📅 4 a 6 de junho de 2027 • <span className="font-medium text-amber-900 text-sm">das 11h às 22h</span>
        </p>
        <p className="text-amber-950 font-bold text-sm tracking-wide uppercase">
          📍 Recinto de Exposições — Osvaldo Cruz/SP
        </p>
      </div>

    </section>
  )
}

export default Hero
