import Hero from './components/Hero'
import { evento } from './data/evento'
import { autores } from './data/evento'
import CartaoAutor from './components/CartaoAutor'
import Inscricao from './components/Inscricao'


function App() {
  return (
    <main>
      <Hero />
      <CartaoAutor />
      <Inscricao />  
    </main>
  )
}
export default App

function Rodape() {
  return <footer>{evento.nome} · {evento.data}</footer>
}

function Autores() {
  return (
    <ul>
      {autores.map((autor) => (
        <li key={autor.nome}>
          {autor.nome} — {autor.genero}
        </li>
      ))}
    </ul>
  )
}

{
  autores.map((autor) => (
    <CartaoAutor key={autor.nome} nome={autor.nome} genero={autor.genero} />
  ))
}