import * as React from 'react';
import { Link } from 'gatsby';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>Designed by Bill &amp; Pecoss — 2021</p>
      <div>
        <Link to='/'>Accueil</Link>
        <Link to='/infos'>Informations</Link>
        <Link to='/contact'>Contacts</Link>
      </div>
    </footer>
  );
};

export default Footer;
