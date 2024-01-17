import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { findMovies } from '../../utils/MoviesUtil';

import moviesApi from '../../utils/MoviesApi';

function Movies({dataFromStorage, saveMovie, savedMovies, deleteMovie, changeDataFromStorage}) {

  const [moviesData, changeMoviesData] = React.useState([])
  const [filtredMoviesData, changeFiltredMoviesData] = React.useState([]);
  const [searchParams, changeSearchParams] = React.useState({});
  const [isSearching, changeSearchStatus] = React.useState(false);
  const [numberOfVisableCards, setNumberOfVisableCards] = React.useState(12);
  const [displaySize, setDisplaySize] = React.useState({width: window.innerWidth,})
  const [isNotFound, setNotFound] = React.useState(false)
  const [restoreData, setRestoreData] = React.useState(false)
  const [moviesDataToDraw, setMoviesDataToDraw] = React.useState([])

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('searchingResaults'))
    if (movies !== null) {
      if (movies.length === 0) {
        return
      }
      changeDataFromStorage(movies)
      setRestoreData(true)
    } else {
      console.log('nothing')
      return
    }
  }, [])

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
  },[displaySize])

  React.useEffect(() => {
    if (restoreData) {

      setMoviesDataToDraw(dataFromStorage.movies)
    } else {
      setMoviesDataToDraw(filtredMoviesData)
    }
}, [restoreData])

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

  function searchMovieHandler(moviesData, name, shorts) {
    const movies = findMovies(moviesData, name, shorts, savedMovies)
    const savedSearchingResaults = {movies: movies, name: searchParams.name, shorts: searchParams.shorts}
    setMoviesDataToDraw(movies)
    changeFiltredMoviesData(movies)
    localStorage.setItem('searchingResaults', JSON.stringify(savedSearchingResaults));
    changeDataFromStorage(savedSearchingResaults)
    if (movies.length === 0) {
      setNotFound(true)
    }
    changeSearchStatus(false)
  }

  function searchMovies() {
    setNotFound(false)
    changeFiltredMoviesData([])
    changeSearchStatus(true)
    if (moviesData.length === 0) {
      moviesApi.getMovies()
      .then((res) => {
        changeMoviesData(res);
        searchMovieHandler(res, searchParams.name, searchParams.shorts);
      })
      .catch((err) => {console.log(err)})
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
        />
      </div>
      {(isSearching)? <Preloader /> : ''}
      {(isNotFound)? <p className='movies__notFound'> Ничего не найдено</p> : ''}
      {(!isSearching)?
      <MoviesCardList
      cardsData = {moviesDataToDraw}
      type = 'movies'
      numberOfVisableCards = {numberOfVisableCards}
      saveMovie = {saveMovie}
      deleteMovie = {deleteMovie}
      savedMovies = {savedMovies}
      searchParams = {searchParams}
      />
      :
      ''}
      {(moviesDataToDraw.length > numberOfVisableCards)?
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
