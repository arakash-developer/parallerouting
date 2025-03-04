import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-semibold items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-2xl tracking-wide">PARALLER</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white font-light">FIRST LINK</a>
          <a className="mr-5 hover:text-white font-light">SECOND LINK</a>
          <a className="mr-5 hover:text-white font-light">THIRD LINK</a>
          <a className="mr-5 hover:text-white font-light">FOURTH LINK</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

