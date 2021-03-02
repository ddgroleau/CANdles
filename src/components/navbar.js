import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button'
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
                       <i className="fas fa-glass-whiskey"></i>
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                  </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                            <Link to="/sustainability" className="nav-links" onClick={closeMobileMenu}>
                                Sustainability
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact</Button>}
              </div>
          </nav>

        </>
    )
}

export default Navbar
