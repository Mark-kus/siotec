import type React from "react"
import servicios from '../seeds/servicios'

const Navbar: React.FC = () => {

    const dropdownContentCls = "p-2 hover:bg-slate-700 hover:text-white transition-colors text-sm float-left w-full"

    return (
        <nav className="flex flex-col md:flex-row items-center justify-center text-xl md:text-lg">
            <ul className="p-4 md:px-4 dropdown relative inline-block">

                <li className="cursor-pointer">Servicios</li>

                <ul className="dropdown-content md:columns-2 gap-0 hidden absolute -right-5 md:-right-24 z-10 shadow-lg bg-light-header-background border border-light-header-border dark:bg-dark-header-background dark:border-dark-header-border">
                    {servicios.map(servicio => {
                        return <li key={servicio.id}><a rel="prefetch-intent" href={`/servicios/${servicio.id}`} className={dropdownContentCls}>{servicio.title}</a></li>
                    })}
                </ul>

            </ul>
            <a rel="prefetch-intent" href="/trabajos" className="p-4 md:px-4">Trabajos</a>
            <a rel="prefetch" href="/contacto" className="p-4 md:px-4">Contacto</a>
        </nav>
    )
}

export default Navbar