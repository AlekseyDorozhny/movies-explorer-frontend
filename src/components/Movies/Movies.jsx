import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { findMovies } from '../../utils/MoviesUtil';

import moviesApi from '../../utils/MoviesApi';

function Movies({dataFromStorage, saveMovie, savedMovies, deleteMovie, changeDataFromStorage, checkBoxState, setCheckBoxState}) {

  const [moviesData, changeMoviesData] = React.useState([])
  const [searchParams, changeSearchParams] = React.useState({});
  const [isSearching, changeSearchStatus] = React.useState(false);
  const [numberOfVisableCards, setNumberOfVisableCards] = React.useState(12);
  const [displaySize, setDisplaySize] = React.useState({width: window.innerWidth,})
  const [isNotFound, setNotFound] = React.useState(false)
  const [restoreData, setRestoreData] = React.useState(false)
  const [filtredMoviesDataToDraw, setFiltredMoviesDataToDraw] = React.useState([])
  const [moviesDataToDraw, setMoviesDataToDraw] = React.useState([])
  const [error, setError] = React.useState(false)


  React.useEffect(() => {
    setCheckBoxState(false)
    const movies = JSON.parse(localStorage.getItem('searchingResaults'))
    if (movies !== null) {
      if (!movies.movies) {
        changeSearchParams({shorts: movies.shorts})
        checkBoxLoader()
        return
      }
      checkBoxLoader()
      changeDataFromStorage(movies)
      changeSearchParams({name: movies.name, shorts: movies.shorts})
      setRestoreData(true)
    }
  }, [])

  React.useEffect(() => {
    if (restoreData) {
      setMoviesDataToDraw(dataFromStorage.movies)
    }
  }, [restoreData])

  React.useEffect(() => {
    setNotFound(false)
    handleSetNumberOfVisableCards()
    if(checkBoxState) {
      const filteredMoviesByLenght = moviesDataToDraw.filter((item) => {
        if (item.duration < 40) {
            return item
        }})

      notFoundHandler(filteredMoviesByLenght)
      setFiltredMoviesDataToDraw(filteredMoviesByLenght)

    } else {
      notFoundHandler(moviesDataToDraw)
      setFiltredMoviesDataToDraw(moviesDataToDraw)
    }
  }, [checkBoxState, moviesDataToDraw])

  React.useEffect(() => {
      const resize = () => {
        setDisplaySize({
              width: window.innerWidth,
          })
      }
      window.addEventListener('resize', resize)
      return () => {
        window.removeEventListener('resize', resize)
      }
  }, [])

  React.useEffect(() => {
    handleSetNumberOfVisableCards()
  },[displaySize])

  const getMoreCards = () => {
    const width = JSON.stringify(displaySize).match(/\d+/g)[0];
    if (width >= 1280) {
      const number = numberOfVisableCards + 3;
      setNumberOfVisableCards(number)
    }
    if (width <= 1276) {
      const number = numberOfVisableCards + 2;
      setNumberOfVisableCards(number)
    }
  }

  function handleSetNumberOfVisableCards() {
    const width = JSON.stringify(displaySize).match(/\d+/g)[0];
    if (width >= 1277) {
      setNumberOfVisableCards(12)
    }
    if (width < 1277) {
      setNumberOfVisableCards(8)
    }
    if (width <= 745) {
      setNumberOfVisableCards(5)
    }
  }

  function notFoundHandler(data) {
    if (restoreData && !isSearching) {
      (data.length === 0)? setNotFound(true) : setNotFound(false)
    }
  }

  function searchMovieHandler(moviesData, name, shorts) {
    const movies = findMovies(moviesData, name, shorts, savedMovies)
    const savedSearchingResaults = {movies: movies, name: searchParams.name, shorts: searchParams.shorts}
    setMoviesDataToDraw(movies)
    localStorage.setItem('searchingResaults', JSON.stringify(savedSearchingResaults));
    changeDataFromStorage(savedSearchingResaults)
    handleSetNumberOfVisableCards()
    if (movies.length === 0) {
      setNotFound(true)
    }
    changeSearchStatus(false)
  }

  function checkBoxSaver(boolean) {
    setCheckBoxState(boolean)
    if (JSON.parse(localStorage.getItem('searchingResaults'))) {
      const savedData = JSON.parse(localStorage.getItem('searchingResaults'))
      savedData.shorts = boolean;
      localStorage.setItem('searchingResaults', JSON.stringify(savedData));
    } else {
      const savedData = {shorts: boolean}
      localStorage.setItem('searchingResaults', JSON.stringify(savedData));
    }
  }

  function checkBoxLoader() {
    const savedData = JSON.parse(localStorage.getItem('searchingResaults'))
    setCheckBoxState(savedData.shorts)
  }

  function searchMovies() {
    setError(false)
    setNotFound(false)
    setFiltredMoviesDataToDraw([])
    setMoviesDataToDraw([])
    if (moviesData.length === 0) {
      changeSearchStatus(true)
      moviesApi.getMovies()
      .then((res) => {
        changeMoviesData(res);
        searchMovieHandler(res, searchParams.name, searchParams.shorts);
      })
      .catch((err) => {
        changeSearchStatus(false)
        setError(true)
      })
    } else {
      searchMovieHandler(moviesData, searchParams.name, searchParams.shorts);
    }
  }

  return(
    <div className='movies'>
      <div className='movies__head-panel'>
        <SearchForm
        changeSearchParams = {changeSearchParams}
        searchFunction = {searchMovies}
        restoreData = {restoreData}
        checkBoxState = {checkBoxState}
        setCheckBoxState = {checkBoxSaver}
        />
      </div>
      {(isSearching)? <Preloader /> : ''}
      {(isNotFound)? <p className='movies__notFound'> Ничего не найдено</p> : ''}
      {(error)? <p className='movies__error'> Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> : ''}
      {(!isSearching)?
      <MoviesCardList
      cardsData = {filtredMoviesDataToDraw}
      type = 'movies'
      numberOfVisableCards = {numberOfVisableCards}
      saveMovie = {saveMovie}
      deleteMovie = {deleteMovie}
      savedMovies = {savedMovies}
      searchParams = {searchParams}
      />
      :
      ''}
      {(filtredMoviesDataToDraw.length > numberOfVisableCards)?
      <button
      className='movies__button'
      type='button'
      onClick={getMoreCards}
      >Ещё</button>
      : ''
      }
    </div>
  )
}

export default Movies;
