import * as React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import '../styles/index.css';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <div>
      <Nav />
      <main>
        <section class='home'>
          <div class='home-gradient'>
            <title>Cabinet l'Effet Dentaire — Dentiste Boulazac Isle Manoire Atur Grand Périgueux</title>
            <h1 class='title'>
              Cabinet l'Effet Dentaire <br />
              <span class='title title--small'>Votre chirurgien dentiste à Boulazac Isle Manoire</span>
            </h1>
            <ul class='crew'>
              <li class='crew__name'>
                <strong>Dr COSTA Charlotte</strong>
              </li>
              <li class='crew__name'>
                <strong>Dr DAOULAS Noémie</strong>
              </li>
              <li class='crew__name'>
                <strong>Dr TRIDAT Floriane</strong>
              </li>
            </ul>
          </div>
        </section>
        <section class='welcome'>
          <div class='welcome-shade'>
            <h2 class='welcome__headline'>
              Bienvenue sur le site du <span class='welcome__headline--bold'>Cabinet l'Effet Dentaire</span> notre
              équipe vous accueille à <br />
              <span class='welcome__headline--bold'>Boulazac - Grand Périgueux</span>
            </h2>
          </div>
        </section>
        <section class='about'>
          <div class='about-container'>
            <StaticImage
              src='../images/ETEC - CABINET DENTAIRE - ATUR - PORTRAITS-001.jpg'
              alt="L'équipe de dentistes du cabinet l'Effet Dentaire à Atur Boulazac Périgueux"
              placeholder='blurred'
              layout='fixed'
              width={400}
              height={266}
            />
            <article class='about-article'>
              <h3 class='about-article__headline'>Notre équipe</h3>
              <div class='line'></div>
              <div>
                <ul class='about-article__text'>
                  <li>
                    <strong>Dr COSTA Charlotte</strong>
                    <p>Université Lille 2</p>
                    <p>Inscription à l’ordre n° 24/827</p>
                  </li>
                  <li>
                    <strong>Dr DAOULAS Noémie</strong>
                    <p>Université Bordeaux 2</p>
                    <p>Inscription à l’ordre n°24/832</p>
                  </li>
                  <li>
                    <strong>Dr TRIDAT Floriane</strong>
                    <p>Université Clermont Auvergne</p>
                    <p>Inscription à l’ordre n° 24/874</p>
                  </li>
                </ul>
                <p class='about-article__text'>Assistantes : Aline et Amanda</p>
                <p class='about-article__text'>Sécrétaire : Antoinette</p>
              </div>
            </article>
          </div>
          <div class='about-container'>
            <StaticImage
              src='../images/ETEC - CABINET DENTAIRE - ATUR - BATIMENT-023.jpg'
              alt="Salle de stérilisation du cabinet l'Effet Dentaire à Atur Boulazac Périgueux"
              placeholder='blurred'
              layout='fixed'
              width={400}
              height={266}
            />
            <article class='about-article'>
              <h3 class='about-article__headline'>Le cabinet</h3>
              <div class='line'></div>
              <p class='about-article__text'>
                Pour vous accueillir, nous disposons de 4 salles de soins, 1 radio panoramique et 2 salles de
                stérilisation. <br />
                <br /> Le cabinet est aménagé pour l'accueil des personnes à mobilité réduite.
              </p>
            </article>
          </div>
        </section>
        <section id='nous-trouver' class='find'>
          <h3 class='find__headline'>Nous trouver</h3>
          <div class='line line--big'></div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.225720107821!2d0.7475222155466871!3d45.14202377909847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff7b8d5da8e4e3%3A0x1a0a012d0a03e64d!2sCabinet%20dentaire%20Dr%20Costa%2C%20Dr%20Daoulas%2C%20Dr%20Tridat!5e0!3m2!1sfr!2sfr!4v1630562750300!5m2!1sfr!2sfr'
            title='map'
          ></iframe>
        </section>
        <section id='nous-contacter' class='contact'>
          <h3 class='contact__headline'>Nous contacter</h3>
          <div class='line line--big'></div>
          <div class='contact-container'>
            <div class='contact-card'>
              <button class='contact-card__button'>
                <p>Par téléphone</p>
                <a href='tel:+33564340130'>05 64 34 01 30</a>
              </button>
              <p>
                Du lundi au jeudi <br /> 9h30-12h et 14h-17h <br /> — <br /> vendredi 9h30-12h
              </p>
            </div>
            <div class='contact-card'>
              <button class='contact-card__button'>
                <a href='mailto:effet.dentaire@gmail.com?subject=Demande%20de%20renseignements&body=Bonjour%2C'>
                  Par email
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
