import * as React from 'react';
import { Link } from 'gatsby';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        Designed by <a href='mailto:contact@billetpecoss.com'>Bill &amp; Pecoss</a>
      </p>
      <p>&copy; Tous droits réservés — 2021</p>
      <div>
        <h5>Horaires d'ouverture du secrétariat</h5>
        <p>Du lundi au mercredi</p>
        <p>9h-13h et 14h-18h</p>
        <p>Jeudi</p>
        <p>9h-13h</p>
        <p>Vendredi</p>
        <p>9h-13h</p>
        <h5>Horaires d'ouverture du standard téléphonique</h5>
        <p>Du lundi au jeudi</p>
        <p>9h30-12h et 14h-17h</p>
        <p>Vendredi</p>
        <p>9h30-12h</p>
        <a href='tel:+33564340130'>05.64.34.01.30</a>
        <div>5 Impasse Edouard Glissant ATUR 24750 BOULAZAC ISLE MANOIRE</div>
      </div>
      <div>
        <Link to='/'>Accueil</Link>
        <Link to='/infos'>Informations</Link>
        <Link to='/contact'>Contacts</Link>
        <h5>Liens utiles</h5>
        <Link to='https://www.ameli.fr/' rel='noreferer noopener'>
          Ameli
        </Link>
        <Link to='https://www.oncd-24.fr/' rel='noopener'>
          ONCD-24
        </Link>
        <Link to='https://www.oncd-24.fr/chirurgiens-dentistes-de-garde/' rel='noopener'>
          En cas d'urgence
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
