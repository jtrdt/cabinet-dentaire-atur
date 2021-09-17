import * as React from 'react';
import { Link } from 'gatsby';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div>
        <Link class='nav__link' to='/'>
          Accueil
        </Link>
        <Link class='nav__link' to='/cabinet'>
          Le cabinet
        </Link>
        <Link class='nav__link' to='/infos'>
          Informations
        </Link>
        <Link class='nav__link' to='/#nous-trouver'>
          Nous trouver
        </Link>
        <Link class='nav__link' to='/#nous-contacter'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
