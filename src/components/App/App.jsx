import React from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import StandartPage from "../StandartPage/StandartPage";
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

import mainApi from "../../utils/MainApi";

function App() {
  const [loggedIn, changeLoggedStatus] = React.useState(false);
  const [burgerStatus, onBurger] = React.useState(false);

  React.useEffect(() => {
    console.log(burgerStatus)
  },[burgerStatus])
    const navigate = useNavigate();

  function tokenCheck() {
    console.log('проверяю токен')
    console.log(document.cookie)
    console.log(localStorage.getItem('jwt'));
    if (localStorage.getItem('jwt')){
      mainApi.tokenCheck()
      .then((res)=> {
        changeLoggedStatus(true)
        navigate('/', {replace: true})
        return
      })
        .catch((err) => {console.log(err)})
    }
  }

  function handleRegisterSubmit({name, email, password}) {
    console.log('регистрирую')
    mainApi.registration({name, email, password}).then(() => {
      navigate('/signin', {replace: true});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleLoginSubmit({email, password}) {
    console.log('захожу')
    mainApi.login({email, password}).then((res) => {
      console.log(res)
      if (res){
        tokenCheck()
      }
      console.log("Что-то не так с токеном")
    })
    .catch((err) => {console.log(err)})
  }

  function handleLogoutSubmit() {
    console.log('выхожу')
    changeLoggedStatus(false);
    navigate('/', {replace: true});
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'
        element={<StandartPage
          element={Main}
          loggedIn={loggedIn}
          burgerStatus={burgerStatus}
          onBurger={onBurger}
        />}
        />
        <Route path='/movies'
        element={<StandartPage
          element={Movies}
          loggedIn={loggedIn}
          burgerStatus={burgerStatus}
          onBurger={onBurger}
        />}
        />
        <Route path='/saved-movies'
        element={<StandartPage
          element={SavedMovies}
          loggedIn={loggedIn}
          burgerStatus={burgerStatus}
          onBurger={onBurger}
        />}
        />
        <Route path='/profile'
        element={<Profile
        loggedIn={loggedIn}
        burgerStatus={burgerStatus}
        onBurger={onBurger}
        onLogoutClick={handleLogoutSubmit}
        />}
        />
        <Route path='/signin'
        element={<Login
        onSubmit={handleLoginSubmit}
        />}
        />
        <Route path='/signup'
        element={<Register
        onSubmit={handleRegisterSubmit}
        />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;


