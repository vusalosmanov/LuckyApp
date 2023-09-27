import React from "react";
import { Navigation,  Mousewheel, Keyboard, Autoplay } from "swiper/modules"
import Cofe from "../../assets/image/banner-slider/img-1.jpg"
import Lucy from "../../assets/image/banner-slider/img-2.jpg"
import Elektron from "../../assets/image/banner-slider/img-3.jpg"
import Qida from "../../assets/image/banner-slider/img-4.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
const Swipers = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        className="w-full"
      >
        <SwiperSlide>
          <img src={Qida} alt="qida" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Elektron} alt="elektron" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lucy} alt="lucy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cofe} alt="lucy" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipers;
