import React from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

const SavedMovies = () => {

    return (
    <section className='savedmovies__page'>
      <Header />
      <div className='savedmovies__content'>
        <SearchForm />
          {/* <Preloader /> */}
          <MoviesCardList />
      </div>
      <Footer />
    </section>
  )
};

export default SavedMovies;
