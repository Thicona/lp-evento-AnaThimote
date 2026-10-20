import { cronograma } from '../data/evento'

function Programacao() {
    return (
         <section id="programacao" className="bg-orange-50 border-b border-green-800 px-6 py-16 max-w-4xl mx-auto my-8 border-2 border-green-800 rounded-2xl shadow-sm text-black">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Programação Completa</h2>

            <div className="space-y-4">
                {/* Mapeando a lista do briefing */}
                {cronograma.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-orange-50/50 rounded-xl transition-colors"
                    >
                        {/* Bloco de Data e Hora em Destaque */}
                          <div className="flex items-center gap-2 min-w-[120px] bg-[#f5e6d3] border border-[#e6d4bf] px-3 py-1.5 rounded-lg justify-center shadow-sm">
                        <span className="font-bold text-[#a31414] uppercase text-sm">
                                {item.dia}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="font-semibold text-gray-700 text-sm">
                                {item.horario}
                            </span>
                        </div>

                        {/* Texto da Atividade */}
                        <p className="text-base text-gray-800 font-medium">
                            {item.atividade}
                        </p>
                    </div>
                ))}
            </div>

        </section>


    )
}

export default Programacao