import * as React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

// styles

// data

// markup
const IndexPage = () => {
  return (
    <div>
      <Nav />
      <main>
        <section>
          <title>Home Page</title>
          <h1>
            Cabinet l'Effet Dentaire <br /> Votre chirurgien dentiste à
            Périgueux et Boulazac.
          </h1>
          <div>
            <p>Dr COSTA Charlotte</p>
            <p>Dr DAOULAS Noémie</p>
            <p>Dr TRIDAT Floriane</p>
          </div>
        </section>
        <section>
          <h2>
            Bienvenu sur le site web du Cabinet l'Effet Dentaire, votre centre
            de soins dentaires à Périgueux et Boulazac.
          </h2>
          <article>
            <h3>L'équipe</h3>
            <p>
              Notre équipe de professionnels saura répondre à tous vos besoins.
            </p>
            <div>
              <p>Dr COSTA Charlotte</p>
              <p>Dr DAOULAS Noémie</p>
              <p>Dr TRIDAT Floriane</p>
              <p>empty</p>
              <p>empty</p>
              <p>empty</p>
            </div>
          </article>
          <article>
            <h3>Le cabinet</h3>
            <p>
              Pour vous accueillir, nous disposons de 4 salles de soins, 1 radio
              panoramique et 2 salles de stérilisations. Le Cabinet l'Effet
              Dentaire est aménagé pour l'accueil des personnes à mobilité
              réduite.
            </p>
          </article>
        </section>
        <section>
          <h3>Nous trouver</h3>
          <iframe></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
