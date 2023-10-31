import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__conteiner'>
        <p className='footer__text'>© 2023</p>
        <div className='footer__group-container'>
          <p className='footer__text'>Яндекс.Практикум</p>
          <p className='footer__text'>Github</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
