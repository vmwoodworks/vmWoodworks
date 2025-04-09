import '../css/navbar.css';
import logoSVG from '/assets/logo.svg';
import footerLogo from '/assets/footer_logo.jpg';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='navbar-div'>
        <nav>
          <Link to="/" className="logo-link desktop-only">
            <img id='logo-img' src={logoSVG} alt="VM Woodworks Logo"></img>
          </Link>
          <Link to="/" className="mobile-logo-link">
            <img id='mobile-logo-img' src="/assets/footer_logo.jpg" alt="VM Woodworks Mobile Logo"></img>
          </Link>
          <div id='brand-text'>
            <h1><span>VM</span> WOODWORKS</h1>
            <div>
              <p id='motto'>Kitchens and Cabinets | 267-379-3140</p>
            </div>
          </div>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className={`burger-bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`burger-bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`burger-bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </nav>
        <div id='nav-links-menu' className={menuOpen ? 'open' : ''}>
          <ul>
            <Link to='/' className='links' onClick={toggleMenu}>
              <li>Home</li>
            </Link>
            <Link to='/portfolio' className='links' onClick={toggleMenu}>
              <li>Portfolio</li>
            </Link>
            <Link to='/about' className='links' onClick={toggleMenu}>
              <li>About</li>
            </Link>
            <Link to='/contact' className='links' onClick={toggleMenu}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}