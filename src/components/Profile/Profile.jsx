import React from 'react';
import './Profile.css';

import Header from '../Header/Header';
function Profile({ loggedIn }) {
  return(
    <>
      <Header
      loggedIn = {loggedIn}
      />
      <div className='profile'>
        <h2 className='profile__greetings'>Привет, Виталий!</h2>
        <div className='profile__elements'>
          <p className='profile__element'>Имя</p>
          <p className='profile__element'>Виталий</p>
        </div>
        <div className='profile__elements'>
          <p className='profile__element'>E-mail</p>
          <p className='profile__element'>pochta@yandex.ru</p>
        </div>
        <p className='profile__link'>Редактировать</p>
        <p className='profile__link profile__link_type_red'>Выйти из аккаунта</p>
      </div>
    </>
  )
}

export default Profile;
