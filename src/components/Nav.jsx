import React, { useState } from 'react'
import rccgLogo from "../assets/images/rccgLogo.png"
import { hamburger } from "../assets/icons"
import { navLinks } from '../constants'
import { FaBars, FaTimes } from "react-icons/fa"

const NavItems = ({isMobile}) => {
    return (
        /* max-var applies to screens smaller than var */
        <ul className={isMobile?"mobile-nav": "desktop-nav"}>
        {navLinks.map( (item) => (
            <li key={item.label}>
                <a href={item.href} className='font-fjalla leading-normal text-3xl text-primary'>
                    {item.label}
                </a>
            </li>
        ))}
    </ul>
    )
}

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false); // Force menu to close
    
    // function toggleMenu(){
    //     setIsOpen( (prevValue) => !prevValue)
    // }

    return (
        <header className="absolute padding-x py-8 z-10 w-full">
          <nav className="flex justify-between items-center max-container w-full">
            <a href="/">
              <img src={rccgLogo} alt="Logo" width={120} height={100} />
            </a>
    
            <NavItems isMobile={false} />
    
            <div className="hidden max-lg:block">
              {isOpen ? (
                <FaTimes className="w-10 h-10 text-primary" onClick={toggleMenu} />
              ) : (
                <FaBars className="w-10 h-10 text-primary" onClick={toggleMenu} />
              )}
            </div>
          </nav>
    
          <div className={`nav-container ${isOpen ? 'open' : ''}`}>
            <nav className="p-5">
              <NavItems isMobile={true} closeMenu/>
            </nav>
          </div>
        </header>    
  )
}

export default Nav