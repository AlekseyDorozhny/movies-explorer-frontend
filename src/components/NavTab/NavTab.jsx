import React from 'react';
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
  return(
    <ul className='navTab'>
      <li className='navTab__item'><Link to="/#about-Project" className='navTab__button'>О проекте</Link></li>
      <li className='navTab__item'><Link to="/#techs" className='navTab__button'>Технологии</Link></li>
      <li className='navTab__item'><Link to="/#aboutMe" className='navTab__button'>Студент</Link></li>
    </ul>
  )
}

export default NavTab;
