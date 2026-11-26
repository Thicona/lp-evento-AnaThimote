import BotaoLembrete from "./BotaoLembrete";

function Hero() {
  return (
    <section className="bg-[#f2e6d6] text-slate-800 py-12 sm:py-20 px-4 sm:px-6 text-center border-b border-orange-100/50">
      <h1 className="font-black text-3xl sm:text-4xl md:text-5xl text-emerald-800 tracking-wide uppercase text-center max-w-4xl mx-auto leading-tight mb-4 break-words">
        Festival Sabores da Alta Paulista
      </h1>
      
      <h2 className="text-[#b91c1c] text-lg sm:text-xl md:text-2xl font-black max-w-2xl mx-auto mb-6 tracking-wide">
        Três dias para provar o melhor da cozinha da região.
      </h2>
      
      <div className="bg-white/60 backdrop-blur-sm w-full sm:w-auto inline-block px-4 sm:px-6 py-4 rounded-2xl border border-[#eadaa6]/30 shadow-sm space-y-2">
        <p className="text-[#451a03] font-extrabold text-sm sm:text-base md:text-lg flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <span>📅 4 a 6 de junho de 2027</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-medium text-amber-900 text-xs sm:text-sm">das 11h às 22h</span>
        </p>
        <p className="text-amber-950 font-bold text-xs sm:text-sm tracking-wide uppercase">
          📍 Recinto de Exposições — Osvaldo Cruz/SP
        </p>
      </div>

      <BotaoLembrete />
    </section>
  );
}

export default Hero;
