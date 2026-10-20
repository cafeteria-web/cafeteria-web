const Card = ({titulo, descricao, preco, tag }) => {
  return (
    <article className="flex flex-col rounded-2xl border border-[#EADBC6] bg-white/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <span className="text-4xl" aria-hidden="true">{emoji}</span>
        <span className="rounded-full bg-[#EADBC6] px-3 py-1 font-mono text-xs">{tag}</span>
      </div>

      <h3 className="mt-4 text-xl font-bold">{titulo}</h3>
      <p className="mt-2 flex-1 text-sm text-[#4A2C1A]/75">{descricao}</p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-lg font-bold text-[#A96D2A]">{preco}</span>
        <button
          type="button"
          className="rounded-full bg-[#C8853A] px-4 py-2 text-sm font-semibold text-[#361E11] transition-colors hover:bg-[#A96D2A] hover:text-[#F5EBDD]"
        >
          Pedir
        </button>
      </div>
    </article>
  )
}

export default Card