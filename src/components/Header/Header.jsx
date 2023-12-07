import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation'

import { NavLink } from 'react-router-dom';

function Header({loggedIn, burgerStatus, onBurger}) {

  return(
    <header className='header'>
      <NavLink to='/' className="header__nav-link"><img className='header__logo' src= {headerLogo} alt='Логотип Movie Explorer'/></NavLink>
      <Navigation
      loggedIn={loggedIn}
      burgerStatus={burgerStatus}
      onBurger={onBurger}
      />
    </header>
  )
}

export default Header;
