import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo-header.svg";
import Input from "./Input.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { MdFoodBank } from "react-icons/md";
import { Im500Px } from "react-icons/im";
import { GrCloudComputer } from "react-icons/gr";
import { GiRose } from "react-icons/gi";
import { AiTwotoneGift } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import "../assets/styles/components/Header.scss";
import "../assets/index.scss";
import { subcategoryArray } from "../components/productData/SubcategoryData.js";
import { categoryArray } from "./productData/CategoryData";
const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="w-[1320px]  mx-auto pr-[10px] pl-[10px] ">
            <div className="flex justify-end flex-row items-center pt-[15px]  pb-[15px] w-[100%] ">
              <Link
                to=""
                className="mr-[20px] border-[2px] rounded-[5px] border-[white] text-[white] pt-[10px] pb-[10px] pr-[20px] pl-[20px] text-[16px] relative"
              >
                Daxil ol
              </Link>
              <Link
                to=""
                className=" rounded-[5px] border-[2px] border-[white] text-[black] bg-white pt-[10px] pb-[10px] pr-[20px] pl-[20px] text-[16px] relative"
              >
                Qeydiyyat
              </Link>
            </div>
          </div>
        </nav>
        <nav>
          <div className="w-[1320px]  mx-auto  pr-[10px] pl-[10px]">
            <div className="flex justify-between items-center py-[15px]">
              <div className="relative">
                <Link to="">
                  <img
                    src={logo}
                    alt=""
                    className="max-w-[125px] object-contain w-[100%]"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center w-[100%]">
                <Input />
              </div>
              <div className="icon">
                <div className="flex gap-5">
                  <Link to="" className="relative">
                    <FaShoppingCart className="text-[white] text-[35px]" />
                  </Link>
                  <Link to="" className="relative">
                    <FaHeart className="text-[white] text-[35px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="relative mt-[20px]">
          <div className="flex">
            <div className="w-[550px] dropdown  bg-[#106853] h-[65px] flex justify-center items-center cursor-pointer text-[20px] text-[white]">
              <ul>
                <li className="flex items-center gap-3  px-4  cursor-pointer tracking-wide">
                  <HiMenu className="text-[24px]" />
                  <Link to="">Kataqoriya</Link>
                  <div className="dropdown-menu absolute hidden left-[150px]  h-auto  mt-[65px] z-[9999] top-0 w-full  max-w-[400px] ">
                    <ul className="bg-white shadow   flex flex-col items-start  ">
                      {categoryArray?.length > 0 &&
                        categoryArray
                          .filter((item) => item.id === 1)
                          .map((product) => (
                            <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                              <Link
                                to=""
                                className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                              >
                                <img src={product.icon} alt="" />
                                {product.name}
                              </Link>
                              <ul className=" absolute top-0 left-[100%] h-full w-[213%]  shadow-lg bg-white  hidden onechild  ">
                                <div className="w-full h-[264px] px-[20px] py-[20px] gridd  ">
                                  {subcategoryArray?.length > 0 &&
                                    subcategoryArray
                                      .filter((item) => item.categoryID === 1)
                                      .map((product) => (
                                        <li className="w-[100%]  mb-[10px] ">
                                          <Link
                                            to=""
                                            className=" p-[5px] text-black text-[18px]  font-montserrat font-sans capitalize "
                                          >
                                            {product.name}
                                          </Link>
                                        </li>
                                      ))}
                                </div>
                              </ul>
                            </li>
                          ))}
                      {categoryArray?.length > 0 &&
                        categoryArray
                          .filter((item) => item.id === 2)
                          .map((product) => (
                            <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                              <Link
                                to=""
                                className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                              >
                                <img
                                  src={product.icon}
                                  alt=""
                                  className="w-[18px] h-[18px]"
                                />
                                {product.name}
                              </Link>
                              <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                                <div className="w-full h-[88px] px-[20px] py-[20px] gridd  ">
                                  {subcategoryArray?.length > 0 &&
                                    subcategoryArray
                                      .filter((item) => item.categoryID === 2)
                                      .map((product) => (
                                        <li className="w-[100%] mb-[10px]">
                                          <Link
                                            to=""
                                            className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                          >
                                            {product.name}
                                          </Link>
                                        </li>
                                      ))}
                                </div>
                              </ul>
                            </li>
                          ))}
                      {categoryArray?.length > 0 &&
                        categoryArray
                          .filter((item) => item.id === 3)
                          .map((product) => (
                            <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                              <Link
                                to=""
                                className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                              >
                                <img src={product.icon} alt="" />
                                {product.name}
                              </Link>
                              <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                                <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                                  {subcategoryArray?.length > 0 &&
                                    subcategoryArray
                                      .filter((item) => item.categoryID === 3)
                                      .map((product) => (
                                        <li className="w-[32%] ">
                                          <Link
                                            to=""
                                            className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                          >
                                            {product.name}
                                          </Link>
                                        </li>
                                      ))}
                                </div>
                              </ul>
                            </li>
                          ))}
                      {categoryArray?.length > 0 &&
                        categoryArray
                          .filter((item) => item.id === 4)
                          .map((product) => (
                            <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                              <Link
                                to=""
                                className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                              >
                                <img
                                  src={product.icon}
                                  alt=""
                                  className="w-[18px] h-[18px]"
                                />
                                {product.name}
                              </Link>
                              <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                                <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                                  {subcategoryArray?.length > 0 &&
                                    subcategoryArray
                                      .filter((item) => item.categoryID === 4)
                                      .map((product) => (
                                        <li className="w-[32%] ">
                                          <Link
                                            to=""
                                            className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                          >
                                            {product.name}
                                          </Link>
                                        </li>
                                      ))}
                                </div>
                              </ul>
                            </li>
                          ))}
                      {categoryArray?.length > 0 &&
                        categoryArray
                          .filter((item) => item.id === 5)
                          .map((product) => (
                            <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                              <Link
                                to=""
                                className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                              >
                                <img
                                  src={product.icon}
                                  alt=""
                                  className="w-[18px] h-[18px]"
                                />
                                {product.name}
                              </Link>
                              <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                                <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                                  {subcategoryArray?.length > 0 &&
                                    subcategoryArray
                                      .filter((item) => item.categoryID === 5)
                                      .map((product) => (
                                        <li className="w-[32%] ">
                                          <Link
                                            to=""
                                            className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                          >
                                            {product.name}
                                          </Link>
                                        </li>
                                      ))}
                                </div>
                              </ul>
                            </li>
                          ))}
                      {categoryArray?.length > 0 &&
                        categoryArray
                          .filter((item) => item.id === 6)
                          .map((product) => (
                            <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                              <Link
                                to=""
                                className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                              >
                                <img
                                  src={product.icon}
                                  alt=""
                                  className="w-[18px] h-[18px]"
                                />
                                {product.name}
                              </Link>
                              <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                                <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                                  {subcategoryArray?.length > 0 &&
                                    subcategoryArray
                                      .filter((item) => item.categoryID === 6)
                                      .map((product) => (
                                        <li className="w-[32%] ">
                                          <Link
                                            to=""
                                            className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                          >
                                            {product.name}
                                          </Link>
                                        </li>
                                      ))}
                                </div>
                              </ul>
                            </li>
                          ))}
                      {categoryArray?.length > 0 &&
                        categoryArray
                          .filter((item) => item.id === 7)
                          .map((product) => (
                            <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                              <Link
                                to=""
                                className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                              >
                                <img
                                  src={product.icon}
                                  alt=""
                                  className="w-[18px] h-[18px]"
                                />
                                {product.name}
                              </Link>
                              <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                                <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                                  {subcategoryArray?.length > 0 &&
                                    subcategoryArray
                                      .filter((item) => item.categoryID === 7)
                                      .map((product) => (
                                        <li className="w-[32%] ">
                                          <Link
                                            to=""
                                            className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                          >
                                            {product.name}
                                          </Link>
                                        </li>
                                      ))}
                                </div>
                              </ul>
                            </li>
                          ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex  justify-start pl-[40px]">
              <ul className="flex w-full justify-start items-center text-[white]">
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="anima relative py-[5px]">
                    Haqqimizda{" "}
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="anima relative py-[5px]">
                    Yeni
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="anima relative py-[5px]">
                    Endirimlər
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="anima relative py-[5px]">
                    Ən çox satılanlar{" "}
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px] milidrop">
                  <Link
                    to=""
                    className="flex items-center gap-2 py-[5px]  anima relative "
                  >
                    Şərtlər <BsChevronRight />
                  </Link>
                  <ul className="absolute shadow-lg bg-white top-[55px] hidden mindrop z-50 ">
                    <div className="p-[10px] text-[#000000]">
                      <li className="p-[5px]">
                        <Link to="">Catdirilma </Link>
                      </li>
                      <li className="p-[5px]">
                        <Link to="">
                          Geri Qaytarilma ve <br /> deyisdirimle{" "}
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="relative  anima py-[5px]">
                    Əlaqə
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
