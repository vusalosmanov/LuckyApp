import React from 'react'
import coverkagiz from "../assets/image/category-cover/cover-kagiz.jpg";
import coverqelem from "../assets/image/category-cover/cover-qelem.png";
import coverqovluq from "../assets/image/category-cover/cover-qovluq.jpg";
import covermarker from "../assets/image/category-cover/cover-marker.jpg";
import coverstepler from "../assets/image/category-cover/cover-stepler.jpg";
import coverpozan from "../assets/image/category-cover/cover-pozan.jpg";
import { Link } from "react-router-dom";

const CategoryCart = () => {
  return (
    <>
         <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] flex items-center flex-wrap gap-y-10 gap-x-5 justify-center ">
          <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center flex-col justify-center w-full">
            <Link to="/categoryproduct">
              <div className="h-[300px]  max-w-[400px] w-full  flex items-center">
                <h2 className="absolute top-2">Kagiz</h2>
                <img src={coverkagiz} alt="" />
              </div>
            </Link>
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
          </div>
          <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center flex-col justify-center w-full">
            <Link to="/categoryproduct">
              <div className="h-[300px]  max-w-[400px] w-full  flex items-center">
                <h2 className="absolute top-2 left-4">Pozan</h2>
                <img src={coverpozan} alt="" className="w-[300px] " />
              </div>
            </Link>
          </div> */}
        </div>
    </>
  )
}

export default CategoryCart