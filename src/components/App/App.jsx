import React, { useCallback } from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';

import './App.css';

import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import ProtectedRouteProfileElement from "../../ProtectedRouteProfile/ProtectedRouteProfile";

import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

import Main from '../Main/Main';
import StandartPage from "../StandartPage/StandartPage";
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

import mainApi from "../../utils/MainApi";
import moviesApi from '../../utils/MoviesApi';

function App() {

  const [loggedIn, changeLoggedStatus] = React.useState(false);
  const [burgerStatus, onBurger] = React.useState(false);
  const [currentUser, changeCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [resError, changeResError] = React.useState({})
  const [dataFromStorage, changeDataFromStorage] = React.useState([])
  const [moviesData, setMoviesData] = React.useState([])

  React.useEffect(() => {
    tokenCheck(false);
  }, [])

  React.useEffect(() => {
    moviesApi.getMovies()
    .then((res) => {
      setMoviesData(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  React.useEffect(() => {
    getSavedMoviesData();
  }, [])

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('searchingResaults'))
    changeDataFromStorage(movies)
  }, [])

  const navigate = useNavigate();

  function tokenCheck(redirect) {
    if (localStorage.getItem('jwt')){
      const token = localStorage.getItem('jwt');
      mainApi.tokenCheck(token)
      .then((res)=> {
        changeCurrentUser({name: res.name, email: res.email})
        changeLoggedStatus(true)
        if (redirect === true) {
          navigate('/movies', {replace: true})
        }
        return
      })
      .catch((err) => {
        console.log(err.massage)
        changeResError({login: err, massage: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.'})
      })
    }
  }

  function handleRegisterSubmit({name, email, password}) {
    mainApi.registration({name, email, password})
    .then(() => {
      handleLoginSubmit({email, password})
    })
    .catch((err) => {
      if (err === 'Ошибка: 409') {
        changeResError({register: err, massage: 'Пользователь с таким email уже существует.'})
      } else {
        changeResError({register: err, massage: 'При регистрации пользователя произошла ошибка.'})
      }

      console.log(err);
    })
  }

  function handleLoginSubmit({email, password}) {
    mainApi.login({email, password}).then((res) => {
      if (res){
        tokenCheck(true);
      } else {
        console.log('Что-то не так с токеном')
      }
    })
    .catch((err) => {
      changeResError({login: err, massage: 'Вы ввели неправильный логин или пароль.'})
      console.log(err);
    })
  }

  function handleLogoutSubmit() {
    mainApi.logout()
    .then((res) => {
      localStorage.removeItem('jwt');
      localStorage.removeItem('searchingResaults');
      changeLoggedStatus(false);
      navigate('/', {replace: true});
    })
    .then(() => {
      changeDataFromStorage([])
    })
    .catch((err) => {console.log(err)})
  }

  function handleSaveMovie(data) {
    mainApi.saveMovie(data)
    .then(() => {getSavedMoviesData()})
    .catch((err) => {console.log(err)})
  }

  function getSavedMoviesData() {
    mainApi.getSavedMovies()
    .then((res) => {setSavedMovies(res)})
    .catch((err) => {console.log(err)})
  }

  function handleDeleteMovie(id) {
    const savedMovie = savedMovies.find(item => item.movieId === id);
    mainApi.deleteMovie(savedMovie._id)
    .then((res) => {
      if (res) {
        const newSavedMovies = savedMovies.filter(i => i.movieId !== id)
        setSavedMovies(newSavedMovies)
      }
    })
    .catch((err) => {console.log(err)})
  }

  function handleUpdateProfile(nameInput, emailInput) {
    mainApi.updateProfile(nameInput, emailInput)
      .then((res) =>{
        changeCurrentUser({name: res.name, email: res.email})
      })
      .catch((err) => {
        console.log(err)
        if (err === 'Ошибка: 409') {
          changeResError({profile: err, massage: 'Пользователь с таким email уже существует.'})
        } else {
          changeResError({profile: err, massage: 'При обновлении профиля произошла ошибка.'})
        }
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            element={<ProtectedRouteElement
              element={Movies}
              loggedIn={loggedIn}
              burgerStatus={burgerStatus}
              onBurger={onBurger}
              saveMovie={handleSaveMovie}
              savedMovies={savedMovies}
              deleteMovie={handleDeleteMovie}
              dataFromStorage={dataFromStorage}
              changeDataFromStorage={changeDataFromStorage}
              initialMoviesData={moviesData}
            />}
          />
          <Route path='/saved-movies'
            element={<ProtectedRouteElement
              element={SavedMovies}
              loggedIn={loggedIn}
              burgerStatus={burgerStatus}
              onBurger={onBurger}
              savedMovies={savedMovies}
              deleteMovie={handleDeleteMovie}
            />}
          />
          <Route path='/profile'
          element={<ProtectedRouteProfileElement
            element = {Profile}
            loggedIn={loggedIn}
            burgerStatus={burgerStatus}
            onBurger={onBurger}
            onLogoutClick={handleLogoutSubmit}
            updateProfile={handleUpdateProfile}
            resError={resError}
            changeResError={changeResError}
          />}
          />
          <Route path='/signin'
          element={<Login
          onSubmit={handleLoginSubmit}
          resError={resError}
          changeResError={changeResError}
          />}
          />
          <Route path='/signup'
          element={<Register
          onSubmit={handleRegisterSubmit}
          resError={resError}
          changeResError={changeResError}
          />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;


