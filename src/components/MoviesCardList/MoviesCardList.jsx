import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ cardsData, type, numberOfVisableCards}) {

  return(
    <div className='movies-card-list'>
      <ul className='movies-card-list__container'>
        {cardsData.slice(0, numberOfVisableCards).map((card, i) => {
          return(<MoviesCard
            movieImage={card.image.url}
            movieName={card.nameRU}
            length={card.duration}
            savedStatus={card.savedStatus}
            type={type}
            key = {card.id}
          />)
        })}
      </ul>
    </div>
  )
}

export default MoviesCardList;
