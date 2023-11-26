import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { productArray } from '../components/data/ProductData';
import { MainContext } from "../components/context/AllContextProvider";

const Detailes = ({productname , price , oldprice , imageurl}) => {
    // const { productArray } = useContext(MainContext);
    const { id } = useParams();
    const products = useSelector((state) => state.products);

    const product = productArray.find((p) => p.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }
    console.log(productArray);

    return (
        <>
        <p>{productname}</p>
            {/* <div className="lg:w-[1170px] my-0 mx-auto pr-[15px] pl-[15px] w-full relative ">
                <ul className="lg:flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm flex flex-wrap">
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
                            {productname}
                        </Link>
                    </li>
                </ul>
                <div className="detailes flex ">
                    <div className="relative pr-[15px] pl-[15px] w-[500px]">
                        <div className="lg:w-[470px] h-[400px]">
                            <div className="lg:w-[400px]">
                                <img
                                    src={imageurl}
                                    alt=""
                                    className="w-[400px] cursor-pointer object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <div>
                            </div>
                            <span className="text-[#575757] hover:text-[#f15803] cursor-pointer">
                                0 şərh
                            </span>
                        </div>
                        <div>
                            <span className="text-[15px] flex items-center gap-3">
                                Qiymət:
                                <p className="text-[#29c435] text-[20px]">{oldprice}₼</p>
                            </span>
                            <div className="mt-[15px]">
                                <span className="text-[18px]">nağd alışda:{price}₼</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Detailes;
