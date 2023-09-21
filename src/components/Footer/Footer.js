import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <span className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
      <div className='footer__bottom-block'>
        <span className='footer__copyright'>© 2023</span>
        <ul className='footer__socials'>
          <li><a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer">Яндекс.Практикум</a></li>
          <li><a className='footer__link' href='https://github.com/Elena-80' target='_blank' rel="noreferrer">Github</a></li>
        </ul>
      </div>

    </footer>
  )
};

export default Footer;