import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({getSavedMoviesData, savedMovies}) {


  React.useEffect(() => {
    getSavedMoviesData()
    console.log(savedMovies)
  }, [])

  return(
    <div className='movies movies_type_saved'>
      <div className='movies__head-panel'>
        <SearchForm />
      </div>
      <MoviesCardList
      cardsData = {savedMovies}
      getSavedMoviesData = {getSavedMoviesData}
      type = 'savedMovies'
      />
    </div>
  )
}

export default SavedMovies;
