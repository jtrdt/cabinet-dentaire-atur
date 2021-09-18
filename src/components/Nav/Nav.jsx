import { Link } from 'gatsby';
import * as React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link className='nav__link' to='#' activeStyle={{ textDecoration: 'underline' }}>
        Accueil
      </Link>
      <a className='nav__link' href='/#cabinet' activeStyle={{ textDecoration: 'underline' }}>
        Le cabinet
      </a>
      {/* <Link className='nav__link' to='/infos'>
          Informations
        </Link> */}
      <a className='nav__link' href='/#nous-trouver' activeStyle={{ textDecoration: 'underline' }}>
        Nous trouver
      </a>
      <a className='nav__link' href='/#nous-contacter' activeStyle={{ textDecoration: 'underline' }}>
        Contact
      </a>
    </nav>
  );
};

export default Nav;
