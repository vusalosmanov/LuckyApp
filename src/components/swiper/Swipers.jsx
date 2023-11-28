import React from "react";
import { Navigation, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { bannerArr } from '../data/BannerData';

const Swipers = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        className="w-full"
      >
        {bannerArr.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Swipers;
