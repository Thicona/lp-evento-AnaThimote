function Rodape({evento}) {
    const anoAtual = new Date().getFullYear()

    return (
        <foooter className='bg-slate-900 text-slate-400 py-12 px-6 mt-16 border-t border-slate-800 text-center md:text-left'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
                <div>
                    <h3 className='text-black font-bold text-lg mb-1 '> {evento.nome}</h3>
                    <p className='text-sm text-orange-500 font-medium '> {evento.data}</p>
                    <p className='text-xs text-slate-500 italic mt-1'>{evento.frase}</p>
                </div>
            </div>
        </foooter>
    )
}

export default Rodape