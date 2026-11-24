import Hero from './components/Hero'
import { evento } from './data/evento'
import Cabecalho from './components/Cabecalho'
import Inscricao from './components/Inscricao'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import ListaAtracoes from './components/ListaAtracoes'
import Rodape from './components/Rodape'
import Faq from './components/Faq'
import Grafico from './components/Grafico'

function App() {
  return (
    <>
      {/* 1. Cabeçalho no topo da página */}
      <Cabecalho />
      
      {/* 2. Conteúdo principal dentro da tag main */}
      <main>
        <Hero />
        
        {/* Adicionando a página Sobre */}
        <Sobre />

        {/* Programação do evento */}
        <Programacao />

        {/* Cartões das atrações mapeadas */}
        <ListaAtracoes /> 

        <Faq />

        {/* Gráfico posicionado antes da seção de inscrição */}
        <Grafico />

        {/* Passamos o objeto 'evento' criado no seu arquivo de dados */}
        <Inscricao evento={evento} /> 
      </main>

      {/* 3. Rodapé na parte de baixo da página */}
      <Rodape evento={evento} />
    </>
  )
}

export default App