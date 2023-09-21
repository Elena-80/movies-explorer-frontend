import './MoviesCard.css';
import { convertMinToHours } from '../../utils/utils';
import { useLocation } from 'react-router-dom';


const MoviesCard = ({
  movie,
}) => {
  const location = useLocation().pathname;
  return (
    
    <li className='card'>
      <div className='card__description'>
        <p className='card__name'>{movie.nameRU}</p>
        <p className='card__duration'>{convertMinToHours(movie.duration)}</p>
      </div>
      <button type='button' className={location === '/movies' ? 'card__button_saved' : 'card__button_delete'} />
      <a href={movie.trailerLink} className="card__link" target="_blank" rel="noreferrer">
        <img
          src={'https://cdn.7days.ru/pic/cc9/2EF53F10D5F2ED9D432589440060815A/1467890/90.jpg'}
          alt={`Обложка фильма: ${movie.nameRU}`}
          className='card__image'
        />
      </a>
    </li>
  )
};

export default MoviesCard;
