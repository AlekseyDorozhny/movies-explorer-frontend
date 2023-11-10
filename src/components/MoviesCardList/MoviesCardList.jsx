import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ cardsData, type }) {
  return(
    <div className='movies-card-list'>
      <div className='movies-card-list__container'>
        {cardsData.map((card, i) => {
          return(<MoviesCard
            movieImage={card.image}
            movieName={card.name}
            length={card.length}
            savedStatus={card.savedStatus}
            type={type}
            key = {card._id}
          />)
        })}
      </div>
    </div>
  )
}

export default MoviesCardList;
