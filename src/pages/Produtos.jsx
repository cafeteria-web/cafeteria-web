import React from 'react'



const Produtos = () => {
  const produtos = [
    {id:1, nome: "Espresso",descricao: "Café arabica extraido sob pressão",preco: 8.99},
    {id: 2, nome: "Cappuccino", descricao: "Espresso,leite vaporizado e espuma aveludada", preco: 8.99},
    {id: 3, nome: "Americano", descricao: "Expresso diluido com agua quente e leve", preco: 8.99},
    {id: 4, nome: "Mocha", descricao: "Café expresso, leite vaporizado e calda de chocolate", preco: 8.99},
  ]
  
  return (
    <section className="produtos">
      <h1 className="produtos-titulo">Nossos Produtos</h1>

      <div className="produtos-grid">
        {produtos.map((produto) => (
          <article key={produto.id} className="produto-card">

            <div className="produto-info">
              <h2>{produto.nome}</h2>
              <p>{produto.descricao}</p>
              <div className="produto-rodape">
                <span className="produto-preco">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </span>
                <button>Adicionar</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Produtos