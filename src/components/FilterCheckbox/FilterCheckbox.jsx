import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({setSearchShorts, searchShorts}) {

  const [checkboxUrl, setCheckboxUrl] = React.useState('');

  function setSearchShortsHandle() {
    (searchShorts)? setSearchShorts(false) : setSearchShorts(true);
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
