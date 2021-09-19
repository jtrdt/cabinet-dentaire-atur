import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.css';

SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className='mySwiper'
        navigation
        pagination={{ dynamicBullets: true, clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <StaticImage
            src='../../images/ETEC - CABINET DENTAIRE - 002.jpg'
            alt="Salle d'attente du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src='../../images/ETEC - CABINET DENTAIRE - 003.jpg'
            alt="Salle de stérilisation du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src='../../images/ETEC - CABINET DENTAIRE - 004.jpg'
            alt="Salle de radio du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src='../../images/ETEC - CABINET DENTAIRE - 005.jpg'
            alt="Salle de soin du cabinet l'Effet Dentaire à Atur Boulazac Isle Manoire Périgueux"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
