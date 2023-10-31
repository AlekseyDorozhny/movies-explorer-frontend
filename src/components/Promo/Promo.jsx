import React from 'react';
import './Promo.css';
import photo from '../../images/myPhoto.png';

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
      <div className='promo__about promo__item'>
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
      <div className='promo__techs promo__item'>
      <h2 className='promo__heading promo__heading-type-tech'>Технологии</h2>
        <div className='promo__techs-heading-container'>
          <h3 className='promo__techs-title'>7 технологий</h3>
          <p className='promo__techs-subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
      <div className='promo__techs-items'>
        <div className='promo__techs-item'>
          <p className='promo__techs-item-text'>HTML</p>
        </div>
        <div className='promo__techs-item'>
          <p className='promo__techs-item-text'>CSS</p>
        </div>
        <div className='promo__techs-item'>
          <p className='promo__techs-item-text'>JS</p>
        </div>
        <div className='promo__techs-item'>
          <p className='promo__techs-item-text'>React</p>
        </div>
        <div className='promo__techs-item'>
          <p className='promo__techs-item-text'>Git</p>
        </div>
        <div className='promo__techs-item'>
          <p className='promo__techs-item-text'>Express.js</p>
        </div>
        <div className='promo__techs-item'>
          <p className='promo__techs-item-text'>mongoDB</p>
        </div>
      </div>
      </div>
      <div className='promo__student promo__item'>
        <h2 className='promo__heading'>Студент</h2>
        <div className='promo__student-container'>
          <div className='promo__student-info'>
            <h3 className='promo__student-name'>Алексей</h3>
            <h4 className='promo__student-activity'>Фронтенд-разработчик, 26 лет</h4>
            <p className='promo__student-about-me'>Родился в Томске. Имею образование и работаю по специальности инженер-конструктор химических и ядерных производств. О смене направления специальности в сторону IT задумался достаточно давно, подумал, что сейчас самое время! Так же я занимаюсь музыкой и очень люблю сноубординг.</p>
            <p className='promo__student-link'>Github</p>
          </div>
          <div className='promo__student-photo' alt='Фото резюме'></div>
        </div>
        <div className='promo_portfolio'>
          <h3 className='promo_portfolio-heading'>Портфолио</h3>
          <div className='promo_portfolio-item'>
            <div className='promo_portfolio-item-name'>Статичный сайт</div>
            <p className='promo_portfolio-item-icon'>↗</p>
          </div>
          <div className='promo_portfolio-item'>
            <div className='promo_portfolio-item-name'>Адаптивный сайт</div>
            <p className='promo_portfolio-item-icon'>↗</p>
          </div>
          <div className='promo_portfolio-item'>
            <div className='promo_portfolio-item-name'>Одностраничное приложение</div>
            <p className='promo_portfolio-item-icon'>↗</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo;
