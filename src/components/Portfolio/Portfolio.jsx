import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return(
    <div className='portfolio'>
        <h3 className='portfolio__heading'>Портфолио</h3>
        <div className='portfolio__item'>
          <div className='portfolio__item-name'>Статичный сайт</div>
          <p className='portfolio__item-icon'>↗</p>
        </div>
        <div className='portfolio__item'>
          <div className='portfolio__item-name'>Адаптивный сайт</div>
          <p className='portfolio__item-icon'>↗</p>
        </div>
        <div className='portfolio__item'>
          <div className='portfolio__item-name'>Одностраничное приложение</div>
          <p className='portfolio__item-icon'>↗</p>
        </div>
      </div>
  )
}

export default Portfolio;
