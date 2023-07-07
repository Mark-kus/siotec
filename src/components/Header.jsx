import { useState } from "react"

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="flex justify-between p-6 bg-header text-white
    items-center">
      <a href="/" className="font-bold text-xl md:text-3xl">Grupo SIOTEC</a>

      <button className="h-5 w-5 md:hidden"
        onClick={() => setShowMenu(!showMenu)}>
        <span
          className={`my-1 block h-0.5 rounded-sm bg-white`}>
        </span>
        <span
          className={`my-1 block h-0.5 rounded-sm bg-white`}>
        </span>
        <span
          className={`my-1 block h-0.5 rounded-sm bg-white`}>
        </span>
      </button>

      <div className="hidden md:block">
        <ul className="flex items-center justify-center">
          <ul className="p-2 dropdown relative inline-block">

            <li className="cursor-pointer">Servicios</li>

            <ul className="dropdown-content hidden absolute z-10 shadow shadow-gray-900 bg-header">
              <a href="/servicios/1" className="p-2 block hover:bg-slate-800">Refrigeración</a>
              <a href="/servicios/2" className="p-2 block hover:bg-slate-800">Mantenimiento</a>
              <a href="/servicios/3" className="p-2 block hover:bg-slate-800">Sistemas</a>
              <a href="/servicios/4" className="p-2 block hover:bg-slate-800">Seguridad</a>
            </ul>

          </ul>
          <a href="/trabajos" className="p-2">Trabajos</a>
          <a href="/contacto" className="p-2">Contacto</a>
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