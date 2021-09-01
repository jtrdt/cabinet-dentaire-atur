import * as React from "react";
import { Link } from "gatsby";
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      <p>Designed by Bill &amp; Pecoss - 2021</p>
      <div>
        <Link to="/">Acceuil</Link>
        <Link to="/infos">Informations</Link>
        <Link to="/contact">Contacts</Link>
      </div>
    </footer>
  );
}
