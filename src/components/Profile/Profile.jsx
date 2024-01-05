import React from 'react';
import './Profile.css';

import Header from '../Header/Header';
function Profile({ loggedIn, burgerStatus, onBurger, onLogoutClick, name, email }) {
  return(
    <main>
      <Header
      loggedIn = {loggedIn}
      burgerStatus={burgerStatus}
      onBurger={onBurger}
      />
      <div className='profile'>
        <h1 className='profile__greetings'>{`Привет, ${name}!`}</h1>
        <div className='profile__elements'>
          <p className='profile__element'>Имя</p>
          <p className='profile__element'>{name}</p>
        </div>
        <div className='profile__elements'>
          <p className='profile__element'>E-mail</p>
          <p className='profile__element'>{email}</p>
        </div>
        <p className='profile__link'>Редактировать</p>
        <button  type='button' className='profile__link profile__link_type_red' onClick={onLogoutClick}>Выйти из аккаунта</button>
      </div>
    </main>
  )
}

export default Profile;
