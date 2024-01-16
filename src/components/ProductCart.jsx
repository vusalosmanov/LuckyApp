import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { AddCart, AddToWishlist, RemoveFromWishlist } from "../redux/cartSystem";
import heartIconFilled from '../assets/image/icon/heart-filled.svg';
import heartIconOutline from '../assets/image/icon/heart-outline.svg';
import Swal from "sweetalert2";

const Product = ({ quantity, id, productName, price, imageurl, isNew, discount, oldPrice, bestSeller , products }) => {

  console.log(products);
  const Alert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Səbətə əlavə olundu",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    Alert()
    dispatch(
      AddCart({
        id,
        productName,
        imageurl,
        price,
        quantity
      })
    );
  };

  const wishlistProducts = useSelector((state) => state.user.wishlist);
  const isWishlist = Object.values(wishlistProducts);
  const wishlist = isWishlist.find(item => item.id === id);

  const iconHandleClick = () => {
    if (wishlist) {
      dispatch(RemoveFromWishlist(id));
    } else {
      dispatch(
        AddToWishlist({
          id,
          productName,
          imageurl,
          price,
          quantity
        })
      );
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex bg-[#fff] w-[260px] pt-[7px] pr-[15px] pb-[20px] pl-[15px] items-center flex-col justify-center">
        <div className="relative min-h-[40px] w-full flex justify-end z-50">
          <div className="flex justify-start items-center w-full">
            {isNew && <span className=" bg-[#fc8410] rounded-[8px] text-[white] px-[8px] py-[3px] text-[14px]">Yeni</span>}
            {bestSeller && <span className=" bg-[#fc8410] rounded-[8px] text-[white] px-[8px] py-[3px] text-[14px]">Ən çox satilan</span>}
            {discount && <span className=" bg-[#fc8410] rounded-[8px] text-[white] px-[8px] py-[3px] text-[14px]">Endirimli</span>}
          </div>
          <button className='icon-button' onClick={iconHandleClick}>
            <img
              src={wishlist ? heartIconFilled : heartIconOutline}
              alt="heart-icon"
            />
          </button>
        </div>
        <Link to={`/detailes/${encodeURIComponent(productName)}`} className="w-[100%] max-w-[200px] h-[200px] hover:scale-[1.1] image-hover mb-[20px]">
          <img src={imageurl} alt="" className="w-[100%] h-[100%] object-contain" />
        </Link>
        <div className="flex items-center justify-center flex-col mb-[20px] text-center w-full z-50">
          <div className="mb-[5px] min-h-[60px] px-[10px] flex justify-center items-center">
            <p>{productName}</p>
          </div>
          <div className="flex items-center justify-center flex-row">
            {
              discount ? (
                <>
                  <p>{price}AZN</p>
                  <p className=" line-through">{oldPrice}AZN</p>
                </>
              ) : (
                <p>{price}AZN</p>
              )
            }
          </div>
        </div>
        <button className="max-w-[150px] py-[10px] px-[20px] text-[black] w-full border-[1px] rounded hover:bg-lime-800 hover:text-[white] transition ease-in-out duration-200"
          variant="success" onClick={handleClick}>
          Səbətə at
        </button>
      </div>
    </div>
  );
};

export default Product;
