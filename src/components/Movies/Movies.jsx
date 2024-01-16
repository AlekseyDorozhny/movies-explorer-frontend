import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { findMovies } from '../../utils/MoviesUtil';


function Movies({initialMoviesData, dataFromStorage, saveMovie, savedMovies, deleteMovie, changeDataFromStorage}) {

  const [filtredMoviesData, changeFiltredMoviesData] = React.useState([]);
  const [searchParams, changeSearchParams] = React.useState({});
  const [isSearching, changeSearchStatus] = React.useState(false);
  const [numberOfVisableCards, setNumberOfVisableCards] = React.useState(12);
  const [displaySize, setDisplaySize] = React.useState({width: window.innerWidth,})
  const [isNotFound, setNotFound] = React.useState(false)


  React.useEffect(() => {
    console.log(dataFromStorage !== null)
    if (dataFromStorage !== null) {
      if (dataFromStorage.length === 0) {
        return
      }
      changeSearchStatus(true)
      const movies = findMovies(initialMoviesData, dataFromStorage.name, dataFromStorage.shorts, savedMovies)
      changeFiltredMoviesData(movies);
      changeSearchStatus(false)
    } else {
      return
    }
  }, [initialMoviesData])

  React.useEffect(() => {
    if (dataFromStorage !== null) {
      if (dataFromStorage.name === searchParams.name) {
        searchMovies()
      }
    } else {
      return
    }
  }, [searchParams])

  React.useEffect(() => {
      const resize = () => {
        setDisplaySize({
              width: window.innerWidth,
          })
      }
      window.addEventListener('resize', resize)
  }, [])

  React.useEffect(() => {
    const width = JSON.stringify(displaySize).match(/\d+/g)[0];
    if (width >= 1280) {
      setNumberOfVisableCards(12)
    }
    if (width <= 768) {
      setNumberOfVisableCards(8)
    }
    if (width <= 480) {
      setNumberOfVisableCards(5)
    }
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

  function searchMovies() {
    setNotFound(false)
    changeFiltredMoviesData([])
    changeSearchStatus(true)
    const name = searchParams.name;
    const shorts = searchParams.shorts;
    const movies = findMovies(initialMoviesData, name, shorts, savedMovies)
    const savedSearchingResoults = {movies: movies, name: name, shorts: shorts}
    changeFiltredMoviesData(movies);
    localStorage.setItem('searchingResaults', JSON.stringify(savedSearchingResoults));
    changeDataFromStorage(savedSearchingResoults)
    if (movies.length === 0) {
      setNotFound(true)
    }
    changeSearchStatus(false)
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
      <MoviesCardList
      cardsData = {filtredMoviesData}
      type = 'movies'
      numberOfVisableCards = {numberOfVisableCards}
      saveMovie = {saveMovie}
      deleteMovie = {deleteMovie}
      savedMovies = {savedMovies}
      />
      {(filtredMoviesData.length > numberOfVisableCards)?
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
