import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='./images/HaciendaPlayaBlanca-Negro.png' style={{ width: '100px', height: 'auto' }}/>
            </Link>
          </div>
          <small class='website-rights'>Hacienda Playa Blanca © 2024</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;