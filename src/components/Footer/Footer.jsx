import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__text footer__text_type_year'>© 2023</p>
        <div className='footer__group-container'>
          <p className='footer__text footer__text_type_link'>Яндекс.Практикум</p>
          <p className='footer__text footer__text_type_link'>Github</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
