import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';

function Header() {
  return(
    <header className='header'>
      <img className='header__logo' src= {headerLogo} alt='Логотип Movie Explorer'/>
      <div className='header__links-container'>
        <p className='header__link'>Фильмы</p>
        <p className='header__link'>Сохранённые фильмы</p>
      </div>
      <button className='header__button' type='button' aria-label='переход в аккаунт'>Аккаунт</button>
    </header>
  )
}

export default Header;
