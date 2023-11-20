import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__text footer__text_type_year'>© 2023</p>
        <div className='footer__group-container'>
          <a className='footer__text footer__text_type_link' href='https://practicum.yandex.ru' target='_blank' rel="noopener noreferrer">Яндекс.Практикум</a>
          <a className='footer__text footer__text_type_link' href='https://github.com' target='_blank' rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
