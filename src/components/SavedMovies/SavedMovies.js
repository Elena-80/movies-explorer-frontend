import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

import { filterMovies, filterSavedMovies, filterShortMovies } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

const SavedMovies = ({
  loggedIn,
  savedMovies,
  isLoading,
  onDelete,
  setPopupMessage,
  setIsPopupOpen
}) => {

  const [shortMovies, setShortMovies] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [showedMovies, setShowedMovies] = useState(savedMovies);
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearchSubmit = (inputValue) => {
    if (!inputValue) {
      setPopupMessage('Нужно ввести ключевое слово');
      setIsPopupOpen(true);
      return;
    }
    
    if (inputValue.trim().length === 0) {
      setPopupMessage('Нужно ввести ключевое слово');
      setIsPopupOpen(true);
      return;
    }

    setSearchQuery(inputValue);
    const moviesList = filterMovies(savedMovies, inputValue, shortMovies);
    setFilteredMovies(filterSavedMovies(savedMovies, inputValue));

    if (moviesList.length === 0) {
      setNotFound(true);
      setPopupMessage('Ничего не найдено.');
      setIsPopupOpen(true);
      setShowedMovies([]);
    } else {
      setNotFound(false);
      setShowedMovies(moviesList);
    }
  }

  const handleShortFilms = () => {
    if (!shortMovies) {
      setShortMovies(true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0 ? setNotFound(true) : setNotFound(false);
    } else {
        setShortMovies(false);
        filteredMovies.length === 0 ? setNotFound(true) : setNotFound(false);
        setShowedMovies(filteredMovies);
    }
  }

  useEffect(() => {
      savedMovies.length !== 0 ? setNotFound(false) : setNotFound(true);
      const moviesList = filterMovies(savedMovies, searchQuery, shortMovies);
      setFilteredMovies(filterSavedMovies(savedMovies, searchQuery));
      setShowedMovies(moviesList);
    }, [savedMovies, location]);


    return (
    <section className='savedmovies__page'>
      <Header loggedIn={loggedIn}/>
      <div className='savedmovies__content'>
        <SearchForm 
          onSearchMovies={handleSearchSubmit}
          onFilter={handleShortFilms}
          shortMovies={shortMovies}
          isSavedMoviesPage={true}
        />
        {isLoading && (
          <Preloader />
        )}
        {!isLoading && (
          <MoviesCardList
            isSavedMoviesPage={true}
            movies={showedMovies}
            savedMovies={savedMovies}
            onDelete={onDelete}
          />
        )}
      </div>
      <Footer />
    </section>
  )
};

export default SavedMovies;
