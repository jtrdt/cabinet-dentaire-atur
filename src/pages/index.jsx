import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import Carousel from '../components/Swiper/Swiper';
import '../styles/index.css';
import { Helmet } from 'react-helmet';
import favincon from '../images/icon.png';

const IndexPage = () => {
  return (
    <div className='page'>
      <Helmet htmlAttributes={{ lang: 'fr' }}>
        <title>Cabinet l'Effet Dentaire Atur Boulazac Isle Manoire Périgueux</title>
        <meta
          name='description'
          content="Site web du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
        />
        <link rel='icon' type='image/png' href={favincon} sizes='16x16' />
      </Helmet>

      <Nav />
      <main>
        <section className='home'>
          <div className='home-container flex'>
            <title>Cabinet l'Effet Dentaire — Dentiste Atur Boulazac Isle Manoire Grand Périgueux</title>
            <h1 className='home-container__headline headline'>
              Cabinet <br /> l'Effet Dentaire <br />
              <span className='home-container__headline home-container__headline--alt'>
                Votre chirurgien dentiste à Atur - Boulazac Isle Manoire
              </span>
            </h1>
            <ul className='home-container__text'>
              <li className='home-container__text--name'>
                <p>Dr COSTA Charlotte</p>
              </li>
              <li className='home-container__text--name'>
                <p>Dr DAOULAS Noémie</p>
              </li>
              <li className='home-container__text--name'>
                <p>Dr TRIDAT Floriane</p>
              </li>
            </ul>
          </div>
        </section>
        <section className='welcome'>
          <div className='welcome-container flex'>
            <h2 className='welcome-container__headline'>
              Bienvenue sur le site du <br />
              <span className='welcome-container__headline--alt'>Cabinet l'Effet Dentaire,</span> notre équipe vous
              accueille à <br />
              <span className='welcome-container__headline--alt'>Atur - Boulazac Isle Manoire</span>.
            </h2>
          </div>
        </section>
        <section id='cabinet' className='about flex'>
          <div className='about-container flex'>
            <article className='about-article about-article--top'>
              <h3 className='about-article__headline headline'>Notre équipe</h3>
              <div className='line'></div>
              <div>
                <ul className='about-article__text'>
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
                    <strong>Dr LONGUEVILLE Mathilde</strong>
                    <p>Université Bordeaux 2</p>
                    <p>Inscription à l’ordre n° 24/951</p>
                  </li>
                  <li>
                    <strong>Dr TRIDAT Floriane</strong>
                    <p>Université Clermont Auvergne</p>
                    <p>Inscription à l’ordre n° 24/874</p>
                  </li>
                </ul>
                <p className='about-article__text'>Assistantes : Aline et Élodie</p>
                <p className='about-article__text'>Sécrétaire : Antoinette</p>
              </div>
            </article>
            <StaticImage
              src='../images/ETEC - CABINET DENTAIRE - 006.jpg'
              alt="L'équipe de dentistes du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
              className='image'
              layout='constrained'
            />
          </div>
          <div className='about-container flex'>
            <article className='about-article about-article--bottom'>
              <h3 className='about-article__headline headline'>Le cabinet</h3>
              <div className='line'></div>
              <p className='about-article__text'>
                Pour vous accueillir, nous disposons de 4 salles de soins, 1 radio panoramique et 2 salles de
                stérilisation. <br />
                <br /> Le cabinet est aménagé pour l'accueil des personnes à mobilité réduite.
              </p>
            </article>
            <Carousel />
          </div>
        </section>
        <section id='nous-trouver' className='location flex'>
          <h3 className='location__headline headline'>Nous trouver</h3>
          <div className='line line--alt'></div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.225720107821!2d0.7475222155466871!3d45.14202377909847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff7b8d5da8e4e3%3A0x1a0a012d0a03e64d!2sCabinet%20dentaire%20Dr%20Costa%2C%20Dr%20Daoulas%2C%20Dr%20Tridat!5e0!3m2!1sfr!2sfr!4v1630562750300!5m2!1sfr!2sfr'
            title='map'
          ></iframe>
        </section>
        <section id='nous-contacter' className='contact flex'>
          <h3 className='contact__headline headline'>Nous contacter</h3>
          <div className='line line--alt'></div>
          <div className='contact-container flex'>
            <div className='contact-card flex'>
              <button className='contact-card__button flex'>
                <a href='tel:+33564340130'>Par téléphone</a>
              </button>
              <p className='contact-card__text'>
                Au 05 64 34 01 30 <br /> du lundi au jeudi <br /> 9h30-12h et 14h-17h <br /> vendredi 9h30-12h
              </p>
            </div>
            <div className='contact-card flex'>
              <button className='contact-card__button flex'>
                <a href='mailto:effet.dentaire@gmail.com?subject=Demande%20de%20renseignements'>Par email</a>
              </button>
              <p className='contact-card__text'>
                <a href='mailto:effet.dentaire@gmail.com?subject=Demande%20de%20renseignements'>
                  effet.dentaire@gmail.com
                </a>
                <br /> Écrivez-nous, notre secrétaire vous répondra dans les meilleurs délais !
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
