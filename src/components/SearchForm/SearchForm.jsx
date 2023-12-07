import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
  return(
    <form className="search-form" name='SearchForm' method="post">
      <div className='search-form__container'>
        <label className="search-form__field">
          <input type="text"
          className="search-form__input"
          id="search-form-input"
          placeholder="Фильм"
          name="searchForm"
          required />
        </label>
        <button type='submit' className='search-form__button'></button>
      </div>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm;
