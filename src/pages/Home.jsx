import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
      <section className="bg-[#4A2C1A] text-[#F5EBDD]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-mono text-sm text-[#C8853A]">{'// café fresco, código limpo'}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              O melhor café para quem vive de <span className="text-[#C8853A]">código</span>.
            </h1>
            <p className="mt-5 max-w-md text-[#F5EBDD]/80">
              Grãos especiais, ambiente aconchegante e Wi-Fi que não cai. Venha
              fazer seu próximo commit com a gente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/produtos"
                className="rounded-full bg-[#C8853A] px-6 py-3 font-semibold text-[#361E11] transition-colors hover:bg-[#F5EBDD]"
              >
                Ver cardápio
              </Link>
              <a
                href="#destaques"
                className="rounded-full border border-[#F5EBDD]/40 px-6 py-3 font-semibold transition-colors hover:border-[#C8853A] hover:text-[#C8853A]"
              >
                Destaques
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md" aria-hidden="true">
            <div className="rounded-3xl bg-[#361E11] p-6 font-mono text-sm shadow-2xl ring-1 ring-[#F5EBDD]/10">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#C8853A]" />
                <span className="h-3 w-3 rounded-full bg-[#F5EBDD]/60" />
                <span className="h-3 w-3 rounded-full bg-[#F5EBDD]/20" />
              </div>
              <p><span className="text-[#C8853A]">const</span> pedido = {'{'}</p>
              <p className="pl-4">bebida: <span className="text-[#F5EBDD]/70">"latte"</span>,</p>
              <p className="pl-4">acucar: <span className="text-[#F5EBDD]/70">false</span>,</p>
              <p className="pl-4">humor: <span className="text-[#F5EBDD]/70">"produtivo"</span></p>
              <p>{'}'}</p>
              <p className="mt-3 text-[#C8853A]">▸ Pedido pronto em 3 min ☕</p>
            </div>
          </div>
        </div>
      </section>

    
  )
}

export default Home