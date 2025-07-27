import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Service.css';
import gallery from "../../../Gallery/g1.jpeg";
import gallery1 from "../../../Gallery/g2.jpeg";
import gallery2 from "../../../Gallery/g3.jpeg";
import gallery3 from "../../../Gallery/g4.jpeg";
import gallery4 from "../../../Gallery/g5.jpeg";
import gallery5 from "../../../Gallery/g6.jpeg";
import gallery6 from "../../../Gallery/g7.jpeg";
import gallery7 from "../../../Gallery/g8.jpeg";
import gallery8 from "../../../Gallery/g9.jpeg";


import { Pagination } from 'swiper/modules';

export default function Service() {
  return (
    <>
      <div id='/Service' className='py-10 p-5 md:p-10 lg:p-20 bg-gray-800'>
        <div className='lg:flex items-center gap-10'>

          <div className='lg:w-2/4 h-screen'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><img className='h-full rounded-sm' data-aos="slide-down" src={gallery}  /></SwiperSlide>
              <SwiperSlide><img className='h-full rounded-sm' data-aos="slide-up" src={gallery1}  /></SwiperSlide>
              <SwiperSlide><img className='h-full rounded-sm' data-aos="slide-down" src={gallery2}  /></SwiperSlide>
              <SwiperSlide><img className='h-full rounded-sm' data-aos="slide-up" src={gallery3}  /></SwiperSlide>
              <SwiperSlide><img className='h-full rounded-sm' data-aos="slide-down" src={gallery4}  /></SwiperSlide>
              <SwiperSlide><img className='h-full rounded-sm' data-aos="slide-up" src={gallery5}  /></SwiperSlide>
              <SwiperSlide><img className='h-full rounded-sm' data-aos="slide-down" src={gallery6}  /></SwiperSlide>
              <SwiperSlide><img className='h-full rounded-sm' data-aos="slide-up" src={gallery7}  /></SwiperSlide>
              <SwiperSlide><img className='h-full rounded-sm' data-aos="slide-down" src={gallery8}  /></SwiperSlide>
            </Swiper>
          </div>
          <div className='pt-10 lg:pt-0'>
            <h1 data-aos="slide-down" className='text-4xl md:text-6xl  font-bold hero-heading'>Our Work, Your Beauty</h1>
            <p data-aos="slide-up" className='text-xl md:text-2xl my-4 shadow'>Each style you see here is the result of skilled hands, personalized consultations, and premium salon care. Whether it’s a classic cut, modern color, or bridal transformation — we deliver results that reflect your true beauty.</p>
          </div>

        </div>
      </div>

    </>
  );
}
