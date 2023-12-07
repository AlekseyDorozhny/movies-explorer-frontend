import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

function Navigation({loggedIn, burgerStatus, onBurger}) {

  const burgerStatusClassName = (
    burgerStatus? 'navigation__burger-container' : 'navigation__burger-container navigation__burger-container_closed'
  );

  return(
    <>
      {loggedIn?
        <nav className='navigation'>
          <div className= {burgerStatusClassName}>
            <button className='navigation__close-button' type='button' onClick={() =>{ onBurger(false)}}></button>
              <div className='navigation__links-container'>
                <NavLink to='/'
                className={({ isActive }) => (isActive ? 'navigation__link navigation__link_active navigation__link_type_shifty' : 'navigation__link navigation__link_type_shifty')}
                onClick={() =>{ onBurger(false)}}
                >Главная</NavLink>
                <NavLink to='/movies'
                className={({ isActive }) => (isActive ? 'navigation__link navigation__link_active' : 'navigation__link')}
                onClick={() =>{ onBurger(false)}}
                >Фильмы</NavLink>
                <NavLink to='/saved-movies'
                className={({ isActive }) => (isActive ? 'navigation__link navigation__link_active' : 'navigation__link')}
                onClick={() =>{ onBurger(false)}}
                >Сохранённые фильмы</NavLink>
              </div>
              <NavLink to='/profile' className={'navigation__button'}>
                <p className='navigation__button-link'>Аккаунт</p>
              </NavLink>
          </div>
          <button className='navigation__burger-container-icon' type='button' onClick={() =>{ onBurger(true)}}></button>
        </nav>
      :
      <nav className='navigation'>
        <div className='navigation__auth-link-container'>
          <NavLink to='/signup' className={'navigation__auth-button'}>Регистрация</NavLink>
          <NavLink to='/signin' className={'navigation__auth-button navigation__auth-button_type_green'}>Войти</NavLink>
        </div>
      </nav>
      }
    </>
  )
}

export default Navigation;
