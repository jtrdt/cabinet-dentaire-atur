import { Link } from 'gatsby';
import * as React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link className='nav__link' to='#'>
        Accueil
      </Link>
      <a className='nav__link' href='/#cabinet'>
        Le cabinet
      </a>
      <a className='nav__link' href='/#nous-trouver'>
        Nous trouver
      </a>
      <a className='nav__link' href='/#nous-contacter'>
        Contact
      </a>
    </nav>
  );
};

export default Nav;
