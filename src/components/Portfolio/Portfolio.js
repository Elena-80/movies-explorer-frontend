import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__projects'>
        <li>
          <a className='portfolio__link' rel='noreferrer' href='https://github.com/Elena-80/how-to-learn' target='_blank'>
            Статичный сайт
          </a>
          <a className='portfolio__link' rel='noreferrer' href='https://github.com/Elena-80/how-to-learn' target='_blank'>
            ↗
          </a>
        </li>
        <li>
          <a className='portfolio__link' rel='noreferrer' href='https://github.com/Elena-80/russian-travel' target='_blank'>
            Адаптивный сайт
          </a>
          <a className='portfolio__link' rel='noreferrer' href='https://github.com/Elena-80/russian-travel' target='_blank'>
            ↗
          </a>
        </li>
        <li>
          <a className='portfolio__link' rel='noreferrer' href='https://github.com/Elena-80/react-mesto-api-full-gha' target='_blank'>
            Одностраничное приложение
          </a>
          <a className='portfolio__link' rel='noreferrer' href='https://github.com/Elena-80/react-mesto-api-full-gha' target='_blank'>
            ↗
          </a>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;