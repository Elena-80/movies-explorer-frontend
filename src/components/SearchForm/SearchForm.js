import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/search-icon.svg';

const SearchForm = () => {
  return (
    <section className='search'>
          <form className='search__form form' name='search-saved-movie-form' noValidate>
            <img className= 'search__icon' src = {search} alt = 'Поиск'></img>
            <input
              type='text'
              className='search__input'
              placeholder='Фильм'
              required
              name='searchRequest'
            />
            <button
              type='submit'
              className='search__button'
            >
            </button>
          </form>

          <div className='search__line' />
          <FilterCheckbox />

    </section>
  )
};

export default SearchForm;