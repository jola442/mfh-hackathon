import { useState, useContext } from 'react'
import rccgLogo from "../assets/images/rccgLogo.png"
import { hamburger } from "../assets/icons"
import { navLinks } from '../constants'
import { FaBars, FaTimes } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import axios from "axios"


const NavItems = ({isMobile}) => {
    const navigate = useNavigate();
    // console.log(localStorage.getItem("user"))
    const {user, setUser} = useContext(UserContext)

    //turns user into a boolean and checks if logged in
    const isLoggedIn = !!localStorage.getItem("user")

    const handleSignOut = async () => {
      try {
          await axios.post('http://localhost:5000/logout', {}, 
            // { 
            //   withCredentials: true, // Include cookies if needed}
            );
          setUser(null);
          localStorage.removeItem('user'); // Clear local storage if used
          navigate('/'); // Redirect to home or login page
      } catch (error) {
          console.error('Failed to log out:', error);
      }
  };
  
    return (
        <ul className={isMobile?"mobile-nav": "desktop-nav"}>
        {navLinks.map( (item) => {
            if (item.label === "Sign In"){
              return <li key={item.label}>
              <a href={isLoggedIn?"/":item.href} 
              onClick={(e) => {
                if(isLoggedIn){
                  e.preventDefault();
                  handleSignOut()
                }

              }} className='font-fjalla leading-normal text-3xl text-primary'>
                  {isLoggedIn?"Sign Out": item.label}
              </a>
          </li>
            }

            if (item.label === "Admin" && !user?.admin) return null
            return <li key={item.label}>
            <a href={item.href} className='font-fjalla leading-normal text-3xl text-primary'>
                {item.label}
            </a>
            </li>
            }
          )}
    
    </ul>
    )
}

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)
  

    return (
        <header className="relative padding-x py-8 z-10 w-full">
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