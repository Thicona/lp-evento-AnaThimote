function Sobre() {
     // 1. Criamos a lista com os três números de destaque do briefing
  const destaques = [
    { id: 1, numero: "20", texto: "barracas" },
    { id: 2, numero: "09", texto: "aulas-show" },
    { id: 3, numero: "03", texto: "dias" }
  ];

  return (

    
    <section id="sobre" className= " bg-slate-50 px-6 py-16 text-black text-center">
      {/* Texto descritivo que você já tinha */}
      <h2 className="max-w-3xl mx-auto text-xl mb-12 font-medium">
        Vinte barracas de restaurantes, produtores rurais e cozinheiros da região, com aulas-show e
        uma competição de pratos feitos com ingredientes locais. A entrada é gratuita; os ingressos são só
        para as aulas-show com degustação.
      </h2>

       <div className="flex justify-center gap-12 items-center flex-wrap">
        {destaques.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            {/* O número em negrito/destaque */}
            <span className="text-4xl font-bold text-red-600">{item.numero}</span>
            {/* O texto descritivo */}
            <span className="text-lg text-gray-700 font-medium">{item.texto}</span>
            
            {/* Adiciona um pontinho separador entre eles, exceto no último item */}
            {item.id !== 3 && <span className="text-gray-300 ml-8 text-xl">•</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sobre
