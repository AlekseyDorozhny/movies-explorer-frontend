import React from 'react';
import './MoviesCard.css';

function MoviesCard({movieImage, movieName, length, savedStatus, type}) {

  const cardStatusClassName = (
    `movies-card__checkbox ${savedStatus && 'movies-card__checkbox_active'}`
  );

  const cardSaveButtonClassName = (
    `movies-card__save-button ${savedStatus && 'movies-card__save-button_unactive'}`
  );

  return(
    <div className='movies-card'>
      {(type !== 'savedMovies')?
       <div className='movies-card__image-container'>
       <img className='movies-card__image'
       alt={`Постер фильма ${movieName}`}
       src = {movieImage}
       />
       <button className={cardSaveButtonClassName}>Сохранить</button>
       <div className={ cardStatusClassName }></div>
     </div>
      :
      <div className='movies-card__image-container'>
        <img className='movies-card__image'
        alt={`Постер фильма ${movieName}`}
        src = {movieImage}
        />
        <button type='button' className='movies-card__delete-button'></button>
      </div>
      }

      <div className='movies-card__info-container'>
        <h3 className='movies-card__name'>{movieName}</h3>
        <div className='movie-card__length'>
          <p className='movie-card__length-text'>{length}</p>
        </div>
      </div>
    </div>
  )
}

export default MoviesCard;
