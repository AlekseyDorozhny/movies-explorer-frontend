import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return(
    <div className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__item-link' href='https://github.com/AlekseyDorozhny/how-to-learn' target='_blank' rel="noopener noreferrer">
            <div className='portfolio__item-name'>Статичный сайт</div>
            <p className='portfolio__item-icon'>↗</p>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__item-link' href='https://github.com/AlekseyDorozhny/russian-travel' target='_blank' rel="noopener noreferrer">
            <div className='portfolio__item-name'>Адаптивный сайт</div>
            <p className='portfolio__item-icon'>↗</p>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__item-link' href='https://github.com/AlekseyDorozhny/react-mesto-api-full-gha' target='_blank' rel="noopener noreferrer">
            <div className='portfolio__item-name'>Одностраничное приложение</div>
            <p className='portfolio__item-icon'>↗</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;
