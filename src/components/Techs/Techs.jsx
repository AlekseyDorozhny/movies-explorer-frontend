import React from 'react';
import './Techs.css';

function Techs() {
  return(
    <section className='techs' id='techs'>
      <h2 className='techs__heading'>Технологии</h2>
        <div className='techs__heading-container'>
          <h3 className='techs__title'>7 технологий</h3>
          <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
      <ul className='techs__items'>
        <li className='techs__item'>
          <p className='techs__item-text'>HTML</p>
        </li>
        <li className='techs__item'>
          <p className='techs__item-text'>CSS</p>
        </li>
        <li className='techs__item'>
          <p className='techs__item-text'>JS</p>
        </li>
        <li className='techs__item'>
          <p className='techs__item-text'>React</p>
        </li>
        <li className='techs__item'>
          <p className='techs__item-text'>Git</p>
        </li>
        <li className='techs__item'>
          <p className='techs__item-text'>Express.js</p>
        </li>
        <li className='techs__item'>
          <p className='techs__item-text'>mongoDB</p>
        </li>
      </ul>
    </section>
  )
}

export default Techs;
