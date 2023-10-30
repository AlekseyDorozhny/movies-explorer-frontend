import React from 'react';
import './Promo.css';

function Promo() {
  return(
    <div className='promo'>
      <div className='promo__banner'>
        <h2 className='promo__banner-text'>Учебный проект студента факультета Веб-разработки.</h2>
        <div className='promo__banner-links'>
          <button className='promo__banner-link-button'>О проекте</button>
          <button className='promo__banner-link-button'>Технологии</button>
          <button className='promo__banner-link-button'>Студент</button>
        </div>
      </div>
      <div className='promo__about'>
        <h2 className='promo__heading'>О проекте</h2>
          <div className='promo__about-items'>
            <div className='promo__about-item'>
              <p className='promo__about-item-title'>Дипломный проект включал 5 этапов</p>
              <p className='promo__about-item-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className='promo__about-item'>
              <p className='promo__about-item-title'>На выполнение диплома ушло 5 недель</p>
              <p className='promo__about-item-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
          </div>
          <div className='promo__about-plank'>
            <p className='promo__about-plank-text promo__about-plank-text_type_green'>1 неделя</p>
            <p className='promo__about-plank-text promo__about-plank-text_type_grey'>4 недели</p>
            <p className='promo__about-plank-subtext'>Back-end</p>
            <p className='promo__about-plank-subtext'>Front-end</p>
          </div>
      </div>
    </div>
  )
}

export default Promo;
