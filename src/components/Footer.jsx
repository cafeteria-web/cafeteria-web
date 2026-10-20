import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#4A2C1A] text-[#F5EBDD]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-center md:grid-cols-3 md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-[#F5EBDD]">Café Deploi</h2>
          <p className="mt-2 text-[#F5EBDD]/80">Café fresco, todo dia!</p>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-[#C8853A]">Horarios:</h3>
        <p className="text-[#F5EBDD]/80">Segunda a Quinta: 10:00 - 19:00</p>
        <p className="text-[#F5EBDD]/80">Sexta e Sabado: 11:00 - 17:00</p>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-[#C8853A]">Contatos</h3>
        <p className="text-[#F5EBDD]/80">Avenida Paulista, 1100</p>
        <p className="text-[#F5EBDD]/80">11 99999-8888</p>
      </div>

      <div className="border-t border-[#C8853A]/30 py-4">
        <p className="text-center text-sm text-[#F5EBDD]/70">
          &copy;-2026- Direitos Reservados
        </p>
      </div>
      
    </footer>
  )
}

export default Footer