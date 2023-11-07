import React from 'react';
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
  return(
    <div className='navTab'>
      <button className='navTab__button'>
        <Link to="/#about-Project" className='navTab__link'>О проекте</Link>
      </button>
      <button className='navTab__button'>
        <Link to="/#techs" className='navTab__link'>Технологии</Link>
      </button>
      <button className='navTab__button'>
        <Link to="/#aboutMe" className='navTab__link'>Студент</Link>
      </button>
  </div>
  )
}

export default NavTab;
