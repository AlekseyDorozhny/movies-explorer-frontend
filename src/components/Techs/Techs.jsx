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
      <div className='techs__items'>
        <div className='techs__item'>
          <p className='techs__item-text'>HTML</p>
        </div>
        <div className='techs__item'>
          <p className='techs__item-text'>CSS</p>
        </div>
        <div className='techs__item'>
          <p className='techs__item-text'>JS</p>
        </div>
        <div className='techs__item'>
          <p className='techs__item-text'>React</p>
        </div>
        <div className='techs__item'>
          <p className='techs__item-text'>Git</p>
        </div>
        <div className='techs__item'>
          <p className='techs__item-text'>Express.js</p>
        </div>
        <div className='techs__item'>
          <p className='techs__item-text'>mongoDB</p>
        </div>
      </div>
    </section>
  )
}

export default Techs;
