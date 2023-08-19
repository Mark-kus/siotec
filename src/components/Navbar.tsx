import type React from "react"

const Navbar: React.FC = () => {

    return (
        <nav className="flex flex-col md:flex-row place-items-center text-3xl md:text-xl">
            <a href="#servicios" className="p-4 md:px-4">Servicios</a>
            <a href="#nosotros" className="p-4 md:px-4">Nosotros</a>
            <a href="#contacto" className="p-4 md:px-4">Contacto</a>
        </nav>
    )
}

export default Navbar