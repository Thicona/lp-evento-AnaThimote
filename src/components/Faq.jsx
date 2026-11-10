import { useState } from 'react';

export default function Faq() {
  // Lista de perguntas e respostas oficiais do briefing
  const faqData = [
    {
      id: 'resposta-cartao',
      pergunta: 'Aceita cartão?',
      resposta: 'Sim, todas as barracas aceitam cartão e Pix.',
    },
    {
      id: 'resposta-vegetariana',
      pergunta: 'Tem opção vegetariana?',
      resposta: 'Sim, pelo menos cinco barracas têm pratos sem carne.',
    },
    {
      id: 'resposta-cachorro',
      pergunta: 'Posso levar meu cachorro?',
      resposta: 'Pode, desde que na coleira.',
    }
  ];

  // Estado para controlar qual pergunta está aberta (armazena o ID)
  const [abertoId, setAbertoId] = useState(null);

  const toggleFaq = (id) => {
    setAbertoId(abertoId === id ? null : id);
  };

  return (
    <section id="duvidas" className="max-w-3xl mx-auto py-12 px-4 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center text-emerald-900 mb-8">
        Perguntas Frequentes
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item) => {
          const isExpanded = abertoId === item.id;

          return (
            <div key={item.id} className="border-b border-gray-200 pb-4">
              {/* REQUISITO: cada pergunta é um <button>, dentro de um título (<h3>) */}
              <h3 className="text-lg font-semibold text-slate-800">
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  // REQUISITO: o botão tem aria-expanded ligado a um useState
                  aria-expanded={isExpanded}
                  // REQUISITO: o botão tem aria-controls apontando para o id da resposta
                  aria-controls={item.id}
                  className="flex justify-between items-center w-full text-left py-3 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 transition-colors"
                >
                  <span>{item.pergunta}</span>
                  <span className="ml-2 transform transition-transform duration-200" aria-hidden="true">
                    {isExpanded ? '▲' : '▼'}
                  </span>
                </button>
              </h3>

              {/* REQUISITO: a resposta fica escondida com o atributo hidden quando fechada */}
              <p
                id={item.id}
                hidden={!isExpanded}
                className="mt-2 text-slate-600 bg-gray-50 p-4 rounded-lg leading-relaxed"
              >
                {item.resposta}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
