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
import "../assets/index.scss"
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
                    <ul className="  bg-white shadow   flex flex-col items-start  ">
                      <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop">
                        <Link
                          to=""
                          className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans "
                        >
                          <ImOffice />
                          Ofis Ləvazimatları
                        </Link>
                        <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                          <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-[18px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5 px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li className="py-[4px] px-12 border-b-[1px] w-full flex twodrop">
                        <Link
                          to=""
                          className=" flex gap-2 items-center py-[10px]  text-[18px] text-[#303030] font-montserrat font-sans "
                        >
                          <MdFoodBank />
                          Qida və İçkilər
                        </Link>
                        <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden twochild ">
                          <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                              >
                                secenek333
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-[18px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5 px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li className="py-[4px] px-12 border-b-[1px] w-full flex threedrop">
                        <Link
                          to=""
                          className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans "
                        >
                          <Im500Px />
                          Təsərrüfat Malları
                        </Link>
                        <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden threechild ">
                          <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                              >
                                secenek12345
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-[18px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5 px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li className="py-[4px] px-12 border-b-[1px] w-full flex fourdrop">
                        <Link
                          to=""
                          className="flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                        >
                          <GrCloudComputer />
                          Elektron Avadanlıq
                        </Link>
                        <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden fourchild ">
                          <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                              >
                                secenek154345678
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-[18px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5 px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li className="py-[4px] px-12 border-b-[1px] w-full flex fivedrop">
                        <Link
                          to=""
                          className=" flex gap-2 items-center py-[10px] text-[18px] text-[#303030]  font-montserrat font-sans "
                        >
                          <GiRose />
                          Dibçək Gülləri
                        </Link>
                        <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden fivechild ">
                          <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                              >
                                secenek154323456
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-[18px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5 px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li className="py-[4px] px-12 border-b-[1px] w-full flex sixdrop">
                        <Link
                          to=""
                          className=" flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                        >
                          <AiTwotoneGift />
                          Hədiyyəlik
                        </Link>
                        <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden sixchild ">
                          <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                              >
                                secenek1jhgfds
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-[18px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5 px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li className="py-[4px] px-12 border-b-[1px] w-full flex sevendrop">
                        <Link
                          to=""
                          className=" flex gap-2 items-center text-[18px] text-[#303030] py-[10px]  font-montserrat font-sans   "
                        >
                          <FiCoffee />
                          Coffee Shop
                        </Link>
                        <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden sevenchild ">
                          <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                              >
                                secenek1lkjhgfdssdfgh
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className=" p-[5px] text-[18px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%] ">
                              <Link
                                to=""
                                className="text-[18px] p-[5 px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                            <li className="w-[32%]">
                              <Link
                                to=""
                                className="text-[18px] p-[5px] font-montserrat font-sans text-black"
                              >
                                secenek1
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex  justify-start pl-[40px]">
              <ul className="flex w-full justify-start items-center text-[white]">
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="anima relative py-[5px]">Haqqimizda </Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="anima relative py-[5px]">Yeni</Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="anima relative py-[5px]">Endirimlər</Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="anima relative py-[5px]">Ən çox satılanlar </Link>
                </li>
                <li className="text-[18px] mr-[50px] milidrop">
                  <Link to="" className="flex items-center gap-2 py-[5px]  anima relative ">
                    Şərtlər <BsChevronRight />
                  </Link>
                  <ul className="absolute shadow-lg bg-white top-[55px] hidden mindrop z-50 ">
                    <div className="p-[10px] text-[#000000]">
                      <li className="p-[5px]"><Link to="">Catdirilma </Link></li>
                      <li className="p-[5px]"><Link to="">Geri Qaytarilma ve <br /> deyisdirimle </Link></li>
                    </div>
                  </ul>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="relative  anima py-[5px]">Əlaqə</Link> 
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
