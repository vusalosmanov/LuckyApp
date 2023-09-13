import React from "react";
import { Navigation, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import ProductCart from "../productcomponents/ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { productArry } from "../../components/productData/ProductData.js";
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
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
          {productArry?.length > 0 &&
            productArry.map((product) => (
              // .filter((item) => item.bestSeller === true)
              <SwiperSlide>
                <ProductCart
                  id={product.id}
                  productName={product.name}
                  price={product.price}
                  imageurl={product.img}
                  key={product.id}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default Swipers;
