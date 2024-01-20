import React from 'react';
import './MoviesCard.css';

function MoviesCard(
  {allData, movieImage, movieName, length, savedStatus, type, link, saveMovie, deleteMovie}) {

  const [deleteSavedMovie, onDeleteSavedMovie] =React.useState(false);

  const cardStatusClassName = (
    `movies-card__checkbox ${savedStatus && 'movies-card__checkbox_active'}`
  );

  const cardSaveButtonClassName = (
    `movies-card__save-button ${savedStatus && 'movies-card__save-button_unactive'}`
  );

  function handleSaveClick() {
    saveMovie(allData)
  }

  function handleDeleteClick() {
    if (allData.movieId) {
      onDeleteSavedMovie(true)
      deleteMovie(allData.movieId);
    } else {
      deleteMovie(allData.id);
    }
  }

  <li className='movies-card'></li>
  return(
    <li className={`movies-card ${deleteSavedMovie? 'movies-card_deleted' : ''}`}>
      {(type !== 'savedMovies')?
       <div className='movies-card__image-container'>
        <a className='movies-card__link' target="_blank" href={link} rel='noreferrer'>
          <img className='movies-card__image'
          alt={`Постер фильма ${movieName}`}
          src = {`https://api.nomoreparties.co${movieImage}`}
          />
        </a>
        <button
        className={cardSaveButtonClassName}
        onClick={handleSaveClick}
        >Сохранить</button>
        <div className={ cardStatusClassName }
        onClick={handleDeleteClick}
        ></div>
     </div>
      :
      <div className='movies-card__image-container'>
        <a className='movies-card__link' target="_blank" href={link} rel='noreferrer'>
          <img className='movies-card__image'
          alt={`Постер фильма ${movieName}`}
          src = {movieImage}
          />
        </a>
        <button
        type='button'
        className='movies-card__delete-button'
        onClick={handleDeleteClick}
        ></button>
      </div>
      }
      <div className='movies-card__info-container'>
        <h2 className='movies-card__name'>{movieName}</h2>
        <div className='movies-card__length'>
          {(length >= 60)?
            <p className='movies-card__length-text'>{`${Math.floor(length/60)}ч ${length - Math.floor(length/60)*60}м`}</p>
          :
            <p className='movies-card__length-text'>{`${length}м`}</p>
        }

        </div>
      </div>
    </li>
  )
}

export default MoviesCard;
