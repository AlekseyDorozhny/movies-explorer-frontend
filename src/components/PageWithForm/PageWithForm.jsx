import React from "react";
import './PageWithForm.css';
import headerLogo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom';

function PageWithForm({name, heading, children, buttonText, subtitleText, linkText, linkPath, onSubmit}) {
  return (
    <div className="auth__container">
      <NavLink to='/' className='auth__logo-link'>
        <img className='header__logo' src= {headerLogo} alt='Логотип Movie Explorer'/>
      </NavLink>
      <h2 className="auth__heading">{heading}</h2>
      <form className="auth__form" name={`${name}Form`} method="post" onSubmit={onSubmit}>
        <div className="auth__inputs-container">
          {children}
        </div>
        <button type='submit' className={`auth__save-button login__save-button_area_${name}`} aria-label={`${name}`}>{buttonText}</button>
        <p className="auth__subtitle">{subtitleText} <NavLink to={linkPath} className="auth__subtitle auth__subtitle_type_link">{linkText}</NavLink></p>
      </form>
    </div>
  )
}

export default PageWithForm;
