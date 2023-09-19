import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navigation = () => {
  const location = useLocation().pathname;
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (

    <nav className='navigation'>
           
      <div className={location === '/' ? 'navigation__movies navigation__movies_white' : 'navigation__movies'}>
        <Link
          to='/movies'
          className={location === '/movies' ? 'navigation__movies-link_active' : 'navigation__movies-link'}>
          Фильмы
        </Link>
        <Link
          to='/saved-movies'
          className={location === '/saved-movies' ? 'navigation__movies-link_active' : 'navigation__movies-link'}>
          Сохранённые фильмы
        </Link>
        
      </div>
      <div className = 'navigation__account'>
        <p className={ location === '/' ? 'navigation__account-text' : 'navigation__account-text navigation__account-text_black' }>Аккаунт</p>
        <Link to='/profile'>           
            <button className= { location === '/' ? 'navigation__button' : 'navigation__button navigation__button_account' }></button>          
        </Link>
        {isBurgerMenuOpen ? <BurgerMenu onClose={toggleBurgerMenu}/> : <button className = 'burger__button' onClick = {toggleBurgerMenu}/>}
      </div>

    </nav>
  )
};

export default Navigation;
