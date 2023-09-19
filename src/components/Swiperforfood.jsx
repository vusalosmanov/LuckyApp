import React from "react";
import { Navigation, Mousewheel, Keyboard, Autoplay, Pagination } from "swiper/modules";
import ProductCart from "./ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { productArry } from "./productData/ProductData.js";
const Swipers = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay , Pagination]}
        className="w-full "
        // pagination={{
        //   clickable: true,
        // }}
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
            productArry
            .filter((item) => item.bestSeller === true && item.categoryID === 2)
            .map((product) => (
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
