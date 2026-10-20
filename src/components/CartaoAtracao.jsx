function CartaoAtracao({ atracao }) {
  return (
<div className="bg-orange-50 border-b border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-black">

      <div>
        {/* Mostra: Cozinha caipira, Churrasco, Confeitaria, Produtor rural */}
        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
          {atracao.especialidade}
        </span>

        {/* Nome do Convidado/Sítio */}
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {atracao.nome}
        </h3>
        
        {/* Descrição e história do briefing */}
        <p className="text-gray-600 text-sm">
          {atracao.descricao}
        </p>
      </div>
    </div>
  )
}

export default CartaoAtracao 
