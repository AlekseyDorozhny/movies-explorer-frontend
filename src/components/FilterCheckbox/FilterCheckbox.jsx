import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({setSearchShorts, searchShorts, restoreData}) {

  const [checkboxUrl, setCheckboxUrl] = React.useState('');

  function setSearchShortsHandle() {
    if (searchShorts) {
      setSearchShorts(false)
    } else {
      setSearchShorts(true)
    }
  }

  React.useEffect(() => {
    if (searchShorts) {
      setCheckboxUrl('/smalltumb.svg')
    } else {
      setCheckboxUrl('/smalltumboff.svg')
    }
  }, [searchShorts])

  return(
    <div className='filter-checkbox'>
      <button type='button'
      className='filter-checkbox__button'
      onClick={setSearchShortsHandle}
      style={{ background: `url(${checkboxUrl})` }}
      ></button>
      <p className='filter-checkbox__text'>
        Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
