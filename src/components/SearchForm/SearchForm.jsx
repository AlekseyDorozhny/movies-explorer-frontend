import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm({changeSearchParams, searchFunction}) {

  const [searchName, setSearchName] = React.useState('');
  const [searchShorts, setSearchShorts] = React.useState(false);

  function handleNameChange(e) {
    setSearchName(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    changeSearchParams({name: searchName, shorts: searchShorts});
    searchFunction();
  }

  return(
    <form className="search-form"
    name='SearchForm'
    method="post"
    onSubmit={handleSearch}>
      <div className='search-form__container'>
        <label className="search-form__field">
          <input type="text"
          className="search-form__input"
          id="search-form-input"
          placeholder="Фильм"
          name="searchForm"
          onChange={handleNameChange}
          required />
        </label>
        <button type='submit' className='search-form__button'></button>
      </div>
      <FilterCheckbox
      setSearchShorts = {setSearchShorts}
      searchShorts = {searchShorts}
      />
    </form>
  )
}

export default SearchForm;
