function Rodape({ evento }) {
    const anoAtual = new Date().getFullYear()

    return (
        <footer class="bg-slate-900 p-6 py-12 px-6 mt-16 border-t border-gray-200 text-center md:text-left">
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
                <div>
                    <h3 className='text-white font-bold text-lg mb-1 '> {evento.nome}</h3>
                    <p className='text-sm text-orange-500 font-medium '> {evento.data}</p>
                    <p className='text-slate-400 text-xs italic mt-1'>{evento.frase}</p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape