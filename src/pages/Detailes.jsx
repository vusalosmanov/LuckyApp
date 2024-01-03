// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { productArray } from '../components/data/ProductData';
// import { Link } from 'react-router-dom';
// import { AddCart, DecreaseCart, RemoveFromCart } from '../redux/cartSystem';
// import { useDispatch } from 'react-redux';
// import phone_icon from "../assets/image/icon/phone_icon.png";
// import Swal from 'sweetalert2';
// const Detailes = ({ productName, imageurl, price, quantity }) => {
//     const dispatch = useDispatch()
//     const { id } = useParams();
//     const product = productArray.find((p) => p.id === parseInt(id));

//     // if (!product) {
//     //     return <div>Product not found</div>;
//     // }
//     const handleIncreaseQuantity = (productId) => {
//         dispatch(AddCart({ id: productId }));
//     };

//     const handleDecreaseQuantity = (productId) => {
//         dispatch(DecreaseCart({ id: productId }));
//     };
    

//     /// Products olan datamiz state olan datani bura props kimi oturmek yada productarray burda productcartda import elemek ki categorId cata bilesen diye

//     const Alert = () => {
//         Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Səbətə əlavə olundu",
//             showConfirmButton: false,
//             timer: 1500,
//         });
//     };
//     const handleClick = () => {
//         Alert()
//         dispatch(
//             AddCart({
//                 id,
//                 productName,
//                 imageurl,
//                 price,
//                 quantity
//             })
//         );
//     };


//     return (
//         <>
//             <div className="max-w-[1320px]  my-0 mx-auto  pr-[15px] pl-[15px] w-full relative py-[40px] mb-[40px] ">
//                 <div className="detailes flex ">
//                     <div className="relative pr-[15px] pl-[15px] w-[500px]">
//                         <div className="lg:w-[470px] h-[400px]">
//                             <div className="lg:w-[400px]">
//                                 <img
//                                     src={product.img}
//                                     alt=""
//                                     className=" w-[400px] cursor-pointer  object-contain"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className='mt-[30px]'>
//                         <h1 className="text-[33px] text-[#575757]">{product.name}</h1>
//                         <div className="flex items-center gap-2">
//                             <span className="text-[#575757] hover:text-[#fc8410] cursor-pointer">
//                                 0 şərh
//                             </span>
//                         </div>

//                         <div>
//                             <span className="text-[15px] flex items-center gap-1">
//                                 Qiymət:
//                                 <p className="text-bold text-[20px]">{product.oldPrice.toFixed(2)}₼</p>
//                             </span>
//                             <div className="mt-[15px] text-[15px] gap-1">
//                                 <span className="text-[18px] flex  items-center">
//                                     Endirimli Qiymət:
//                                     <p className="text-bold text-[20px]">{product.price.toFixed(2)}₼</p>
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="flex gap-3 justify-around mb-4">
//                             <button onClick={() => handleDecreaseQuantity(product.id)} className='w-[40px] h-[40px] text-[white] bg-orange-500 rounded-[5px]'>-</button>
//                             <span className='min-w-[50px] my-0 mx-[10px] text-center inline-block text-[18px] bg-[white] border-[1px] py-[5px] px-[10px] '>{quantity}</span>
//                             <button onClick={() => handleIncreaseQuantity(product.id)} className='w-[40px] h-[40px] text-[white] bg-orange-500 rounded-[5px]'>+</button>
//                         </div>
//                         <button className="max-w-[150px] py-[10px] px-[20px] text-[#fff] bg-[#fc8410] w-full border-[1px] rounded hover:bg-lime-800 hover:text-[white] transition ease-in-out duration-200 mt-[20px]"
//                             variant="success" onClick={handleClick}>
//                             Səbətə at
//                         </button>
//                     </div>
//                     <div className="lg:block hidden">
//                         <div className="bg-[#fc8410] pt-[14px] pb-[14px] pl-[6px] pr-[6px] text-white absolute top-[120px] right-[45px] flex w-[138px] text-center cursor-pointer border-[5px] justify-center gap-2  animate-shadow-pulse ">
//                             <img
//                                 src={phone_icon}
//                                 alt="phone"
//                                 srcset=""
//                                 className="max-w-[100%] w-[52px] h-[52px]"
//                             />
//                             <div>
//                                 <p className="text-[12px]">
//                                     SIZƏ <br /> ZƏNG <br /> EDƏK?{" "}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Detailes;


