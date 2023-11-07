import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio'


function AboutMe() {
  return(
    <div className='aboutMe' id='aboutMe'>
      <h2 className='aboutMe__heading'>Студент</h2>
      <div className='aboutMe__container'>
        <div className='aboutMe__info'>
          <h3 className='aboutMe__name'>Алексей</h3>
          <h4 className='aboutMe__activity'>Фронтенд-разработчик, 26 лет</h4>
          <p className='aboutMe__about-me'>Родился в Томске. Имею образование и работаю по специальности инженер-конструктор химических и ядерных производств. О смене направления специальности в сторону IT задумался достаточно давно, подумал, что сейчас самое время! Так же я занимаюсь музыкой и очень люблю сноубординг.</p>
          <p className='aboutMe__link'>Github</p>
        </div>
        <div className='aboutMe__photo' alt='Фото резюме'></div>
      </div>
      <Portfolio />
    </div>
  )
}

export default AboutMe;
