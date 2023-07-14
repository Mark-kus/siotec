import type React from "react"

const Navbar: React.FC = () => {

    const dropdownContentCls = "p-2 block hover:bg-slate-700"

    return (
        <nav className="flex flex-col md:flex-row items-center justify-center text-2xl md:text-xl">
            <ul className="p-4 md:px-4 dropdown relative inline-block">

                <li className="cursor-pointer">Servicios</li>

                <ul className="dropdown-content hidden absolute -right-7 z-10 shadow shadow-gray-800 bg-light-header-background border border-light-header-border dark:bg-dark-header-background dark:border-dark-header-border">
                    <li><a href="/servicios/1" className={dropdownContentCls}>Refrigeración</a></li>
                    <li><a href="/servicios/2" className={dropdownContentCls}>Mantenimiento</a></li>
                    <li><a href="/servicios/3" className={dropdownContentCls}>Sistemas</a></li>
                    <li><a href="/servicios/4" className={dropdownContentCls}>Seguridad</a></li>
                </ul>

            </ul>
            <a href="/trabajos" className="p-4 md:px-4">Trabajos</a>
            <a href="/contacto" className="p-4 md:px-4">Contacto</a>
        </nav>
    )
}

export default Navbar