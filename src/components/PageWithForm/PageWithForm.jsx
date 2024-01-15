import React from "react";
import './PageWithForm.css';
import headerLogo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom';

function PageWithForm({name, heading, children, buttonText, subtitleText, linkText, linkPath, onSubmit, isValid, resError}) {

  React.useEffect(() => {
    console.log(resError[name])
  }, [resError])

  return (
    <main className="auth">
      <NavLink to='/' className='auth__logo-link'>
        <img className='auth__logo' src= {headerLogo} alt='Логотип Movie Explorer'/>
      </NavLink>
      <h1 className="auth__heading">{heading}</h1>
      <form
      className="auth__form"
      name={`${name}Form`}
      method="post"
      onSubmit={onSubmit}
      >
        <div className="auth__inputs-container">
          {children}
        </div>
        <span className="auth__res-error">
          {resError[name]? 'a'

          : ''}
        </span>
        <button
        type='submit'
        className={`auth__save-button ${!isValid && 'auth__save-button_disabled'}`}
        aria-label={`${name}`}
        disabled={!isValid}
        >
          {buttonText}</button>
        <p className="auth__subtitle">{subtitleText} <NavLink to={linkPath} className="auth__subtitle-link">{linkText}</NavLink></p>
      </form>
    </main>
  )
}

export default PageWithForm;
