import * as React from 'react';
import { Link } from 'gatsby';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <h5>Nous contacter</h5>
        {/* <h5>Horaires d'ouverture du secrétariat</h5>
        <p>Du lundi au mercredi</p>
        <p>9h-13h et 14h-18h</p>
        <p>Jeudi</p>
        <p>9h-13h</p>
        <p>Vendredi</p>
      <p>9h-13h</p> */}
        <p>Par téléphone : </p>
        <a href='tel:+33564340130'>05.64.34.01.30</a>
        <p>Du lundi au jeudi</p>
        <p>9h30-12h et 14h-17h</p>
        <p>Vendredi</p>
        <p>9h30-12h</p>
        <p>Par e-mail : </p>
        <a href='mailto:contact@cabinet-dentaire-atur.fr'>contact@cabinet-dentaire-atur.fr</a>
        <div>5 Impasse Edouard Glissant ATUR 24750 BOULAZAC ISLE MANOIRE</div>
      </div>
      <div>
        <p>
          Site web crée par <a href='mailto:contact@billetpecoss.com'>Bill &amp; Pecoss</a>
        </p>
        <p>&copy; Tous droits réservés — 2021</p>
      </div>
      <div>
        <Link to='/'>Accueil</Link>
        <Link to='/infos'>Informations</Link>
        <Link to='/#nous-trouver'>Nous trouver</Link>
        <h5>Liens utiles</h5>
        <a href='https://www.ameli.fr/' rel='noreferer noopener'>
          Ameli
        </a>
        <a href='https://www.oncd-24.fr/' rel='noreferer noopener'>
          ONCD-24
        </a>
        <a href='https://www.oncd-24.fr/chirurgiens-dentistes-de-garde/' rel='noreferer noopener'>
          En cas d'urgence
        </a>
      </div>
    </footer>
  );
};

export default Footer;
