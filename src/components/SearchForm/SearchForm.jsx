import React from 'react';
import './SearchForm.css';


function SearchForm() {
  return(
    <form className="search-form" name='SearchForm' method="post">

      <label className="search-form__field">
        <input type="film"
        className="search-form__input"
        id="search-form-input"
        placeholder="Фильм"
        name="searchForm"
        required />
      </label>
      <button type='submit' className='search-form__button'></button>
    </form>
  )
}

export default SearchForm;
