import React from "react";
import styles from "./TabletCarousel.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { projectImages } from "../../data/projectImages";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const TabletCarousel = () => {
    return(
        <div className={styles.tabletFrame}>
       <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {projectImages.map((image, index) =>(
      <SwiperSlide key={index}>
        <img src={image.src} alt={image.alt} />
      </SwiperSlide>

    ))
    }

    </Swiper>

    <div className={styles.shape}>
      <div className={styles.shadows}>s</div>
    </div>
    </div>
    )
}