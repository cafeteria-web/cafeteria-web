import React from 'react'



const Produtos = () => {
  const produtos = [
    {id:1, nome: "Espresso",descricao: "Café arabica extraido sob pressão",preco: 8.99},
    {id: 2, nome: "Cappuccino", descricao: "Espresso,leite vaporizado e espuma aveludada", preco: 8.99},
    {id: 3, nome: "Americano", descricao: "Expresso diluido com agua quente e leve", preco: 8.99},
    {id: 4, nome: "Mocha", descricao: "Café expresso, leite vaporizado e calda de chocolate", preco: 8.99},
  ]
  
  return (
    <section className="bg-[#F5EBDD] px-6 py-16">
      <h1 className="mb-10 text-center text-4xl font-bold text-[#4A2C1A]">Nossos Produtos</h1>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {produtos.map((produto) => (
          <article key={produto.id} className="flex flex-col rounded-xl border border-[#4A2C1A]/15 bg-[#F5EBDD] p-6 shadow-md transition hover:-translate-y-1 hover:border-[#C8853A] hover:shadow-lg">

            <div className="flex flex-1 flex-col">
              <h2 className="mb-2 text-xl font-bold text-[#4A2C1A]">{produto.nome}</h2>
              <p className="mb-6 flex-1 text-sm text-[#4A2C1A]/80">{produto.descricao}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center justify-between">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </span>
                <button className="rounded-lg bg-[#C8853A] px-4 py-2 font-semibold text-[#4A2C1A] transition hover:bg-[#4A2C1A] hover:text-[#F5EBDD]">Adicionar</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Produtos