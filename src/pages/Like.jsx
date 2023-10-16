import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from "react";
import heartIconFilled from '../assets/image/icon/heart-filled.svg'
import heartIconOutline from '../assets/image/icon/heart-outline.svg'
import { AddCart, AddToWishlist, RemoveFromWishlist } from "../redux/cartSystem";

function Wishlist({ id, productName, price, imageurl, quantity }) {
    const wishlistProducts = useSelector((state) => state.user.wishlist)
    const wishlis = Object.values(wishlistProducts)
    const [isIconClicked, setIsIconClicked] = useState(false);
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(
            AddCart({
                id,
                productName,
                imageurl,
                price,
                quantity
            })
        )
    };
    const iconHandleClick = () => {
        if (isIconClicked) {
            dispatch(
                RemoveFromWishlist(id)
            );
        }
        setIsIconClicked(!isIconClicked);
    };


    return (
        <>
            {wishlis.length > 0 ? (
                <div className='lg:w-[1170px] w-full  my-0 mx-auto  pr-[15px] pl-[15px] lg:block md:block hidden  mb-[20px]'>
                    {wishlis.map(product => (
                        <div key={product.id}>
                            <div className="flex justify-center">
                                <div className="flex bg-[#fff] w-[260px] pt-[7px] pr-[15px] pb-[20px] pl-[15px] items-center flex-col justify-center  ">
                                    <div className="relative min-h-[40px] w-full flex justify-end z-50">
                                        <div>
                                        </div>
                                        <button className='icon-button' onClick={iconHandleClick}>
                                            <img
                                                src={isIconClicked ? heartIconOutline : heartIconFilled}
                                                alt="heart-icon"
                                            />
                                        </button>
                                    </div>
                                    <Link to="" className="w-[100%] max-w-[200px] h-[200px] hover:scale-[1.1] image-hover mb-[20px]">
                                        <img src={product.imageurl} alt="" className="w-[100%] h-[100%] object-contain" />
                                    </Link>
                                    <div className="flex items-center justify-center flex-col mb-[20px] text-center w-full z-50">
                                        <div className="mb-[5px] min-h-[60px] px-[10px] flex justify-center items-center">
                                            <p>{product.productName}</p>
                                        </div>
                                        <div className="flex items-center justify-center flex-row">
                                        {product.price ? <p>{product.price.toFixed(2)}AZN</p> : null}
                                        </div>
                                    </div>
                                    <button className="max-w-[150px] py-[10px] px-[20px] text-[black] w-full border-[1px] rounded hover:bg-lime-800 hover:text-[white] transition ease-in-out duration-200"
                                        variant="success" onClick={handleClick}>
                                        Səbətə at
                                    </button>
                                    {/* <p>{product.quantity}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div >
            ) : null}

        </>
    )
}

export default Wishlist
