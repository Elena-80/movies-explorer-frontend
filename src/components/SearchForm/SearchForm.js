import { useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import search from '../../images/search-icon.svg';

const SearchForm = ({
  onSearchMovies,
  onFilter,
  disabled,
  isSavedMoviesPage,
  shortMovies,
}) => {
  const { enteredValues, handleChange, resetForm, isFormValid } = useForm();
  const location = useLocation();

  function handleFormSubmit(e) {
    e.preventDefault();
    onSearchMovies(enteredValues.searchRequest, isFormValid, shortMovies);
  }

  function handleSavedMoviesFormSubmit(e) {
    e.preventDefault()
    onSearchMovies(enteredValues.searchRequest, shortMovies, resetForm);
  }

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('movieSearch')) {
      const searchValue = localStorage.getItem('movieSearch');
      enteredValues.searchRequest = searchValue;
    }
  }, [location]);

  return (
    <section className='search'>
      {isSavedMoviesPage ? (
        <>
          <form className='search__form form' name='search-saved-movie-form' onSubmit={handleSavedMoviesFormSubmit} noValidate>
            <img className= 'search__icon' src = {search} alt = 'Поиск'></img>
            <input
              type='text'
              className='search__input'
              placeholder='Фильм'
              required
              name='searchRequest'
              disabled={disabled}
              value={enteredValues.searchRequest || ''}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='search__button'
              disabled={disabled}
            >
            </button>
          </form>
          <div className='search__line' />
          <FilterCheckbox isMovieFilter={shortMovies} onFilter={onFilter} disabled={disabled} />
        </>
      ) : (
        <>
          <form className='search__form form' name='search-movie-form' onSubmit={handleFormSubmit} noValidate>
            <img className= 'search__icon' src = {search} alt = 'Поиск'></img>
            <input
              type='text'
              className='search__input'
              placeholder='Фильм'
              required
              name='searchRequest'
              disabled={disabled}
              value={enteredValues.searchRequest || ''}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='search__button'
              disabled={disabled}
            >
            </button>
          </form>
          <div className='search__line' />
          <FilterCheckbox isMovieFilter={shortMovies} onFilter={onFilter} disabled={disabled} />
        </>
      )}
    </section>
  )
};

export default SearchForm;