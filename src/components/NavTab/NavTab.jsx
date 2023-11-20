import React from 'react';
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
  return(
    <nav className='navTab'>
      <ul className='navTab__list'>
        <li className='navTab__item'><Link to="/#about-Project" className='navTab__button'>О проекте</Link></li>
        <li className='navTab__item'><Link to="/#techs" className='navTab__button'>Технологии</Link></li>
        <li className='navTab__item'><Link to="/#aboutMe" className='navTab__button'>Студент</Link></li>
      </ul>
    </nav>

  )
}

export default NavTab;
