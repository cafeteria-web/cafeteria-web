import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <header>
      <h1>Café Deploi</h1>

      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>

          <li>
            <Link to="/Produtos">Produtos</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Footer