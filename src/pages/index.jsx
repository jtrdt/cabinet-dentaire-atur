import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import '../styles/index.css';

const IndexPage = () => {
  return (
    <div class='page'>
      <Nav />
      <main>
        <section class='home'>
          <div class='home-container flex'>
            <title>Cabinet l'Effet Dentaire — Dentiste Atur Boulazac Isle Manoire Grand Périgueux</title>
            <h1 class='home-container__headline headline'>
              Cabinet <br /> l'Effet Dentaire <br />
              <span class='home-container__headline home-container__headline--alt'>
                Votre chirurgien dentiste à Atur - Boulazac Isle Manoire
              </span>
            </h1>
            <ul class='home-container__text'>
              <li class='home-container__text--name'>
                <p>Dr COSTA Charlotte</p>
              </li>
              <li class='home-container__text--name'>
                <p>Dr DAOULAS Noémie</p>
              </li>
              <li class='home-container__text--name'>
                <p>Dr TRIDAT Floriane</p>
              </li>
            </ul>
          </div>
        </section>
        <section class='welcome'>
          <div class='welcome-container flex'>
            <h2 class='welcome-container__headline'>
              Bienvenue sur le site du <span class='welcome-container__headline--alt'>Cabinet l'Effet Dentaire,</span>{' '}
              notre équipe vous accueille à <br />
              <span class='welcome-container__headline--alt'>Atur - Boulazac Isle Manoire</span>.
            </h2>
          </div>
        </section>
        <section id='cabinet' class='about'>
          <div class='about-container flex'>
            <article class='about-article about-article--crew'>
              <h3 class='about-article__headline headline'>Notre équipe</h3>
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
            <StaticImage
              src='../images/ETEC - CABINET DENTAIRE - ATUR - PORTRAITS-004.jpg'
              alt="L'équipe de dentistes du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
              placeholder='blurred'
              class='image image--crew'
            />
          </div>
          <div class='about-container flex'>
            <StaticImage
              src='../images/ETEC - CABINET DENTAIRE - ATUR - BATIMENT-003.jpg'
              alt="Salle de stérilisation du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
              placeholder='blurred'
              class='image image--lab'
            />
            <article class='about-article about-article--lab'>
              <h3 class='about-article__headline headline'>Le cabinet</h3>
              <div class='line'></div>
              <p class='about-article__text'>
                Pour vous accueillir, nous disposons de 4 salles de soins, 1 radio panoramique et 2 salles de
                stérilisation. <br />
                <br /> Le cabinet est aménagé pour l'accueil des personnes à mobilité réduite.
              </p>
            </article>
          </div>
        </section>
        <section id='nous-trouver' class='location flex'>
          <h3 class='location__headline headline'>Nous trouver</h3>
          <div class='line line--alt'></div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.225720107821!2d0.7475222155466871!3d45.14202377909847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff7b8d5da8e4e3%3A0x1a0a012d0a03e64d!2sCabinet%20dentaire%20Dr%20Costa%2C%20Dr%20Daoulas%2C%20Dr%20Tridat!5e0!3m2!1sfr!2sfr!4v1630562750300!5m2!1sfr!2sfr'
            title='map'
          ></iframe>
        </section>
        <section id='nous-contacter' class='contact flex'>
          <h3 class='contact__headline headline'>Nous contacter</h3>
          <div class='line line--alt'></div>
          <div class='contact-container flex'>
            <div class='contact-card flex'>
              <button class='contact-card__button flex'>
                <a href='tel:+33564340130'>Par téléphone</a>
              </button>
              <p class='contact-card__text'>
                Au 05 64 34 01 30 <br /> du lundi au jeudi <br /> 9h30-12h et 14h-17h <br /> vendredi 9h30-12h
              </p>
            </div>
            <div class='contact-card flex'>
              <button class='contact-card__button flex'>
                <a href='mailto:contact@cabinet-dentaire-atur.fr?subject=Demande%20de%20renseignements'>Par email</a>
              </button>
              <p class='contact-card__text'>Écrivez-nous, notre secrétaire vous répondra dans les meilleurs délais !</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
