import type React from "react"

const Navbar: React.FC = () => {

    return (
        <nav className="flex flex-col md:flex-row items-center justify-center text-xl md:text-lg">

            <a rel="prefetch-intent" href="/servicios" className="p-4 md:px-4">Servicios</a>
            <a rel="prefetch-intent" href="/nosotros" className="p-4 md:px-4">Nosotros</a>
            <a rel="prefetch" href="/contacto" className="p-4 md:px-4">Contacto</a>
        </nav>
    )
}

export default Navbar