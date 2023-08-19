import { useState } from "react"
import Navbar from "./Navbar"
import title from '/siotec.svg'

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true)

  const hamburgerCls = "my-1 block h-0.5 rounded-sm bg-white transition-all duration-500"

  return (
    <header className="md:flex md:justify-between fixed w-full z-10 bg-light-header-background dark:bg-dark-header-background text-light-header-text shadow">

      <div className="flex justify-between items-center px-4 py-2">

        <a rel="prefetch" href="#" className="w-1/2 min-w-[150px] max-w-[200px]"><img src={title} alt="website name" /></a>

        <button
          className="h-5 w-5 mr-4 md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className={`${showMenu ? "rotate-45 translate-y-1.5" : ""} ${hamburgerCls}`}></span>
          <span className={`${showMenu ? "opacity-0" : ""} ${hamburgerCls}`}></span>
          <span className={`${showMenu ? "-rotate-45 -translate-y-1.5" : ""} ${hamburgerCls}`}></span>
        </button>
      </div>

      <aside
        className={`right-0 top-0 z-10 flex w-7/12
										flex-col overflow-y-hidden duration-150 bg-light-header-background
                    dark:bg-dark-header-background
										ease-linear	${showMenu ? 'translate-x-0 h-screen w-full opacity-100' : 'translate-x-full h-0 w-0 opacity-0'}
                    md:h-auto md:relative md:overflow-visible md:w-auto md:hidden`}>

        <div className={showMenu ? "block" : "hidden"}>
          <Navbar />
        </div>

      </aside>

      <div className="hidden md:block">
        <Navbar />
      </div>
    </header>
  )
}

export default Header