import React from 'react';
import { useParams } from 'react-router-dom';
import { productArray } from '../components/data/ProductData';
import { Link } from 'react-router-dom';
import { AddCart, DecreaseCart, RemoveFromCart } from '../redux/cartSystem';
import { useDispatch } from 'react-redux';
const Detailes = () => {
    const { id } = useParams();
    const product = productArray.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }
    // const dispatch = useDispatch();
    // const handleIncreaseQuantity = (productId) => {
    //     dispatch(AddCart({ id: productId }));
    // };

    // const handleDecreaseQuantity = (productId) => {
    //     dispatch(DecreaseCart({ id: productId }));
    // };

    // const handleRemoveFromCart = (productId) => {
    //     dispatch(RemoveFromCart({ id: productId }));
    // };

    return (
        <>
            <div className="lg:w-[1170px] my-0 mx-auto pr-[15px] pl-[15px] w-full relative ">
                {/* <ul className="lg:flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm flex flex-wrap">
                    <li className="flex items-center gap-2">
                        <Link to="/home" className="hover:text-[#f15803]">
                            Ana səhifə
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <Link to="/">Məişət texnikası</Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <Link to="/">Ən çox baxılanlar</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-[#f15803]">
                            {product.name}
                        </Link>
                    </li>
                </ul> */}
                <div className="flex flex-wrap w-full  lg:w-[1170px] ">
                    <div className="relative pr-[15px] pl-[15px] w-[500px] flex items-start mb-[40px] flex-row">
                        <div className="w-full max-w-[500px] h-[400px] border-[1px] rounded-[5px] ">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-[100%] h-[100%]  cursor-pointer object-contain"
                            />
                        </div>
                    </div>
                    <div className='flex items-start  flex-col justify-center w-full'>
                        <div className="flex items-center gap-2">
                                <h1>{product.name}</h1>
                            <div>
                                <span className="text-[15px] flex items-center gap-3">
                                    Qiymət:
                                    <p className="text-[#29c435] text-[20px]">{product.price}₼</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-around mb-4">
                            {/* <button onClick={() => handleDecreaseQuantity(product.id)} className='w-[40px] h-[40px] text-[white] bg-orange-500 rounded-[5px]'>-</button> */}
                            <span className='min-w-[50px] my-0 mx-[10px] text-center inline-block text-[18px] bg-[white] border-[1px] py-[5px] px-[10px] '>{product.quantity}</span>
                            {/* <button onClick={() => handleIncreaseQuantity(product.id)} className='w-[40px] h-[40px] text-[white] bg-orange-500 rounded-[5px]'>+</button> */}
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};

export default Detailes;


