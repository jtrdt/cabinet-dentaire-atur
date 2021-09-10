import * as React from 'react';
import { Link } from 'gatsby';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Plan du site</p>
        <ul>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/infos'>Informations</Link>
          </li>
          <li>
            <Link to='/#nous-trouver'>Nous trouver</Link>
          </li>
          <li>
            <Link to='/#nous-contacter'>Contact</Link>
          </li>
        </ul>
        <h5>Liens utiles</h5>
        <ul>
          <li>
            <a href='https://www.ameli.fr/' rel='noreferer noopener'>
              Ameli
            </a>
          </li>
          <li>
            <a href='https://www.oncd-24.fr/' rel='noreferer noopener'>
              ONCD-24
            </a>
          </li>
          <li>
            <a href='https://www.oncd-24.fr/chirurgiens-dentistes-de-garde/' rel='noreferer noopener'>
              En cas d'urgence
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>5 Impasse Édouard Glissant 24750 Boulazac Isle Manoire</p>
      </div>
      <div>
        <p>
          Copyright &copy; 2021 <a href='mailto:contact@billetpecoss.com'>Bill &amp; Pecoss</a>
        </p>
        <p>Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
