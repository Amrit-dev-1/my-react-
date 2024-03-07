

import image1 from '../src/images/banner/homepage-banner-(1).webp';
import image2 from '../src/images/banner/homepage-banner-(2).webp';
import image3 from '../src/images/banner/homepage-banner-(3).webp';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     <SwiperSlide>
        <img class="img-fluid" src={image1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="img-fluid" src={image2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="img-fluid" src={image3} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>

  );
};
