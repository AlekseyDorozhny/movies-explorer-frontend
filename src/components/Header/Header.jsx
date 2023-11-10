import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Header({loggedIn}) {
  return(
    <header className='header'>
      {loggedIn?
        <nav className='header__nav-container'>
          <NavLink to='/' className="header__nav-link-to-main"><img className='header__logo' src= {headerLogo} alt='Логотип Movie Explorer'/></NavLink>

          <div className='header__links-container'>
            <NavLink to='/movies' className={'header__link'}>Фильмы</NavLink>
            <NavLink to='/saved-movies' className={'header__link'}>Сохранённые фильмы</NavLink>
          </div>
          <NavLink to='/profile' className={'header__button'}>
            <p className='header__button-link'>Аккаунт</p>
          </NavLink>
        </nav>
      :
      <nav className='header__nav-container'>
        <img className='header__logo' src= {headerLogo} alt='Логотип Movie Explorer'/>
        <div className='header__auth-link-container'>
          <NavLink to='/signup' className={'header__auth-button'}>Регистрация</NavLink>
          <NavLink to='/signin' className={'header__auth-button header__auth-button_type_green'}>Войти</NavLink>
        </div>
      </nav>
      }
    </header>
  )
}

export default Header;
