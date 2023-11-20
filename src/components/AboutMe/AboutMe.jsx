import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio'


function AboutMe() {
  return(
    <section className='aboutMe' id='aboutMe'>
      <h2 className='aboutMe__heading'>Студент</h2>
      <div className='aboutMe__container'>
        <div className='aboutMe__info'>
          <h3 className='aboutMe__name'>Алексей</h3>
          <h4 className='aboutMe__activity'>Фронтенд-разработчик, 26 лет</h4>
          <p className='aboutMe__about-me'>Родился в Томске. Имею образование и работаю по специальности инженер-конструктор химических и ядерных производств. О смене направления специальности в сторону IT задумался достаточно давно, подумал, что сейчас самое время! Так же я занимаюсь музыкой и очень люблю сноубординг.</p>
          <a className='aboutMe__link' href='https://github.com/AlekseyDorozhny' target='_blank' rel="noopener noreferrer">Github</a>
        </div>
        <div className='aboutMe__photo'></div>
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe;
