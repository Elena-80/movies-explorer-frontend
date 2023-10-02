import { useState, useEffect } from 'react';
import './MoviesCard.css';
import { convertMinToHours } from '../../utils/utils';
import useScreenWidth from '../../hooks/useScreenWidth';

const MoviesCard = ({
  isSavedMoviesPage,
  movie,
  onSave,
  onDelete,
  saved
}) => {

  const screenWidth = useScreenWidth();
  const [isMobile, setIsMobile] = useState(false);
  
  const handleSaveCard = () => {
    onSave(movie);
  };

  const handleDeleteCard = () => {
    onDelete(movie);
  };

  useEffect(() => {
    if (screenWidth < 786) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenWidth]);
  
  return (
    
    <li className='card'>
      <div className='card__description'>
        <p className='card__name'>{movie.nameRU}</p>
        <p className='card__duration'>{convertMinToHours(movie.duration)}</p>
      </div>

      {saved && !isSavedMoviesPage &&
        <button type='button' className='card__button_saved' onClick={handleSaveCard} />}
      {isSavedMoviesPage ? (
        <button className='card__button_delete' type='button' onClick={handleDeleteCard} />
      ) : (
        <button
          className={!saved ? 'card__button_inactive' : 'card__button_saved'}
          type='button'
          onClick={handleSaveCard}
        />
      )}


      <a href={movie.trailerLink} className="card__link" target="_blank" rel="noreferrer">
        <img
          src={isSavedMoviesPage ?
            movie.image :
            `https://api.nomoreparties.co/${movie.image.url}`
          }
          alt={`Обложка фильма: ${movie.nameRU}`}
          className='card__image'
        />
      </a>
    </li>
  )
};

export default MoviesCard;
