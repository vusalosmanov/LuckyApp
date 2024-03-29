import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/image/logo/logo-header.svg";
const LoginSection = () => {
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <section className="lg:bg-[#fc8410] lg:h-[700px]">
                <div className="flex  justify-between ">
                    <div className="max-w-[35%] w-[100%]  justify-center items-center flex-col hidden lg:flex">
                        <img src={Logo} alt="" />
                        <Link to="/register" className="mt-[30px] bg-white text-[#106853] px-[20px] py-[15px] w-full max-w-[240px] rounded-[5px] flex flex-row justify-center items-center text-center text-[18px] font-bold hover:bg-[#106853] hover:text-white">Qeydiyyat</Link>
                    </div>
                    <div className="lg:max-w-[65%] w-[100%] lg:h-[620px] bg-[white] rounded-l-[300px] my-[30px] lg:mx-[0] mx-[20px] flex justify-center items-center ">
                        <form className="w-full flex justify-center items-center flex-col max-w-[600px] " onSubmit={handleRegisterSubmit}>
                            <h2 className="lg:mb-[55px] relative text-center capitalize text-[2rem]">Daxil ol</h2>
                            <div className="w-[40px]  h-[5px] rounded-lg bg-[#106853] block lg:hidden mt-[10px]"></div>
                            <div className="flex flex-row gap-[20px] w-full mt-[40px] lg:mt-[0]">
                                <div className="w-[100%] flex items-center justify-center flex-col">
                                    <div className="w-[100%] mb-[25px]">
                                        <input type="text" className="block w-[100%] p-2 text-base font-normal leading-6 text-gray-700 bg-white border border-gray-300 appearance-none rounded-md px-[12px] py-[16px]" id="company" placeholder="E-poct ünvanı *" />
                                    </div>
                                    <div className="w-[100%] mb-[25px]">
                                        <input type="password" className="block w-full p-2 text-base font-normal leading-6 text-gray-700 bg-white border border-gray-300 appearance-none rounded-md px-[12px] py-[16px]" id="password" placeholder="Şifrə *" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center lg:justify-between justify-center flex-col lg:flex-row max-w-[600px] w-full'>
                                <div className='form-check mb-[10px]'>
                                    <input type="checkbox" id='remind' className='form-check-input' />
                                    <label className='form-check-label' htmlFor="remind">Məni xatırla</label>
                                </div>
                                <Link to='/restore-password' className='text-[#106853]'>Şifrəmi unutdum</Link>
                            </div>
                            <Link to="" className="mt-[30px] bg-[#fc8410] text-[#fff] px-[20px] py-[15px] w-full max-w-[240px] rounded-[5px] flex flex-row justify-center items-center text-center text-[18px] font-bold hover:bg-[#106853] ">Daxil ol</Link>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginSection