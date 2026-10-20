import { faq } from '../data/evento'

function Faq() {
  return (
    // 🟤 Mesmo padrão de cartão creme translúcido com borda verde escura das outras seções
    <section id="faq" className="bg-orange-50 backdrop-blur-md px-6 py-16 max-w-4xl mx-auto my-8 border-2 border-green-800 rounded-2xl shadow-xl text-black">
      
      <h2 className="text-3xl font-bold mb-10 text-center text-green-700 tracking-wide uppercase">
        Dúvidas Frequentes
      </h2>

      <div className="space-y-6 max-w-2xl mx-auto">
        {faq.map((item) => (
          <div 
            key={item.id} 
            className="p-5 bg-white/60 border border-green-800/10 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Pergunta em Marrom Escuro */}
            <h3 className="text-lg font-black text-amber-950 mb-2">
              {item.pergunta}
            </h3>
            
            {/* Resposta em texto cinza escuro de fácil leitura */}
            <p className="text-gray-700 font-medium text-base leading-relaxed">
              {item.resposta}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
