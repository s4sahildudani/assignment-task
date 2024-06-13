import React, { useState } from 'react'
import smartLightLogo from "../../images/smart_LightLogo.svg";
import './MyNavbar.css'
function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <img src={smartLightLogo} alt="Logo" />
        </div>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a className='navbarLinks' href="#home" onClick={toggleMenu}>Home</a>
          <a className='navbarLinks' href="#link1" onClick={toggleMenu}>Products</a>
          <a className='navbarLinks' href="#link2" onClick={toggleMenu}>Software Services</a>
          <button className="loginButtonNavbar">Login</button>
        </nav>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
      </header>
     
    </div>
  )
}

export default MyNavbar
