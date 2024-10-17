import React from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { v4 as uuidv4 } from 'uuid';
import { Navigation, Mousewheel, Pagination, Scrollbar } from 'swiper/modules';

const Slider = ({ events }) => {
  return (
    <div className='my-swiper relative mb-[5vh] w-full'>
      <Swiper
        className='h-[500px] flex justify-center'
        modules={[Navigation, Mousewheel, Pagination, Scrollbar]}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true, thresholdDelta: 50 }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          520: { slidesPerView: 2, spaceBetween: 50 },
          700: { slidesPerView: 3, spaceBetween: 10 },
          1080: { slidesPerView: 4, spaceBetween: 10 },
          1268: { slidesPerView: 5, spaceBetween: 10 }
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {events.map((event) => (
            <SwiperSlide key={uuidv4()} className='h-full'>
            <Card event={event} />
          </SwiperSlide>)
        )}
      </Swiper>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-pagination z-20"></div>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
    </div>
  );
};

export default Slider;
