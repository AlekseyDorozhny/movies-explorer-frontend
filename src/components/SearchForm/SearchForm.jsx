import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm({changeSearchParams, searchFunction, restoreData, checkBoxState, setCheckBoxState}) {

  const [searchName, setSearchName] = React.useState('');
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    changeSearchParams({name: searchName, shorts: checkBoxState})
  },[searchName, checkBoxState])

  React.useEffect(() => {
    if (restoreData) {
      const movies = JSON.parse(localStorage.getItem('searchingResaults'))
      setSearchName(movies.name)
    }
  },[restoreData])


  function handleNameChange(e) {
    setSearchName(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
   if (searchName.length === 0) {
    setError(true);
   } else {
    searchFunction();
   }
  }

  function handleSelectInput() {
    setError(false);
  }

  return(
    <form className="search-form"
    name='SearchForm'
    method="post"
    onSubmit={handleSearch}
    noValidate
    >
      <div className='search-form__container'>
        <label className="search-form__field">
          <input type="text"
          className='search-form__input'
          id="search-form-input"
          placeholder="Фильм"
          name="searchForm"
          onChange={handleNameChange}
          onSelect={handleSelectInput}
          defaultValue={restoreData? JSON.parse(localStorage.getItem('searchingResaults')).name
          : ''}
          required />
        </label>
        <button type='submit' className='search-form__button'></button>
      </div>
      <span className='search-form__error'>
        {error? "Нужно ввести ключевое слово" : " "}
        </span>
      <FilterCheckbox
      setSearchShorts = {setCheckBoxState}
      searchShorts = {checkBoxState}
      restoreData = {restoreData}
      />
    </form>
  )
}

export default SearchForm;
