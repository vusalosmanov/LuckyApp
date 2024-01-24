import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AddCart } from '../redux/cartSystem';
import { useDispatch } from 'react-redux';
import basketIcon from '../assets/image/icon/cart.svg';
import Swal from 'sweetalert2';
import { AllContext } from "../components/context/AllContextProvider";
import SimiliarProducts from '../components/product/SimiliarProducts';
import Layout from './Layout';

const Detailes = () => {
    const dispatch = useDispatch();
    const { productName, categoryName, subCategoryName } = useParams();

    const { categoryArray, subcategoryArray, productArray } = useContext(AllContext)


    const product = productArray.find((p) => p.name === productName);
    const category = categoryArray.find((category) => category.name === categoryName);
    const subCategory = subcategoryArray.find((subcategory) => subcategory.name === subCategoryName);

    // let similiarProducts = productArray.filter((p) => p.subcategoryID === subCategory.id);
    // similiarProducts = similiarProducts.filter((p) => p.name !== product?.name);

    let similiarProducts = productArray.filter((p) => p.subcategoryID === subCategory.id)

    const [quantity, setQuantity] = useState(1);


    const handleIncreaseQuantity = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleClickQuantity = (e) => {
        e.preventDefault();
        setQuantity(parseInt(e.target.value))
    }

    const Alert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Səbətə əlavə olundu",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        Alert();
        dispatch(
            AddCart({
                ...product,
                quantity: quantity,
            })
        );
    };


    return (
        <>
            <Layout>
                <div className="max-w-[1320px] my-0 mx-auto pr-[15px] pl-[15px] w-full relative py-[40px] mb-[40px] ">
                    <div className='flex items-center  justify-start flex-row flex-wrap w-full py-[15px] capitalize  cursor-pointer   '>
                        <Link to='/'>Ana səhifə</Link>
                        <span className='px-[5px]'>/</span>
                        <Link to={`/products/${encodeURIComponent(category?.name)}`}>{category?.name}</Link>
                        <span className='px-[5px]'>/</span>
                        <Link to={`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subCategory?.name)}`}>{subCategory?.name}</Link>
                        <span className='px-[5px]'>/</span>
                        <Link>{product?.name}</Link>
                    </div>
                    <div className="detailes flex ">
                        <div className='flex justify-center flex-row  items-center mb-[40px] w-full max-w-[50%] px-[12px]'>
                            <div className='h-[400px] w-full max-w-[500px]  border-[1px]  rounded-[5px] '>
                                <img src={product.img} alt="product" className='h-[100%] w-[100%] object-contain ' />
                            </div>
                        </div>
                        <div className='mt-[30px] flex w-full max-w-[50%] mb-[40px] justify-center items-start flex-row'>
                            <div className='flex  flex-col justify-center items-start  w-full '>
                                <div className=' items-start  text-start mb-[30px] flex justify-center flex-col  w-full'>
                                    <h3 className='mb-[20px] text-[1.75rem]'>{product.name}</h3>
                                    <div className='flex items-center flex-row  justify-start'>
                                        <span className='mr-[10px] text-[#414141]'>Qiymət:</span>
                                        <span className="text-bold mr-[10px]">{product.price.toFixed(2)} Azn</span>
                                    </div>
                                </div>

                                <form action="" className='flex  items-center flex-row justify-between w-full'>
                                    <div className="flex  flex-row items-center justify-center">
                                        <button onClick={handleDecreaseQuantity} className=' border-[1px] border-[#106853]  rounded-[10px]  text-[40px] h-[50px] w-[50px] flex justify-center items-center cursor-pointer'>-</button>
                                        <input type="number" className='value  border-none  text-[25px] mx-[10px] font-medium max-w-[70px] min-w-[50px] outline-none  text-center  ' value={quantity} onChange={handleClickQuantity} />
                                        <button onClick={handleIncreaseQuantity} className=' border-[1px] border-[#106853]  rounded-[10px]  text-[30px] h-[50px] w-[50px] flex justify-center items-center cursor-pointer'>+</button>
                                    </div>
                                    <button className="max-w-[200px] py-[15px] px-[20px] text-[#fff] text-[20px] bg-[#fc8410] w-full border-[1px] rounded-[10px] hover:bg-[#106853] hover:text-[white] transition ease-in-out duration-200 flex cursor-pointer flex-row-reverse gap-4 "
                                        variant="success" onClick={handleClick}>
                                        <img src={basketIcon} alt="" />
                                        Səbətə at
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    similiarProducts.map > 0 && <SimiliarProducts similiarProducts={similiarProducts} />
                }
            </Layout>
        </>
    );
};

export default Detailes;
