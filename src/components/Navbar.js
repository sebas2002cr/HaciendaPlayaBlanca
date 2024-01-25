import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const navbarRef = useRef(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleScroll = () => {
    if (navbarRef.current) {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbarRef.current.style.top = "0";
      } else {
        navbarRef.current.style.top = "-80px";
      }
      setPrevScrollpos(currentScrollPos);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', showButton);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav ref={navbarRef} className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='./images/HaciendaPlayaBlanca-Negro.png' style={{ width: '100%', height: 'auto', maxWidth:'40px' }}/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/listings'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Planos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contáctenos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
