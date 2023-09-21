import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navigation = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  const profileButton = () => {
    navigate('/profile');
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
        <a className={ location === '/' ? 'navigation__text' : 'navigation__text navigation__text_black' } href = "/profile">Аккаунт</a>         
        <button className= { location === '/' ? 'navigation__button' : 'navigation__button navigation__button_account' } onClick = {profileButton} ></button>
        {isBurgerMenuOpen ? <BurgerMenu onClose={toggleBurgerMenu}/> : <button className = 'navigation__burger-button' onClick = {toggleBurgerMenu}/>}
      </div>
    </nav>
  )
};

export default Navigation;
