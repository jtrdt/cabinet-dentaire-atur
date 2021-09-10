import * as React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  return (
    <div>
      <Nav />
      <main>
        <section>
          <title>Cabinet l'Effet Dentaire — Dentiste Périgueux Boulazac Atur</title>
          <h1>
            Cabinet l'Effet Dentaire <br />
            Votre chirurgien dentiste à Boulazac Isle Manoire
          </h1>
          <div>
            <ul>
              <li>
                <strong>Dr COSTA Charlotte</strong>
              </li>
              <li>
                <strong>Dr DAOULAS Noémie</strong>
              </li>
              <li>
                <strong>Dr TRIDAT Floriane</strong>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>
            Bienvenue sur le site du Cabinet l'Effet Dentaire votre centre de soins dentaires à Boulazac Isle Manoire
          </h2>
        </section>
        <section>
          <article>
            <h3>Notre équipe</h3>
            <div>
              <ul>
                <li>
                  <strong>Dr COSTA Charlotte</strong>
                  <p>Université Lille 2</p>
                  <p>Inscription à l’ordre n° 24/827</p>
                </li>
                <li>
                  <strong>Dr DAOULAS Noémie</strong>
                  <p>Université Bordeaux 2</p>
                  <p>Inscription à l’ordre n°24/xxx</p>
                </li>
                <li>
                  <strong>Dr TRIDAT Floriane</strong>
                  <p>Université Clermont Auvergne</p>
                  <p>Inscription à l’ordre n° 24/874</p>
                </li>
              </ul>
              <p>Assistantes : Aline et Amanda</p>
              <p>Sécrétaire : Antoinette</p>
            </div>
          </article>
          <article>
            <h3>Le cabinet</h3>
            <p>
              Pour vous accueillir, nous disposons de 4 salles de soins, 1 radio panoramique et 2 salles de
              stérilisation. Le cabinet est aménagé pour l'accueil des personnes à mobilité réduite.
            </p>
          </article>
        </section>
        <section id='nous-trouver'>
          <h3>Nous trouver</h3>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.225720107821!2d0.7475222155466871!3d45.14202377909847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff7b8d5da8e4e3%3A0x1a0a012d0a03e64d!2sCabinet%20dentaire%20Dr%20Costa%2C%20Dr%20Daoulas%2C%20Dr%20Tridat!5e0!3m2!1sfr!2sfr!4v1630562750300!5m2!1sfr!2sfr'
            title='map'
          ></iframe>
        </section>
        <section id='nous-contacter'>
          <h3>Nous contacter</h3>
          <div>
            <button>
              <div>
                Par téléphone
                <a href='tel:+33564340130'>05 64 34 01 30</a>
              </div>
            </button>
            <p>Du lundi au jeudi 9h30-12h et 14h-17h — vendredi 9h30-12h</p>
          </div>
          <div>
            <button>
              <a href='mailto:effet.dentaire@gmail.com?subject=Demande%20de%20renseignements&body=Bonjour%2C'>
                Par email
              </a>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
