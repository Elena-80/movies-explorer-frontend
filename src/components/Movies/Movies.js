import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import './Movies.css';

const Movies = () => {
  
  return (
    <section className='movies__page'>
      <Header />
      <div className='movies__content'>
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList />
      </div>
      <Footer />
    </section>
  )
};

export default Movies;
