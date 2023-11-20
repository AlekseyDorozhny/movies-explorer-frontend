import React from 'react';
import './Promo.css';

import NavTab from '../NavTab/NavTab'

function Promo() {
  return(
      <section className='promo'>
        <h2 className='promo-text'>Учебный проект студента факультета Веб-разработки.</h2>
        <NavTab />
      </section>
  )
}

export default Promo;
