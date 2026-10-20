import React from 'react'



const Produtos = () => {
  const produtos = [
    {id:1,nome: "Espresso",descricao: "Café arabica extraido sob pressão",preco: 8.99},
    {id: 2, nome: "Cappuccino", descricao: "Espresso,leite vaporizado e espuma aveludada", preco: 8.99},
    {id: 3, nome: "Americano", descricao: "Expresso diluido com agua quente e leve", preco: 8.99},
    {id: 4, nome: "Mocha", descricao: "Café expresso, leite vaporizado e calda de chocolate", preco: 8.99},
  ]
  
  return (
    <div>Produtos</div>
  )
}

export default Produtos