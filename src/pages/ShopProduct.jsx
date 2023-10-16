import React from 'react'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { AddCart, DecreaseCart, RemoveFromCart } from '../redux/cartSystem';
import { useDispatch } from 'react-redux';
const ShopProduct = () => {
    const cartObject = useSelector((state) => state.user.cart);
    const cart = Object.values(cartObject);

    const dispatch = useDispatch();
    const sumAllProducts = cart.map((product) => {
        return product.quantity * product.price;
    });
    const sumPrice = sumAllProducts.reduce(
        (price, quantity) => price + quantity,
        0
    );

    const handleIncreaseQuantity = (productId) => {
        dispatch(AddCart({ id: productId }));
    };

    const handleDecreaseQuantity = (productId) => {
        dispatch(DecreaseCart({ id: productId }));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(RemoveFromCart({ id: productId }));
    };
    return (
        <>
            {cart.length > 0 ? (
                <div className='lg:w-[1170px] w-full  my-0 mx-auto  pr-[15px] pl-[15px] lg:block md:block hidden  mb-[20px]'>
                    <table id='customers' className='lg:w-[1170px]'>
                        <thead className="text-center bg-[#f7f7f7] text-[16px]">
                            <tr className="border-b-[1px] text-[#4d4d4d]">
                                <th className="border-[1px] p-[8px]">Mehsulun adi</th>
                                <th className="border-[1px] p-[8px]">Qiymet</th>
                                <th className="border-[1px] p-[8px] font-[400]">Say</th>
                                <th className="p-[8px] font-[200]">Cemi</th>
                            </tr>
                        </thead>
                        {cart.map(product => (
                            <>
                                <table id="customers">
                                    <tr className="border-[1px] mt-[20px] h-[168px]">
                                        <td className="border-[1px] w-[168px] p-[8px]">
                                            <img src={product.imageurl} alt="" />
                                        </td>
                                        <td className="border-[1px] p-[8px] text-[#3a3a3a] text-[14px] capitalize w-[260px] font-[400]">
                                            <p>{product.productName}</p>
                                        </td>
                                        <td className="border-[1px] p-[8px] text-[#3a3a3a] text-[14px] capitalize w-[260px] font-[400]">
                                            <p>{product.price}</p>
                                        </td>
                                        <td className=" border-[1px] justify-center items-center p-[8px] w-[150px]">
                                            <div className="flex gap-3 justify-around mb-4">
                                                <div className="pt-[2px] pb-[2px] pl-[6px] pr-[6px] rounded-[5px] text-[white] bg-[#f15803] flex justify-center items-center">
                                                    <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                                                </div>
                                                <div className="pt-[6px] pb-[6px] pl-[12px] pr-[12px] rounded-[5px] text-[white] bg-[#f15803] ">
                                                    <span>{product.quantity}</span>
                                                </div>
                                                <div className="pt-[2px] pb-[2px] pl-[8px] pr-[8px] rounded-[5px] text-[white] bg-[#f15803] flex justify-center items-center ">
                                                    <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-[1px] p-[8px] text-[#f15803] font-[200] w-[150px] ">
                                            {(product.price * product.quantity).toFixed(2)}
                                        </td>
                                        <td>
                                            <button onClick={() => handleRemoveFromCart(product.id)}>Sil</button>
                                        </td>
                                    </tr>
                                </table>
                                {/* {sumPrice.toFixed(2)} */}
                            </>

                        ))}
                    </table >

                </div >
            ) : null}
           
        </>
    )
}

export default ShopProduct