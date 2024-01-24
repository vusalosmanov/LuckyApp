import React from 'react'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AddCart, DecreaseCart, RemoveFromCart } from '../redux/cartSystem';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Layout from './Layout';
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
        RemoveAlert()
        dispatch(RemoveFromCart({ id: productId }));
    };

    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [orderLinkPath, setOrderLinkPath] = useState('')

    let minOrder = 5;

    useEffect(() => {
        if (sumPrice > minOrder) {
            setAlert(false)
            setOrderLinkPath('/shopproduct/order')
        }
        else {
            setOrderLinkPath('')
        }
    }, [sumPrice, minOrder, alert])


    const Alert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sifarişiniz təsdiqləndi",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    const RemoveAlert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Məhsul silindi",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const orderHandleClick = () => {
        if (sumPrice === 0) {
            setAlert(true);
            setAlertText('Sifarişi təsdiqləmək üçün səbətinizdə ən az bir məhsul olmalıdır.');
        } else if (sumPrice < minOrder) {
            setAlert(true);
            setAlertText(`Sifarişi təstiqləmək üçün minimum ${minOrder} Azn olmalıdır.`);
        } else {
            Alert()
            setAlert(false);
            setOrderLinkPath('/shopproduct/order');

        }
    };

    return (
        <>
            <Layout>
                {cart.length > 0 ? (
                    <div className='max-w-[1320px] w-full my-0 mx-auto pr-[10px] pl-[10px] flex justify-center items-center '>
                        <div className='mb-[40px] w-[100%] overflow-auto'>
                            <div className='w-[100%] min-w-[1200px] flex items-center justify-center'>
                                <div className={`${alert ? 'min-w-[1200px]  h-[50px] bg-orange-500 flex items-center justify-center rounded-lg  text-[white] text-[18px] mt-[20px] mb-[20px]' : 'hidden'}`} >
                                    <p>{alertText}</p>
                                </div>
                            </div>
                            <table className='mb-[50px] min-w-[1200px] w-[100%] border-collapse  caption-bottom mt-[50px]'>
                                <thead>
                                    <tr className='border-b-[2px]'>
                                        <th className='py-[15px] px-[0px] text-center' ></th>
                                        <th className='py-[15px] px-[0px] text-center' >Məhsulun adı</th>
                                        <th className='py-[15px] px-[0px] text-center' >Qiymət</th>
                                        <th className='py-[15px] px-[0px] text-center' >Sayı</th>
                                        <th className='py-[15px] px-[0px] text-center' >Cəmi</th>
                                        <th className='py-[15px] px-[0px] text-center' ></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {cart.map(product => (
                                        <tr className='border-b-[2px]'>
                                            <td className=" w-[100px]  h-[100px] py-[10px]">
                                                <img src={product.img} alt="" className='w-[100%] h-[100%] object-contain' />
                                            </td>
                                            <td className='py-[10px] px-[0px] text-[18px] text-center'>
                                                <p>{product.name}</p>
                                            </td>
                                            <td className="py-[10px] text-[20px] text-center min-w-[150px] capitalize font-[400]">
                                                <p>{product.price.toFixed(2)} AZN</p>
                                            </td>
                                            <td className=" justify-center items-center py-[10px] w-[150px]">
                                                <div className="flex gap-3 justify-around mb-4">
                                                    <button onClick={() => handleDecreaseQuantity(product.id)} className='w-[40px] h-[40px] text-[white] bg-orange-500 rounded-[5px]'>-</button>
                                                    <span className='min-w-[50px] my-0 mx-[10px] text-center inline-block text-[18px] bg-[white] border-[1px] py-[5px] px-[10px] '>{product.quantity}</span>
                                                    <button onClick={() => handleIncreaseQuantity(product.id)} className='w-[40px] h-[40px] text-[white] bg-orange-500 rounded-[5px]'>+</button>
                                                </div>
                                            </td>
                                            <td className="py-[10px] text-[20px] text-center min-w-[150px]">
                                                <span>
                                                    {(product.price * product.quantity).toFixed(2)} AZN
                                                </span>
                                            </td>
                                            <td>
                                                <button onClick={() => handleRemoveFromCart(product.id)} className='bg-[#c82333] text-[white] w-[40px] h-[40px] rounded-[5px] text-[22px]'><i className='fa-solid fa-xmark'></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}
                <div className='max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] flex justify-end items-center mb-[20px]'>
                    {cart.length > 0 ? (
                        <div className='flex flex-col justify-center max-w-[450px] min-h-[220px] py-[20px] px-[15px] w-full shadow-lg'>
                            <h4 className='text-[1.5rem] py-[10px]'>Səbət</h4>
                            <hr />
                            <div className='flex  items-center  flex-row  justify-between mb-[30px] py-[15px] w-[100%]'>
                                <span className='text-[18px]'>Cəmi</span>
                                <span className='text-[22px]'>{sumPrice.toFixed(2)} Azn</span>
                            </div>
                            <div className='flex justify-center'>
                                <Link onClick={() => { orderHandleClick() }} to={orderLinkPath} className='flex items-center justify-center bg-orange-500 rounded-lg text-white text-xl max-w-[250px] w-full py-[15px] px-[20px]'>Sifarişi təsdiqlə</Link>
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
                                        <Link onClick={() => { orderHandleClick() }} className='flex items-center justify-center bg-orange-500 rounded-lg text-white text-xl max-w-[250px] w-full py-[15px] px-[20px]'>Sifarişi təsdiqlə</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Layout>
        </>
    )
}

export default ShopProduct