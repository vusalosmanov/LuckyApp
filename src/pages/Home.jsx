import React from "react";
import Swiper from "../components/swiper/Swipers.jsx";
import Swiperforoffice from "../components/swiper/Swiperforoffice.jsx";
import Swiperforfood from "../components/swiper/Swiperforfood.jsx";
import CategoryCartOrange from "../components/category/CategoryCartOrange";
import CategoryCartGreen from "../components/category/CategoryCartGreen.jsx";

const Home = () => {
  
  return (
    <>
      <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] mt-[30px] mb-[80px]">
        <Swiper />
      </div>
      <section className="bg-[#f8f8f8] py-[100px] bgimage ">
        <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] ">
          <div className="flex justify-center mb-[55px] relative">
            <h2 className="text-[30px]">Ofis Ləvazimatları</h2>
            <div className="w-[35px] h-[4px] bg-[#106853] absolute left-[50%] bottom-[-18px] rounded"></div>
          </div>
        </div>
        <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px]">
          <Swiperforoffice />
        </div>
      </section>
      <section className="bg-[#fc8410] py-[100px]">
        <CategoryCartOrange/>
      </section>
      <section className="bg-[#f8f8f8] py-[100px] bgimage ">
        <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] ">
          <div className="flex justify-center mb-[55px] relative">
            <h2 className="text-[30px]">Qida və İckilər</h2>
            <div className="w-[35px] h-[4px] bg-[#106853] absolute left-[50%] bottom-[-18px] rounded"></div>
          </div>
        </div>
        <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px]">
          <Swiperforfood />
        </div>
      </section>
      <section className="bg-[#106853] py-[100px]">
       <CategoryCartGreen/>
      </section>
    </>
  );
};

export default Home;
