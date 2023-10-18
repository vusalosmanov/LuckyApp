import React from 'react'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import '../assets/styles/pages/ShopProduct.scss'
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


    const [alert, setAlert] = useState(false)
    const [alertText, setAlertText] = useState('')

    let minOrder = 5

    useEffect(() => {
        if (sumPrice < minOrder && sumPrice !== 0) {
            setAlert(false);
            setAlertText(`Sifarişi təstiqləmək üçün minimum ${minOrder} Azn olmalıdır.`);
        } else {
            setAlert(false);
        }
    }, [sumPrice, minOrder])

    const orderHandleClick = () => {
        if (sumPrice === 0) {
            setAlert(true);
            setAlertText('Sifarişi təsdiqləmək üçün səbətinizdə ən az bir məhsul olmalıdır.');

        } else {
            setAlert(true);
        }
    };
    return (
        <>
            {cart.length > 0 ? (

                <div className='lg:w-[1170px] w-full  my-0 mx-auto  pr-[15px] pl-[15px] lg:block md:block hidden  mb-[20px]'>
                    <div className={`${alert ? 'w-[700px] h-[50px] bg-orange-500 flex items-center justify-center  text-[white] text-[18px] mt-[20px] mb-[20px]' : 'hidden'}`} >
                        <p>{alertText}</p>
                    </div>
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
                            </>

                        ))}
                    </table >
                </div >
            ) : null}
            <div className='w-[1320px] mx-auto pr-[10px] pl-[10px] flex justify-end items-center mb-[20px]'>
                {cart.length > 0 ? (
                    <div className='flex flex-col justify-center max-w-[450px] min-h-[220px] py-[20px] px-[15px] w-full shadow-lg'>
                        <h4 className='text-[1.5rem] py-[10px]'>Səbət</h4>
                        <hr />
                        <div className='flex  items-center  flex-row  justify-between mb-[30px] py-[15px] w-[100%]'>
                            <span className='text-[18px]'>Cəmi</span>
                            <span className='text-[22px]'>{sumPrice.toFixed(2)} Azn</span>
                        </div>
                        <div className='flex justify-center'>
                            <Link className='flex items-center justify-center bg-orange-500 rounded-lg text-white text-xl max-w-[250px]  w-full py-[15px] px-[20px]'> <button onClick={orderHandleClick}>Sifarişi təstiqlə</button></Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='w-[1320px] mx-auto pr-[10px] pl-[10px] flex justify-center items-center mb-[20px] flex-col '>
                            <div className={`${alert ? 'w-[700px] h-[50px] bg-orange-500 flex items-center justify-center  text-[white] text-[18px] mt-[20px] mb-[20px]' : 'hidden'}`} >
                                <p>{alertText}</p>
                            </div>
                            <div className='flex flex-col justify-center max-w-[450px] min-h-[220px] py-[20px] px-[15px] w-full shadow-lg'>
                                <h4 className='text-[1.5rem] py-[10px]'>Səbət</h4>
                                <hr />
                                <div className='flex  items-center  flex-row  justify-between mb-[30px] py-[15px] w-[100%]'>
                                    <span className='text-[18px]'>Cəmi</span>
                                    <span className='text-[22px]'>{sumPrice.toFixed(2)} Azn</span>
                                </div>
                                <div className='flex justify-center'>
                                    <Link className='flex items-center justify-center bg-orange-500 rounded-lg text-white text-xl max-w-[250px]  w-full py-[15px] px-[20px]'> <button onClick={orderHandleClick}>Sifarişi təstiqlə</button></Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default ShopProduct