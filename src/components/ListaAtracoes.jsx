import { atracoes } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'

function ListaAtracoes() {
  return (
    // 🟤 Trocamos o cinza pelo creme do site, e colocamos a mesma borda verde elegante
   <section id="atracoes" className="bg-[#f2e6d6] px-4 sm:px-6 py-12 sm:py-16 max-w-4xl mx-4 sm:mx-auto my-8 border-2 border-green-800 rounded-2xl shadow-sm text-black">

      
      {/* 🟢 Título em verde escuro, centralizado e em caixa alta para combinar com o restante */}
      <h2 className="text-3xl font-bold mb-10 text-center text-emerald-800 tracking-wide uppercase">
        Nossas Atrações e Convidados
      </h2>

      {/* Grid inteligente: 1 coluna no celular, 2 no tablet e 4 em telas grandes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {atracoes.map((item) => (
          <CartaoAtracao 
            key={item.id}
            atracao={item} 
          />
        ))}  
      </div>
    </section>
  )
}

export default ListaAtracoes
