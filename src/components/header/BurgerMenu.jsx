import React from 'react'
import { useState } from 'react'
import Input from '../search/Input'
import { Link } from 'react-router-dom'
import { BsChevronRight } from "react-icons/bs";
const BurgerMenu = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar uncliced")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)


    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }

        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>

            <div className={menu_class} >
                <div className='flex flex-col w-[100%] justify-center items-center text-center text-[white]  p-[30px]'>
                    <Input />
                    <ul>
                        <li className="text-[18px] my-[20px]">
                            <Link to="/about" className="anima relative py-[5px]">
                                Haqqimizda{" "}
                            </Link>
                        </li>
                        <li className="text-[18px] my-[20px]">
                            <Link className="anima relative py-[5px]" to='/products/new'>
                                Yeni
                            </Link>
                        </li>
                        <li className="text-[18px] my-[20px]">
                            <Link to="/products/discounts" className="anima relative py-[5px]">
                                Endirimlər
                            </Link>
                        </li>
                        <li className="text-[18px] my-[20px]">
                            <Link to="/products/best-sellers" className="anima relative py-[5px]">
                                Ən çox satılanlar
                            </Link>
                        </li>
                        <li className="text-[18px] my-[20px] milidrop flex justify-center relative">
                            <div onClick={toggleDropdown} className="flex items-center gap-2 py-[5px] anima">
                                Şərtlər {isOpen ? <i className='fa-solid fa-chevron-down'></i> : <i className='fa-solid fa-chevron-right'></i>}
                            </div>
                            {isOpen && (
                                <ul className="absolute shadow-lg bg-white top-10 w-[200px]  hidden mindrop z-50">
                                    <div className="p-[10px] text-[#000000]">
                                        <li className="p-[5px]">
                                            <Link to="/terms">Catdirilma </Link>
                                        </li>
                                        <li className="p-[5px]">
                                            <Link to="/return">Geri Qaytarilma ve <br /> deyisdirimle </Link>
                                        </li>
                                    </div>
                                </ul>
                            )}
                        </li>
                        <li className="text-[18px] my-[20px]">
                            <Link to="/contact" className="relative  anima py-[5px]">
                                Əlaqə
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default BurgerMenu