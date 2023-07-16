import { useState } from "react"
import Navbar from "./Navbar"

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const hamburgerCls = "my-1 block h-0.5 rounded-sm bg-white"

  return (
    <header className="md:flex md:justify-between bg-light-header-background dark:bg-dark-header-background text-light-header-text
     shadow">

      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="font-bold text-xl md:text-3xl">
          <a href="/" className="text-current">Grupo SIOTEC</a>
        </h1>

        <button
          className="h-5 w-5 mr-4 md:hidden"
          onClick={() => setShowMenu(true)}
        >
          <span className={hamburgerCls}></span>
          <span className={hamburgerCls}></span>
          <span className={hamburgerCls}></span>
        </button>
      </div>

      <aside
        className={`absolute right-0 top-0 z-10 flex h-screen w-7/12
										flex-col overflow-y-hidden duration-300 bg-light-header-background
                    dark:bg-dark-header-background
										ease-linear	${showMenu ? 'translate-x-0' : 'translate-x-full'}
                    md:h-auto md:relative md:overflow-visible md:w-auto md:hidden`}>
        <button
          className="block md:hidden px-6 py-6"
          onClick={() => setShowMenu(false)}>
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976
             8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498
              17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825
               8.55 19.45 8.175 19 8.175Z" />
          </svg>
        </button>

        <Navbar />
      </aside>

      <div className="hidden md:block">
        <Navbar />
      </div>
    </header>
  )
}

export default Header