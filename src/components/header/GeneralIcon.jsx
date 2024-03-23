import React from 'react'
import { useSelector } from 'react-redux';
import shopping from "../../assets/image/icon/cart.svg";
import heart from "../../assets/image/icon/heart.svg";
import { Link } from 'react-router-dom';
const GeneralIcon = () => {
    const wishlistProducts = useSelector(state => state.user.wishlist);
    const cartObject = useSelector((state) => state.user.cart);
    const cart = Object.values(cartObject);
    return (
        <>
            <div className='flex flex-row  justify-between items-center'>
                <div className="icon">
                    <div className="flex gap-5">
                        <Link to="/shoping" className="relative" key={cart.id}>
                            <img src={shopping} alt="" className="lg:w-[50px] w-[40px] " />
                            <div className="absolute top-[-9px] left-7 lg:w-[25px] lg:h-[25px] w-[20px] h-[20px] bg-[#ff0000] rounded-[50%] flex items-center text-white  justify-center">
                                {cart.length}
                            </div>
                        </Link>
                        <Link to="/wishlist" className="relative">
                            <img src={heart} alt="" className="lg:w-[50px] w-[40px]" />
                            <div className="absolute top-[-9px] lg:left-7 left-6 lg:w-[25px] lg:h-[25px] w-[20px] h-[20px] bg-[#ff0000] rounded-[50%] flex items-center text-white  justify-center">
                                {wishlistProducts.length}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </>
    )
}

export default GeneralIcon