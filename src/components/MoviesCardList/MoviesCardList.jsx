import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ cardsData, type }) {

  return(
    <div className='movies-card-list'>
      <ul className='movies-card-list__container'>
        {cardsData.map((card, i) => {
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
