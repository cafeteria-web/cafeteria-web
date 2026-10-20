import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-[#4A2C1A] text-[#F5EBDD] py-4 px-8 flex flex-col md:flex-row items-center justify-between shadow-md gap-4">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-2xl font-bold tracking-wide">
          Café Deploi
        </h1>
        <p className="text-sm text-[#F5EBDD]/80 italic mt-0.5">
          a cafeteria do desenvolvedor web
        </p>
      </div>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link
              to="/"
              className="text-[#F5EBDD] hover:text-[#C8853A] font-medium transition-colors duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/Produtos"
              className="text-[#F5EBDD] hover:text-[#C8853A] font-medium transition-colors duration-200"
            >
              Produtos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar