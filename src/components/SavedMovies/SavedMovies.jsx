import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import {savedMoviesData} from '../../utils/constants'

function Movies() {
  return(
    <div className='movies'>
      <div className='movies__head-panel'>
        <SearchForm />
        <FilterCheckbox />
      </div>
      <MoviesCardList
      cardsData = {savedMoviesData}
      type = 'savedMovies'
      />
    </div>
  )
}

export default Movies;
