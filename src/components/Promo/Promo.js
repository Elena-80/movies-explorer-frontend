import React from 'react';
import Header from '../Header/Header';
import './Promo.css';
import promo from '../../images/promo-logo.svg';

const Promo = ({ loggedIn }) => {
  return (
    <div className='promo'>
      <Header loggedIn={loggedIn}/>
      <section className='promo__container'>
        <div className ='promo__info'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className = 'promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className = 'promo__button' href='#info'>Узнать больше</a>
        </div>
        <img className='promo__logo' src={promo} alt='Логотип Промо.' />
      </section>
    </div>
  )
};

export default Promo;