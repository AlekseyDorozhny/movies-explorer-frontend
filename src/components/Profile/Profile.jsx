import React from 'react';
import './Profile.css';

import Header from '../Header/Header';

import {CurrentUserContext} from '../../contexts/CurrentUserContext.js'

function Profile({ loggedIn, burgerStatus, onBurger, onLogoutClick, updateProfile}) {

  const currentUser = React.useContext(CurrentUserContext)

  const [userName, changeUserName] = React.useState('');
  const [userEmail, changeUserEmail] = React.useState('');
  const [isEdit, changeEditStatus] = React.useState(false);
  const [nameInput, setNameInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [isInputsWithErrors, changeInputsWithErrors] = React.useState(false);

  const buttonClassName = (
    isInputsWithErrors? 'profile__button profile__button_inactive' : 'profile__button'
  );

  function handleNameInputChange(e) {
    setNameInput(e.target.value);
  }

  function handleEmailInputChange(e) {
    setEmailInput(e.target.value);
  }

  React.useEffect(() => {
    console.log(currentUser)
    if (currentUser) {
      changeUserName(currentUser.name)
      changeUserEmail(currentUser.email)
    }
  }, [currentUser])

  function startEditProfileHandler(e) {
    e.preventDefault();
    changeEditStatus(true);
  }

  function editProfileHandler(e) {
    e.preventDefault();
    updateProfile(nameInput, emailInput)
    changeEditStatus(false);

  }

  return(
    <main>
      <Header
      loggedIn = {loggedIn}
      burgerStatus={burgerStatus}
      onBurger={onBurger}
      />
      <form className='profile__form' onSubmit={editProfileHandler}>
        <div className='profile'>
          <h1 className='profile__greetings'>{`Привет, ${userName}!`}</h1>
          <label className='profile__elements'>
            <p className='profile__element'>Имя</p>
            {(isEdit)?
              <input className='profile__element'
              defaultValue={userName}
              onChange={handleNameInputChange}
              required
              />
              :
              <p className='profile__element'>{userName}</p>
            }
          </label>
          <label className='profile__elements'>
            <p className='profile__element'>E-mail</p>
            {(isEdit)?
              <input className='profile__element'
              defaultValue={userEmail}
              onChange={handleEmailInputChange}
              required
              />
              :
              <p className='profile__element'>{userEmail}</p>
            }
          </label>
          {(isEdit)?
            <button type='submit'
            className={buttonClassName}
            disabled = {isInputsWithErrors}
            >Сохранить</button>
            :
            <>
              <button type='button'
              className='profile__link'
              onClick={startEditProfileHandler}
              >Редактировать</button>
              <button  type='button'
              className='profile__link profile__link_type_red'
              onClick={onLogoutClick}
              >Выйти из аккаунта</button>
            </>
          }
        </div>
      </form>
    </main>
  )
}

export default Profile;
