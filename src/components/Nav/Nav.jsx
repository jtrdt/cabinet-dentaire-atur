import * as React from 'react';
import { Link } from 'gatsby';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div>
        <Link class='nav__link' to='/' activeStyle={{ textDecoration: 'underline' }}>
          Accueil
        </Link>
        <Link class='nav__link' to='/#cabinet' activeStyle={{ textDecoration: 'underline' }}>
          Le cabinet
        </Link>
        {/* <Link class='nav__link' to='/infos'>
          Informations
        </Link> */}
        <Link class='nav__link' to='/#nous-trouver' activeStyle={{ textDecoration: 'underline' }}>
          Nous trouver
        </Link>
        <Link class='nav__link' to='/#nous-contacter' activeStyle={{ textDecoration: 'underline' }}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
