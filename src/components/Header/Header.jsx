import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import {Route, Routes, useNavigate} from 'react-router-dom';

function Header() {
  return(
    <header className='header'>
      <img className='header__logo' src= {headerLogo} alt='Логотип Movie Explorer'/>
      {/* <div className='header__links-container'>
        <p className='header__link'>Фильмы</p>
        <p className='header__link'>Сохранённые фильмы</p>
      </div>
      <button className='header__button' type='button' aria-label='переход в аккаунт'>Аккаунт</button> */}
      <div className='header__auth-link-container'>
        <button className='header__auth-button' type='button' aria-label='переход в регистрацию'>Регистрация</button>
        <button className='header__auth-button header__auth-button_type_green' type='button' aria-label='переход на страницу входа'>Войти</button>
      </div>
    </header>
  )
}

export default Header;
