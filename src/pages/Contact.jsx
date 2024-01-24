import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Layout from './Layout';
import PageTitle from "../components/PageTitle";
const Contact = () => {
    return (
        <>
            <Layout>

                <section className='flex items-center justify-center flex-col py-[40px] w-full '>
                    <div className='max-w-[1320px] mx-auto w-full px-[12px] flex items-center  justify-center flex-col'>
                        <div className='w-full flex  items-center justify-center flex-col mb-[50px] py-[20px]'>
                            <h3 className='mb-[10px]  text-center  capitalize text-[26px]'>əlaqə</h3>
                            <div className="w-[40px]  h-[5px] rounded-lg bg-[#106853] "></div>
                            <div className='flex items-center flex-row py-[15px] w-full justify-center  gap-1' >
                            <PageTitle title='Əlaqə' />
                            </div>
                        </div>

                        <div className='w-full flex flex-wrap  justify-center gap-2'>
                            <div className='flex items-center  justify-center flex-row mb-[40px]  w-[32%]'>
                                <div className='flex items-center flex-col justify-center min-h-[200px] p-[20px] text-center w-full shadow-2xl '>
                                    <FaPhoneAlt className='text-[#106853] text-[50px] mb-[25px]  font-[900]' />
                                    <span>(994) 99 832 07 77</span>
                                </div>
                            </div>
                            <div className='flex items-center  justify-center flex-row mb-[40px]  w-[32%]'>
                                <div className='flex items-center flex-col justify-center min-h-[200px] p-[20px] text-center w-full shadow-2xl'>
                                    <FaEnvelope className='text-[#106853] text-[50px] mb-[25px] ' />
                                    <span>info@los.az</span>
                                </div>
                            </div>
                            <div className='flex items-center  justify-center flex-row mb-[40px]  w-[32%]'>
                                <div className='flex items-center flex-col justify-center min-h-[200px] p-[20px] text-center w-full shadow-2xl'>
                                    <FaLocationDot className='text-[#106853] text-[50px] mb-[25px]' />
                                    <span>Ziya Bünyadov pr, 1965. Çinar Park Biznes Mərkəzi</span>
                                </div>
                            </div>
                        </div>


                        <div className='w-full flex justify-center flex-wrap'>
                            <div className='flex items-center justify-center mb-[40px] flex-row  w-[50%] px-[12px]'>
                                <div className='map w-full h-full min-h-[300px]'>
                                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.416174197902!2d49.866269715394665!3d40.37746797936963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzM4LjkiTiA0OcKwNTInMDYuNSJF!5e0!3m2!1sen!2s!4v1619439490481!5m2!1sen!2s" className='w-[624px] h-[450px]'></iframe>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mb-[40px] flex-row w-[50%] px-[12px]'>
                                <form action="#" className='w-full'>
                                    <h3 className='mb-[30px] text-[26px] text-center'>Müraciət Formu</h3>
                                    <div className="mb-[25px]  relative w-[100%]">
                                        <input type="text" className="px-[0.75rem] py-[1rem] w-full appearance-none bg-[#fff] border-[1px] rounded-lg text-[#212529] block text-[1rem] font-[400]  placeholder:text-[black]" id="fullname" placeholder="Ad, Soyad *" />
                                    </div>
                                    <div className="mb-[25px] w-full relative">
                                        <input type="text" className="px-[0.75rem] py-[1rem] w-full appearance-none bg-[#fff] border-[1px] rounded-lg text-[#212529] block text-[1rem] font-[400]  placeholder:text-[black]" id="title" placeholder="Başlıq *" />
                                    </div>
                                    <div className="mb-[25px] w-full relative">
                                        <input type="email" className="px-[0.75rem] py-[1rem] w-full appearance-none bg-[#fff] border-[1px] rounded-lg text-[#212529] block text-[1rem] font-[400]  placeholder:text-[black]" id="email" placeholder="Email *" />
                                    </div>
                                    <div className="mb-[25px] w-full relative">
                                        <textarea className="px-[0.75rem] py-[1rem] w-full appearance-none bg-[#fff] border-[1px] rounded-lg text-[#212529] block text-[1rem] font-[400]  placeholder:text-[black]" placeholder='Mesaj *' id='message'></textarea>
                                    </div>
                                    <button type='submit' className='bg-[#106853] rounded-[5px] text-[#fff] text-[18px] font-[600] min-w-[150px] py-[15px] px-[25px] w-full hover:bg-[#fc8410] '>Göndər</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Contact