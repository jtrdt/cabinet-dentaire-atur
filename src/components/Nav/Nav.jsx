import * as React from 'react';
import { Link } from 'gatsby';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div>
        <Link to='/'>Acceuil</Link>
        <Link to='/infos'>Informations</Link>
        <Link to='/contact'>Contacts</Link>
      </div>
    </nav>
  );
};

export default Nav;
