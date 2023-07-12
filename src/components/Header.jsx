import { useState } from "react"

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const dropdownContentCls = "p-2 block hover:bg-slate-700"
  const hamburgerCls = "my-1 block h-0.5 rounded-sm bg-white"

  return (
    <header className="flex justify-between bg-header text-white
    items-center">
      <a href="/" className="font-bold p-4 text-xl md:text-3xl">Grupo SIOTEC</a>

      <button className="h-5 w-5 md:hidden"
        onClick={() => setShowMenu(!showMenu)}>
        <span
          className={hamburgerCls}>
        </span>
        <span
          className={hamburgerCls}>
        </span>
        <span
          className={hamburgerCls}>
        </span>
      </button>

      <div className="hidden md:block">
        <ul className="flex items-center justify-center text-xl">
          <ul className="px-4 dropdown relative inline-block">

            <li className="cursor-pointer">Servicios</li>

            <ul className="dropdown-content hidden absolute z-10 shadow shadow-gray-800 bg-header border border-slate-700">
              <a href="/servicios/1" className={dropdownContentCls}>Refrigeración</a>
              <a href="/servicios/2" className={dropdownContentCls}>Mantenimiento</a>
              <a href="/servicios/3" className={dropdownContentCls}>Sistemas</a>
              <a href="/servicios/4" className={dropdownContentCls}>Seguridad</a>
            </ul>

          </ul>
          <a href="/trabajos" className="px-4">Trabajos</a>
          <a href="/contacto" className="px-4">Contacto</a>
        </ul>
      </div>

      <style jsx="true">
        {`.dropdown:hover .dropdown-content {
          display: block;
        }`}
      </style>
    </header>
  )
}