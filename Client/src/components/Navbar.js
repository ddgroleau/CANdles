import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button'
import '../assets/navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
      window.innerWidth <= 960 ? setButton(false) : setButton(true);
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                      CANdles
                  </Link>
                 
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                  </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href="https://www.instagram.com/can_dles5280/" className="nav-links" onClick={closeMobileMenu}>
                            <i className="fab fa-instagram fa-2x"></i>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="https://www.etsy.com/shop/CANdles5280" className="nav-links" onClick={closeMobileMenu}>
                            <i className="fab fa-etsy fa-2x"></i>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button page="/contact" buttonStyle='btn--outline'>Contact</Button>}
              </div>
          </nav>

        </>
    )
}

export default Navbar
