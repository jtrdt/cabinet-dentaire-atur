import * as React from 'react';
import { Link } from 'gatsby';
import './Footer.css';

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='footer-container'>
        <div class='footer-links'>
          <div>
            <h5 class='footer-links__title'>Plan du site</h5>
            <ul>
              <li>
                <Link to='/'>Accueil</Link>
              </li>
              <li>
                <Link to='/cabinet'>Le cabinet</Link>
              </li>
              {/* <li>
                <Link to='/infos'>Informations</Link>
              </li> */}
              <li>
                <Link to='/#nous-trouver'>Nous trouver</Link>
              </li>
              <li>
                <Link to='/#nous-contacter'>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 class='footer-links__title'>Liens utiles</h5>
            <ul>
              <li>
                <a href='https://www.ameli.fr/' rel='noreferrer' target='_blank'>
                  Ameli
                </a>
              </li>
              <li>
                <a href='https://www.oncd-24.fr/' rel='noreferrer' target='_blank'>
                  ONCD-24
                </a>
              </li>
              <li>
                <a href='https://www.oncd-24.fr/chirurgiens-dentistes-de-garde/' rel='noreferrer' target='_blank'>
                  En cas d'urgence
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class='footer-legal'>
          <p>
            Copyright &copy; 2021{' '}
            <a href='mailto:contact@billetpecoss.com' class='footer-legal__brand'>
              Bill &amp; Pecoss
            </a>
          </p>
          <p>Tous droits réservés</p>
        </div>
      </div>
      <div class='footer__location'>
        <p>5 Impasse Édouard Glissant 24750 Boulazac Isle Manoire</p>
      </div>
    </footer>
  );
};

export default Footer;