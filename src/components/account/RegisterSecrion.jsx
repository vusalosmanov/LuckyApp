import React from "react";
import Logo from "../../assets/image/logo/logo-header.svg";
import { Link } from "react-router-dom";
const RegisterSection = () => {
  const handleRegisterSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <>
      <section className="bg-[#fc8410] h-[700px]">
        <div className="flex  justify-between ">
          <div className="max-w-[35%] w-[100%] flex justify-center items-center flex-col ">
            <img src={Logo} alt="" />
            <Link to="/login" className="mt-[30px] bg-white text-[#106853] px-[20px] py-[15px] w-full max-w-[240px] rounded-[5px] flex flex-row justify-center items-center text-center text-[18px] font-bold hover:bg-[#106853] hover:text-white">Daxil ol</Link>
          </div>  
          <div className="max-w-[65%] w-[100%] h-[620px] bg-[white] rounded-l-[300px] mt-[30px] mb-[30px]">
            <form className="w-full flex justify-center items-center px-[80px] py-[30px] flex-col " onSubmit={handleRegisterSubmit}>
              <h2 className="mb-[55px] relative text-center capitalize text-[2rem]">Qeydiyyat</h2>
              <div className="flex flex-row gap-[20px] w-full">
                <div className="w-[100%] flex items-center justify-center flex-col">
                  <div className="w-[100%] mb-[25px]">
                    <input type="text" className="block w-[100%] p-2 text-base font-normal leading-6 text-gray-700 bg-white border border-gray-300 appearance-none rounded-md px-[12px] py-[16px]" id="company" placeholder="Şirkət adı *" />
                  </div>
                  <div className="w-[100%] mb-[25px]">
                    <input type="text" className="block w-full p-2 text-base font-normal leading-6 text-gray-700 bg-white border border-gray-300 appearance-none rounded-md px-[12px] py-[16px]" id="location" placeholder="Ünvan *" />
                  </div>
                  <div className="w-[100%] mb-[25px]">
                    <input type="password" className="block w-full p-2 text-base font-normal leading-6 text-gray-700 bg-white border border-gray-300 appearance-none rounded-md px-[12px] py-[16px]" id="password" placeholder="Şifrə *" />
                  </div>
                  <div className="w-[100%] mb-[25px]">
                    <input type="password-2" className="block w-full p-2 text-base font-normal leading-6 text-gray-700 bg-white border border-gray-300 appearance-none rounded-md px-[12px] py-[16px]" id="password-2" placeholder="Şifrə təstiqlə *" />
                  </div>
                </div>
                <div className="w-full ">
                  <div>
                    <div className="w-[100%] mb-[25px]">
                      <input type="text" className="block w-full p-2 text-base font-normal leading-6 text-gray-700 bg-white border border-gray-300 appearance-none rounded-md px-[12px] py-[16px]" id="friend-person" placeholder="Əlaqəli şəxs *" />
                    </div>
                    <div className="w-[100%] mb-[25px]">
                      <input type="email" className="block w-full p-2 text-base font-normal leading-6 text-gray-700 bg-white border border-gray-300 appearance-none rounded-md px-[12px] py-[16px]" id="email" placeholder="E-poxt ünvanı *" />
                    </div>
                    <div className="w-[100%] mb-[25px]">
                      <input type="number" className="block w-full p-2 text-base font-normal leading-6 text-gray-700 bg-white border border-gray-300 appearance-none rounded-md px-[12px] py-[16px] " id="number" placeholder="Telefon *" />
                    </div>
                  </div>
                </div>
              </div>
              <Link to="" className="mt-[30px] bg-[#fc8410] text-[#fff] px-[20px] py-[15px] w-full max-w-[240px] rounded-[5px] flex flex-row justify-center items-center text-center text-[18px] font-bold hover:bg-[#106853] ">Qeydiyyat</Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterSection;
