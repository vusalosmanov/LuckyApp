import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import shopping from "../../assets/image/icon/cart.svg";
import logo from "../../assets/image/logo/logo-header.svg";
import Input from '../search/Input';
import heart from "../../assets/image/icon/heart.svg";
const MiddleNav = () => {

    const wishlistProducts = useSelector(state => state.user.wishlist);
    const cartObject = useSelector((state) => state.user.cart);
    const cart = Object.values(cartObject);
    return (
        <>
            <nav className=' mb-[15px] w-[100%] relative '>
                <div className='max-w-[1320px] w-[100%] mx-auto px-[10px]'>
                    <div className='flex w-[100%] flex-row  justify-between  items-center py-[15px]'>
                        <Link to='/'>
                            <img src={logo} alt="logo" className='w-[100%]  object-contain max-w-[125px] ' />
                        </Link>
                        <div className='w-[100%] flex  flex-row justify-center  items-center '>
                            <Input />
                        </div>
                        <div className='flex flex-row  justify-between items-center'>
                            <div className="icon">
                                <div className="flex gap-5">
                                    <Link to="/shoping" className="relative" key={cart.id}>
                                        <img src={shopping} alt="" className="w-[50px] " />
                                        <div className="absolute top-[-9px] left-7 w-[25px] h-[25px] bg-[#ff0000] rounded-[50%] flex items-center text-white  justify-center">
                                            {cart.length}
                                        </div>
                                    </Link>
                                    <Link to="/wishlist" className="relative">
                                        <img src={heart} alt="" className="w-[50px]" />
                                        <div className="absolute top-[-9px] left-7 w-[25px] h-[25px] bg-[#ff0000] rounded-[50%] flex items-center text-white  justify-center">
                                            {wishlistProducts.length}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MiddleNav