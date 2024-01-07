import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({setSearchShorts, searchShorts}) {

  const [checkboxUrl, setCheckboxUrl] = React.useState('');

  function setSearchShortsHandle() {
    (searchShorts)? setSearchShorts(false) : setSearchShorts(true);
    console.log(searchShorts)
  }

  React.useEffect(() => {
    if (searchShorts) {
      setCheckboxUrl('/smalltumboff.svg')
    } else {
      setCheckboxUrl('/smalltumb.svg')
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
