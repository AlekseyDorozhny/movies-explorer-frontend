import React from 'react';
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
  return(
    <div className='navTab'>
      <Link to="/#about-Project" className='navTab__button'>О проекте</Link>
      <Link to="/#techs" className='navTab__button'>Технологии</Link>
      <Link to="/#aboutMe" className='navTab__button'>Студент</Link>
    </div>
  )
}

export default NavTab;
