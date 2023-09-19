import MoviesCard from '../MoviesCard/MoviesCard';
import { movieList} from '../../utils/constants';

import './MoviesCardList.css';

const MoviesCardList = () => {

  return (
    <section className='cards'>
      <ul className='cards__list'>
        {movieList.map(movie => {
          return <MoviesCard
            movie={movie}
          />
        })}
      </ul>
      <button type='button' className='cards__button' >Ещё</button>
    </section>
  )
};

export default MoviesCardList;
