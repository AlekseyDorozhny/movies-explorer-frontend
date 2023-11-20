import React from 'react';
import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return(
      <div className='page-not-found'>
        <h1 className='page-not-found__heading'>404</h1>
        <p className='page-not-found__text'>Страница не найдена</p>
        <NavLink to='/' className={'page-not-found__link'}>Назад</NavLink>
      </div>
  )
}

export default PageNotFound;
