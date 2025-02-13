import { useState } from 'react'
import rccgLogo from "/assets/images/rccgLogo.png"
import { navLinks } from '../constants'
import { FaBars, FaTimes } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'


const NavItems = ({isMobile}) => {
    const navigate = useNavigate();

    return (
      <>
        <ul className={isMobile?"mobile-nav": "desktop-nav"}>
        {navLinks.map( (item) => {
            return <li key={item.label}>
            <a href={item.href} className='font-fjalla leading-normal text-3xl text-primary'>
                {item.label}
            </a>
            </li>
            }
          )}
    
        </ul>
      </>

    )
}

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)
  
    return (
        <header className="relative padding-x py-8 z-10 w-full">
          <nav className="flex justify-between items-center max-container w-full">
            <a href="/">
              <img src={rccgLogo} alt="Logo" className='lg:w-24 w-16'/>
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