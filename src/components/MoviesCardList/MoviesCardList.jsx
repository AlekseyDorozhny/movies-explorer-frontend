import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ cardsData, type, numberOfVisableCards, saveMovie, deleteMovie, savedMovies}) {

  return(
    <div className='movies-card-list'>
      <ul className='movies-card-list__container'>
        {(type === 'movies')?
          cardsData.slice(0, numberOfVisableCards).map((card, i) => {
            return(<MoviesCard
              allData={card}
              movieImage={card.image.url}
              movieName={card.nameRU}
              length={card.duration}
              savedStatus={card.saved}
              type={type}
              key = {card.id}
              link={card.trailerLink}
              saveMovie = {saveMovie}
              deleteMovie = {deleteMovie}
            />)
          })
        :
        cardsData.map((card, i) => {
          return(<MoviesCard
            allData={card}
            movieImage={card.image}
            movieName={card.nameRU}
            length={card.duration}
            savedStatus={card.savedStatus}
            type={type}
            key = {card._id}
            id = {card._id}
            link={card.trailerLink}
            saveMovie = {saveMovie}
            deleteMovie = {deleteMovie}
            savedMovies = {savedMovies}
          />)
        })
        }

      </ul>
    </div>
  )
}

export default MoviesCardList;
