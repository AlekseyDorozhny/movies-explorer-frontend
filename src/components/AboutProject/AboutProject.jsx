import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return(
      <section className='about-Project' id="about-Project">
        <h2 className='about-Project__heading'>О проекте</h2>
          <div className='about-Project__items'>
            <div className='about-Project__item'>
              <p className='about-Project__item-title'>Дипломный проект включал 5 этапов</p>
              <p className='about-Project__item-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className='about-Project__item'>
              <p className='about-Project__item-title'>На выполнение диплома ушло 5 недель</p>
              <p className='about-Project__item-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
          </div>
          <div className='about-Project__plank'>
            <p className='about-Project__plank-text about-Project__plank-text_type_green'>1 неделя</p>
            <p className='about-Project__plank-text about-Project__plank-text_type_grey'>4 недели</p>
            <p className='about-Project__plank-subtext'>Back-end</p>
            <p className='about-Project__plank-subtext'>Front-end</p>
          </div>
      </section>
  )
}

export default AboutProject;
