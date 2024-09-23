import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo/logo-footer.png";
import { categoryArray } from "../data/CategoryData";
const Footer = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className=" flex flex-col gap-[12px]  items-center justify-center lg:hidden  ">
        <div className="logo w-28  h-28 flex items-center ">
          <img src={logo} alt="" />
        </div>
        <div className=" flex gap-[12px]">
          <div className="bg-[#106853] text-white w-[35px] h-[35px] text-xl rounded-full flex justify-center items-center hover:bg-[#fc8410] transition ease-in-out duration-200 ">
            <BiLogoFacebook />
          </div>

          <div className="bg-[#106853] text-white w-[35px] h-[35px] text-xl rounded-full flex justify-center items-center hover:bg-[#fc8410] transition ease-in-out duration-200">
            <AiOutlineInstagram />
            {" "}
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] flex  flex-col ">
        <div className="flex justify-between mb-[40px] pt-[35px]">
          <div className=" flex flex-col gap-[12px] items-center justify-center lg:block hidden ">
            <div className="logo w-28  h-28 flex items-center cursor-pointer ">
              <img src={logo} alt="" />
            </div>
            <div className=" flex gap-[12px]">
              <div className="bg-[#106853] text-white w-[35px] h-[35px] text-xl rounded-full flex justify-center items-center hover:bg-[#fc8410] transition ease-in-out duration-200 ">
                <BiLogoFacebook />
              </div>

              <div className="bg-[#106853] text-white w-[35px] h-[35px] text-xl rounded-full flex justify-center items-center hover:bg-[#fc8410] transition ease-in-out duration-200">
                <AiOutlineInstagram />
                {" "}
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly w-full ">
            <div>
              <h4 className=" text-[#fc8410] mb-[15px] text-[24px]  cursor-pointer">
                Kategoriyalar
              </h4>
              <ul className=" flex flex-col gap-[15px]  capitalize  ">
              {
                  categoryArray.map(category => (
                    <Link key={category.id} to={`/products/${encodeURIComponent(category.name)}`}>{category.name}</Link>
                  ))
                }
              </ul>
            </div>
            <div>
              <h4 className=" text-[#fc8410] mb-[14px] text-[24px] cursor-pointer">Menyular</h4>
              <ul className=" flex flex-col gap-[15px]">
                <Link to='/about' className="font-thin text-[#303030] unf">Haqqımızda</Link>
                <li className="font-thin text-[#303030] unf">
                  <Link to='/return '> Geri qaytarılma</Link>
                </li>
                <li className="font-thin text-[#303030] unf">
                  <Link to='/terms'>Çatdırılma</Link>
                </li>
                <li className="font-thin text-[#303030] unf">
                  <Link to='/contact'> Əlaqə</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" text-[#fc8410] mb-[14px] text-[24px] cursor-pointer">Əlaqə</h4>
              <ul className=" flex flex-col gap-[15px]">
                <li className="font-thin text-[#303030] unf">
                  {" "}
                  <Link>
                    {" "}
                    <span> Tel:(994) 55 960 58 50</span>{" "}
                  </Link>
                </li>
                <li className="font-thin text-[#303030] unf">
                  <Link>
                    <span> Email: vusal.osmanov66@gmail.com</span>
                  </Link>
                </li>
                <li className="font-thin text-[#303030] unf">
                  <Link>
                    {" "}
                    <span>Ünvan: Ziya Bünyadov pr, 1965. Çinar <br /> Park Biznes Mərkəzi </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="hr" />
        <div className="flex justify-between pt-[30px] pb-[35px]">
          <p className="text-[18px] text-[#212529] flex items-center">
            {" "}
            <span className="text-[14px] mr-[4px]">©</span> Bütün huquqlar
            qorunur
          </p>
          <p className="text-[18px] text-[#212529]">
            Powered by{" "}
            <span className=" text-[18px] text-[#fc8410]">Vüsal Osmanov</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
