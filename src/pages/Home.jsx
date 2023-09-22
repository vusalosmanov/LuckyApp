import React from "react";
import Swiper from "../components/Swipers.jsx";
import Swiperforoffice from "../components/Swiperforoffice.jsx";
import Swiperforfood from "../components/Swiperforfood.jsx";
import coverkagiz from "../assets/image/category-cover/cover-kagiz.jpg";
import coverqelem from "../assets/image/category-cover/cover-qelem.png";
import coverqovluq from "../assets/image/category-cover/cover-qovluq.jpg";
import covermarker from "../assets/image/category-cover/cover-marker.jpg";
import coverstepler from "../assets/image/category-cover/cover-stepler.jpg";
import coverpozan from "../assets/image/category-cover/cover-pozan.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] mt-[30px] mb-[80px]">
        <Swiper />
      </div>
      <section className="bg-[#f8f8f8] py-[100px] bgimage ">
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
      <section className="bg-[#fc8410] py-[100px]">
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] flex items-center flex-wrap gap-y-10 gap-x-5 justify-center ">
          <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center flex-col justify-center w-full">
            {/* <Link to="/categoryproduct">
              <div className="h-[300px]  max-w-[400px] w-full  flex items-center">
                <h2 className="absolute top-2">Kagiz</h2>
                <img src={coverkagiz} alt="" />
              </div>
            </Link> */}
          </div>
          {/* <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center flex-col justify-center w-full">
            <Link to="/categoryproduct">
              <div className="h-[300px]  max-w-[400px] w-full  flex items-center">
                <h2 className="absolute top-2">Qələm</h2>
                <img src={coverqelem} alt="" />
              </div>
            </Link>
          </div>
          <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center flex-col justify-center w-full">
            <Link to="/categoryproduct">
              <div className="h-[300px]  max-w-[400px] w-full  flex items-center">
                <h2 className="absolute top-2 left-4">Qovluq</h2>
                <img src={coverqovluq} alt="" />
              </div>
            </Link>
          </div>
          <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center flex-col justify-center w-full">
            <Link to="/categoryproduct">
              <div className="h-[300px]  max-w-[400px] w-full  flex items-center">
                <h2 className="absolute top-2 left-4">Marker</h2>
                <img src={covermarker} alt="" className=" w-[250px]" />
              </div>
            </Link>
          </div>
          <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center flex-col justify-center w-full">
            <Link to="/categoryproduct">
              <div className="h-[300px]  max-w-[400px] w-full  flex items-center">
                <h2 className="absolute top-2 left-4">Stepler</h2>
                <img
                  src={coverstepler}
                  alt=""
                  className=" w-[300px] bg-cover"
                />
              </div>
            </Link>
          </div> */}
          {/* <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center flex-col justify-center w-full">
            <Link to="/categoryproduct">
              <div className="h-[300px]  max-w-[400px] w-full  flex items-center">
                <h2 className="absolute top-2 left-4">Pozan</h2>
                <img src={coverpozan} alt="" className="w-[300px] " />
              </div>
            </Link>
          </div> */}
        </div>
      </section>
      <section className="bg-[#f8f8f8] py-[100px] bgimage ">
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] ">
          <div className="flex justify-center mb-[55px] relative">
            <h2 className="text-[30px]">Qida və İckilər</h2>
            <div className="w-[35px] h-[4px] bg-[#106853] absolute left-[50%] bottom-[-18px] rounded"></div>
          </div>
        </div>
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px]">
          <Swiperforfood />
        </div>
      </section>
    </>
  );
};

export default Home;
