import React, { ReactNode } from 'react'



import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./styles.css"

interface SliderProps {
  children: React.ReactNode
}
export const Slider = ({children}: SliderProps) => {
  return (
    
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {children}

    </Swiper>
  )
}
