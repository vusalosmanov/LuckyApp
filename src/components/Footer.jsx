import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="w-[1320px] mx-auto pr-[10px] pl-[10px]">
        <div className="flex justify-between mb-[40px] pt-[35px] ">
          <div className=" flex flex-col gap-[12px] items-center justify-center">
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

          <div>
            <h4 className=" text-[#fc8410] mb-[15px] text-[24px]">
              Kategoriyalar
            </h4>
            <ul className=" flex flex-col gap-[15px]">
              <li className="font-thin text-[#303030] unf">
                <Link>Ofis Ləvazimatları</Link>
              </li>
              <li className="font-thin text-[#303030] unf">
                <Link> Qida və İçkilər</Link>
              </li>
              <li className="font-thin text-[#303030] unf">
                <Link>Təsərüffat Malları</Link>
              </li>
              <li className="font-thin text-[#303030] unf">
                <Link> Elektron Avadanlıq</Link>
              </li>
              <li className="font-thin text-[#303030] unf">
                <Link>Dibçək Gülləri</Link>
              </li>
              <li className="font-thin text-[#303030] unf">
                <Link> Hədiyyəlik </Link>
              </li>
              <li className="font-thin text-[#303030] unf">
                <Link> Coffee Shop </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" text-[#fc8410] mb-[14px] text-[24px]">Menyular</h4>
            <ul className=" flex flex-col gap-[15px]">
              <li className="font-thin text-[#303030] unf">Haqqımızda</li>
              <li className="font-thin text-[#303030] unf">
                <Link> Geri qaytarılma</Link>
              </li>
              <li className="font-thin text-[#303030] unf">
                <Link>Çatdırılma</Link>
              </li>
              <li className="font-thin text-[#303030] unf">
                <Link> Əlaqə</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" text-[#fc8410] mb-[14px] text-[24px]">Əlaqə</h4>
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

        <hr className="hr" />
        <div className="flex justify-between pt-[30px] pb-[35px]">
          <p className="text-[18px] text-[#212529] flex items-center">
            {" "}
            <span className="text-[14px] mr-[4px]">©</span> Bütün huquqlar
            qorunur
          </p>
          <p className="text-[18px] text-[#212529]">
            Powered by{" "}
            <span className=" text-[18px] text-[#fc8410]">Vüsal</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
