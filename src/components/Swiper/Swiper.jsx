import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.css';
SwiperCore.use([Pagination, Autoplay]);

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        className='mySwiper'
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <StaticImage
            src='../../images/ETEC - CABINET DENTAIRE - ATUR - BATIMENT-002.jpg'
            alt="Salle de stérilisation du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
            placeholder='blurred'
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src='../../images/ETEC - CABINET DENTAIRE - ATUR - BATIMENT-003.jpg'
            alt="Salle de stérilisation du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
            placeholder='blurred'
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src='../../images/ETEC - CABINET DENTAIRE - ATUR - BATIMENT-013.jpg'
            alt="Salle de stérilisation du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
            placeholder='blurred'
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src='../../images/ETEC - CABINET DENTAIRE - ATUR - BATIMENT-016.jpg'
            alt="Salle de stérilisation du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
            placeholder='blurred'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
