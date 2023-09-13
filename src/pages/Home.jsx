import React from "react";
import Swiper from "../components/slidercomponents/Swipers.jsx";
import Swiperforoffice from "../components/slidercomponents/Swiperforoffice.jsx";
const Home = () => {
  return (
    <>
      <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] mt-[30px] mb-[80px]">
        <Swiper />
      </div>
      <section className="bg-[#f8f8f8] py-[80px] bgimage h-[900px]">
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] ">
          <div className="flex justify-center mb-[55px] relative">
            <h2 className="text-[30px]">Ofis Ləvazimatları</h2>
            <div className="w-[35px] h-[4px] bg-[#106853] absolute left-[50%] bottom-[-18px] rounded"></div>
          </div>
        </div>
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px]">
          <Swiperforoffice />
        </div>
      </section>
    </>
  );
};

export default Home;
