import { useState } from "react"
import Navbar from "./Navbar"
import title from '/siotec.svg?url'

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const hamburgerCls = "block rounded-sm bg-white transition-all duration-400 h-0.5 w-5"

  return (
    <header className="md:flex md:justify-between fixed w-full z-10 bg-light-header-background dark:bg-dark-header-background text-light-header-text shadow">

      <div className="flex justify-between items-center px-4">

        <a rel="prefetch" href="#" className="w-1/2 h-12 md:h-auto min-w-[150px] max-w-[200px]">
          <img className="h-12 md:h-auto" src={title} alt={'website name'}/>
        </a>

        <button
          className="h-5 w-5 md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className={`${showMenu ? "rotate-45 translate-y-1.5 :" : ""} ${hamburgerCls}`}></span>
          <span className={`${showMenu ? "opacity-0 mt-1" : "mt-1"} ${hamburgerCls}`}></span>
          <span className={`${showMenu ? "-rotate-45 -translate-y-1.5 mt-1" : "mt-1"} ${hamburgerCls}`}></span>
        </button>
      </div>

      <aside
        className={`right-0 top-0 z-10 flex
										flex-col overflow-y-hidden duration-150 bg-light-header-background
                    dark:bg-dark-header-background w-full
										ease-linear	${showMenu ? 'h-screen opacity-100' : 'h-0 opacity-0'}
                    md:h-auto md:relative md:overflow-visible md:w-auto md:hidden`}>

        <div className={showMenu ? "h-1/2 block" : "hidden"}>
          <Navbar setShowMenu={setShowMenu} />
        </div>

      </aside>

      <div className="h-1/2 hidden md:block">
        <Navbar setShowMenu={setShowMenu} />
      </div>
    </header>
  )
}

export default Header