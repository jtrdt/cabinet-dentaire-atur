import * as React from 'react';
import { Link } from 'gatsby';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div>
        <Link to='/'>Accueil</Link>
        <Link to='/infos'>Informations</Link>
        <Link to='/#nous-trouver'>Nous trouver</Link>
        <Link to='/#nous-contacter'>Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
