import {useState} from 'react'

function Inscricao({ evento }) {
 const [nome, setNome] = useState('')
 const [email, setEmail] = useState('')
 const [ingresso, setIngresso] = useState('Entrada - gratuita')

 const [enviado, setEnviado] = useState(false)

 const handleEnviar = (e) => {
    e.preventDefault() // impede a página de recarregar 

    if (nome.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos!')
        return 
    }
    setEnviado(true)  // altera o estado para sumir com o formulário e mostrar que foi enviado
 }

 return (
    <section id="inscricao" className='bg-white px-6 py-16 max-w-xl mx-auto my-8 border border-green-800 rounded-2xl shadow-sm text-black'>
         {/* SE JÁ FOI ENVIADO: Mostra apenas a mensagem de confirmação */}
      {enviado ? (
        <div className="text-center py-8 bg-green-50 rounded-xl p-6 border border-green-100">
          <span className="text-4xl mb-4 block">✅</span>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Inscrição Confirmada!</h2>
          <p className="text-gray-700 text-lg mb-4">
            Obrigado, <strong className="text-black">{nome}</strong>! Sua vaga para o <strong>{evento.nome}</strong> está garantida.
          </p>
          <div className="bg-white p-3 rounded-lg inline-block border border-green-200 font-medium text-sm text-green-700">
            🎟️ Tipo escolhido: {ingresso}
          </div>
        </div>
      ) : (
        /* SE NÃO FOI ENVIADO: Mostra o formulário normalmente */
        <div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800 text-center">Faça sua Inscrição</h2>
          <p className="text-gray-500 text-center mb-8 text-sm">
            Datas para Inscrições: {evento.data}
          </p>

          <form onSubmit={handleEnviar} className="space-y-5">
            {/* Campo Nome */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm text-gray-700">Nome Completo</label>
              <input 
                type="text" 
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Campo E-mail */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm text-gray-700">E-mail</label>
              <input 
                type="email" 
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Campo Tipo de Ingresso (<select>) atualizado com os valores do briefing */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm text-gray-700">Tipo de Ingresso</label>
              <select 
                value={ingresso}
                onChange={(e) => setIngresso(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-2.5 bg-white outline-none focus:border-orange-500 transition-colors cursor-pointer"
              >
                <option value="Entrada — gratuita">Entrada — gratuita</option>
                <option value="Aula-show com degustação — R$ 90">Aula-show com degustação — R$ 90</option>
                <option value="Passaporte de aulas-show — R$ 125">Passaporte de aulas-show — R$ 125</option>
              </select>
            </div>

            {/* Botão de Envio */}
            <button 
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-sm mt-4"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      )}
    </section>
 )

}

export default Inscricao
