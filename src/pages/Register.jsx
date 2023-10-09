import React from "react";
import Logo from "../assets/image/logo/logo-header.svg";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      {/* <section className="bg-[#fc8410] h-[600px]">
        <div className="flex  justify-between ">
          <div className="flex items-center flex-col ">
              <img src={Logo} alt="" />
              <Link to="">Daxil ol</Link>
          </div>
          <div className="min-w-[1000px] h-[600px] bg-[white] rounded-l-[300px]">
            <form className="max-w-[600px] flex">
              <h2>Qeydiyyat</h2>
            </form>
          </div>
        </div>
      </section> */}
      <section className='flex justify-center items-center flex-col mb-[0] pt-[60px] bg-[#fc8410]'>
      <div className="flex flex-row">
        <div className='w-full lg:w-1/4 xl:w-1/3 hidden lg:flex'>
          <div className="flex justify-center items-center flex-col w-[100%]">
            <img src={Logo} alt="logo" />
            <Link to='/login' className="bg-[#fc8411] pt-[15px] pl-[20px] max-w-[240px] rounded-lg text-center mt-[30px] text-[18px] font-[600] hover:text-[white] ">Daxil ol</Link>
          </div>  
        </div>
        <div className="bg-[white] rounded-tl-2xl rounded-bl-2xl shadow-lg w-[900px]">
          <form  className="px-[80px] py-[30px] ">
            <h2 className="mb-[55px] relative text-center capitalize text-[2rem]">Qeydiyyat</h2>
            <div className="flex flex-row">
              <div className="w-full xl:w-1/2 items-start">
                <div>
                  <div className="form-floating">
                    <input type="text" className="form-control" id="company" placeholder="şirkət" />
                    <label htmlFor="company">Şirkət adı *</label>
                  </div>
                  <div className="form-floating">
                    <input type="text" className="form-control" id="location" placeholder="ünvan" />
                    <label htmlFor="location">Ünvan *</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="password" placeholder="sifre" />
                    <label htmlFor="password">Şifrə *</label>
                  </div>
                  <div className="form-floating">
                    <input type="password-2" className="form-control" id="password-2" placeholder="sifre" />
                    <label htmlFor="password-2">Şifrə təsdiqlə *</label>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 items-start">
                <div>
                  <div className="form-floating">
                    <input type="text" className="form-control" id="friend-person" placeholder="elaqeli şexs" />
                    <label htmlFor="friend-person">Əlaqəli şəxs *</label>
                  </div>
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="email" />
                    <label htmlFor="email">E-poçt ünvanı *</label>
                  </div>
                  <div className="form-floating">
                    <input type="number" className="form-control" id="number" placeholder="telefon" />
                    <label htmlFor="number">Telefon *</label>
                  </div>
                </div>
              </div>
            </div>
            <button className="submit-button orange">Qeydiyyat</button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Register;
