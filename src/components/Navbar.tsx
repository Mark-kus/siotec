import type React from "react"

interface NavbarProps {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setShowMenu }) => {

    return (
        <nav className="flex flex-col h-full justify-center items-center md:flex-row text-3xl md:text-xl">
            <a onClick={() => setShowMenu(false)} href="#servicios" className="p-4 my-5 md:my-0 md:px-4">Servicios</a>
            <a onClick={() => setShowMenu(false)} href="#nosotros" className="p-4 my-5 md:my-0 md:px-4">Nosotros</a>
            <a onClick={() => setShowMenu(false)} href="#contacto" className="p-4 my-5 md:my-0 md:px-4">Contacto</a>
        </nav>
    )
}

export default Navbar