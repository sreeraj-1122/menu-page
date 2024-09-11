import React, { useState } from 'react';
import './Header.css'; 
import Logo from '../../assets/images/Logo.png';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-img" />
          <h1 className="logo-text"><span>DEEP</span> NET </h1>
        </div>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/">MENU</Link></li>
            <li><Link to="/reservation">MAKE A RESERVATION</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <IoMdMenu size={30} className='icon' />
        </div>
      </div>
    </header>
  );
};

export default Header;
