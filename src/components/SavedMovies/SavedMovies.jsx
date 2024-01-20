import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { findSavedMovies } from '../../utils/MoviesUtil';

function SavedMovies({savedMovies, deleteMovie, checkBoxState, setCheckBoxState}) {
  const [searchParams, changeSearchParams] = React.useState({});
  const [cardsData, changeCardsData] = React.useState(savedMovies);
  const [isNotFound, setNotFound] = React.useState(false)

  React.useEffect(() => {
    changeCardsData(savedMovies)
  }, [savedMovies])


  React.useEffect(() => {
    if (checkBoxState) {
      const filteredMoviesByLenght = cardsData.filter((item) => {
        if (item.duration < 40) {
            return item
        }})
        changeCardsData(filteredMoviesByLenght)
    } else {
      if (savedMovies.length !== 0) {
        changeCardsData(savedMovies)
        searchSavedMovies()
      }
    }
  }, [checkBoxState, savedMovies])

  function searchSavedMovies() {
    if (savedMovies.length !== 0 && searchParams.name) {
      setNotFound(false)
      const movies = findSavedMovies(savedMovies, searchParams.name)
      changeCardsData(movies)

      if (movies.length === 0) {
        setNotFound(true)
      }
    }
  }

  return(
    <div className='movies movies_type_saved'>
      <div className='movies__head-panel'>
        <SearchForm
        changeSearchParams = {changeSearchParams}
        searchFunction = {searchSavedMovies}
        checkBoxState = {checkBoxState}
        setCheckBoxState = {setCheckBoxState}
        />
      </div>
      {(isNotFound)? <p className='movies__notFound'> Ничего не найдено</p> : ''}
      <MoviesCardList
      cardsData = {cardsData}
      deleteMovie = {deleteMovie}
      type = 'savedMovies'
      searchParams = {searchParams}
      />
    </div>
  )
}

export default SavedMovies;
