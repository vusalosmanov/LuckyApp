import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Product.scss";

const Product = ({ productName, price, imageurl }) => {
  return (
    <>
      <div className="flex justify-center">
          <div className="flex bg-[#fff] w-[260px] pt-[7px] pr-[15px] pb-[20px] pl-[15px] items-center flex-col justify-center  ">
            <div className="relative min-h-[40px] w-full flex justify-end z-50">
              <button>
                <Link to="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="file: mt-4 h-4 w-5  text-white mb-3"
                    className=" w-9 h-6 text-center ml-[5.5px] text-[#f15803]"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
                </Link>
              </button>
            </div>
            <div className="h-[200px] mb-[20px] max-w-[200px] w-full hover:scale-[1.1] image-hover flex items-center">
              <img src={imageurl} alt="" />
            </div>
            <div className="flex items-center justify-center flex-col mb-[20px] text-center w-full z-50">
              <div className="mb-[5px] min-h-[60px] px-[10px] flex justify-center items-center">
                <p>{productName}</p>
              </div>
              <div className="flex items-center justify-center flex-row">
                <p>{price.toFixed(2)}AZN</p>
              </div>
            </div>
            <button className="max-w-[150px] py-[10px] px-[20px] text-[black] w-full border-[1px] rounded hover:bg-lime-800 hover:text-[white] transition ease-in-out duration-200">
              Səbətə at
            </button>
          </div>
        </div>
    </>
  );
};

export default Product;
