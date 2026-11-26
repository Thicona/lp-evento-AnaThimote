import { cronograma } from '../data/evento'

function Programacao() {
  return (
    <section id="programacao" className="bg-orange-50 px-4 sm:px-6 py-12 sm:py-16 max-w-4xl mx-auto my-8 mx-4 sm:mx-auto border-2 border-green-800 rounded-2xl shadow-sm text-black">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-green-700">
        Programação Completa
      </h2>

      <div className="space-y-4">
        {cronograma.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 border-b border-orange-200/60 hover:bg-orange-100/40 rounded-xl transition-colors"
          >
            {/* Bloco de Data e Hora */}
            <div className="self-start sm:self-auto flex items-center gap-2 sm:min-w-[130px] bg-[#f5e6d3] border border-[#e6d4bf] px-3 py-1.5 rounded-lg justify-center shadow-sm">
              <span className="font-bold text-[#a31414] uppercase text-xs sm:text-sm">
                {item.dia}
              </span>
              <span className="text-gray-400">•</span>
              <span className="font-semibold text-gray-700 text-xs sm:text-sm">
                {item.horario}
              </span>
            </div>

            {/* Texto da Atividade */}
            <p className="text-sm sm:text-base text-gray-800 font-medium">
              {item.atividade}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programacao
