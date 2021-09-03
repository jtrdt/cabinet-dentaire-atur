import * as React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  return (
    <div>
      <Nav />
      <main>
        <section>
          <title>Home Page</title>
          <h1>
            Cabinet l'Effet Dentaire <br />
            Votre équipe de chirurgien-dentiste à Périgueux et Boulazac.
          </h1>
          <div>
            <strong>Dr COSTA Charlotte</strong>
            <strong>Dr DAOULAS Noémie</strong>
            <strong>Dr TRIDAT Floriane</strong>
          </div>
        </section>
        <section>
          <h2>
            Bienvenue sur le site web du Cabinet l'Effet Dentaire, votre centre de soins dentaires à Périgueux et
            Boulazac.
          </h2>
          <article>
            <h3>L'équipe</h3>
            <p>Notre équipe de professionnels saura répondre à tous vos besoins.</p>
            <div>
              <p>Dr COSTA Charlotte</p>
              <p>Dr DAOULAS Noémie</p>
              <p>Dr TRIDAT Floriane</p>
              <p>Aline</p>
              <p>Amanda</p>
              <p>Antoinette</p>
            </div>
          </article>
          <article>
            <h3>Le cabinet</h3>
            <p>
              Pour vous accueillir, nous disposons de 4 salles de soins, 1 radio panoramique et 2 salles de
              stérilisations. Le Cabinet l'Effet Dentaire est aménagé pour l'accueil des personnes à mobilité réduite.
            </p>
          </article>
        </section>
        <section>
          <h3>Nous trouver</h3>
          <iframe
            // src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.225720107821!2d0.7475222155466871!3d45.14202377909847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff7b8d5da8e4e3%3A0x1a0a012d0a03e64d!2sCabinet%20dentaire%20Dr%20Costa%2C%20Dr%20Daoulas%2C%20Dr%20Tridat!5e0!3m2!1sfr!2sfr!4v1630562750300!5m2!1sfr!2sfr'
            title='map'
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
