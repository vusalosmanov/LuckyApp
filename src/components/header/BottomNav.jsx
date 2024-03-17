import React, { useState } from 'react'
import { BsChevronRight } from "react-icons/bs";
import category from "../../assets/image/icon/category.svg";
import CategoryMenu from '../menuCategory/CategoryMenu';
import { Link } from 'react-router-dom';

const BottomNav = () => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false)

    const closeCatMenu = () => {
        setIsDropdownVisible(false)
    }
    const openCatMenu = () => {
        setIsDropdownVisible(true)
    }
    return (
        <>
            <nav className="flex  w-[100%] justify-start items-center ">
                <div className="lg:max-w-[550px] w-full lg:dropdown  relative ">
                    <div className="flex items-center text-[#ffff] bg-[#106853]  cursor-pointer flex-row text-[20px]  justify-center min-h-[65px] w-[100%] tracking-wide" onMouseMove={openCatMenu} onMouseLeave={closeCatMenu}>
                        <img src={category} alt="category" className='mr-[15px]' />
                        <Link to="">Kataqoriya</Link>
                    </div>
                    <CategoryMenu openCatMenu={openCatMenu} isDropdownVisible={isDropdownVisible} closeCatMenu={closeCatMenu} />
                </div>
                <div className='hidden lg:block'>
                    <div className="flex justify-center w-[100%] pl-[40px] ">
                        <ul className="flex w-full justify-start items-center text-[white]">
                            <li className="text-[18px] mr-[50px]">
                                <Link to="/about" className="anima relative py-[5px]">
                                    Haqqimizda{" "}
                                </Link>
                            </li>
                            <li className="text-[18px] mr-[50px]">
                                <Link className="anima relative py-[5px]" to='/products/new'>
                                    Yeni
                                </Link>
                            </li>
                            <li className="text-[18px] mr-[50px]">
                                <Link to="/products/discounts" className="anima relative py-[5px]">
                                    Endirimlər
                                </Link>
                            </li>
                            <li className="text-[18px] mr-[50px]">
                                <Link to="/products/best-sellers" className="anima relative py-[5px]">
                                    Ən çox satılanlar
                                </Link>
                            </li>
                            <li className="text-[18px] mr-[50px] milidrop">
                                <Link
                                    to=""
                                    className="flex items-center gap-2 py-[5px]  anima relative "
                                >
                                    Şərtlər <BsChevronRight />
                                </Link>
                                <ul className="absolute shadow-lg bg-white  hidden mindrop z-50 ">
                                    <div className="p-[10px] text-[#000000]">
                                        <li className="p-[5px]">
                                            <Link to="/terms">Catdirilma </Link>
                                        </li>
                                        <li className="p-[5px]">
                                            <Link to="/return">
                                                Geri Qaytarilma ve <br /> deyisdirimle{" "}
                                            </Link>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="text-[18px] mr-[50px]">
                                <Link to="/contact" className="relative  anima py-[5px]">
                                    Əlaqə
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default BottomNav