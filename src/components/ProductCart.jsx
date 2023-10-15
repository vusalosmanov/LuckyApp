import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Product.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AddCart, AddToWishlist, RemoveFromWishlist } from "../redux/cartSystem";
import heartIconFilled from '../assets/image/icon/heart-filled.svg'
import heartIconOutline from '../assets/image/icon/heart-outline.svg'
const Product = ({ quantity, id, productName, price, imageurl, product }) => {


  const dispatch = useDispatch()

  const [isIconClicked, setIsIconClicked] = useState(false);
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
    } else {
      dispatch(
        AddToWishlist({
          id,
          productName,
          imageurl,
          quantity
        })
      );
    }
    setIsIconClicked(!isIconClicked);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex bg-[#fff] w-[260px] pt-[7px] pr-[15px] pb-[20px] pl-[15px] items-center flex-col justify-center  ">
          <div className="relative min-h-[40px] w-full flex justify-end z-50">
            <div>
              {product?.isNew && (
                <span className="product-badge">Yeni</span>
              )}
            </div>
            <button className='icon-button' onClick={iconHandleClick}>
              <img
                src={isIconClicked ? heartIconFilled : heartIconOutline}
                alt="heart-icon"
              />
            </button>
          </div>
          <Link to="" className="w-[100%] max-w-[200px] h-[200px] hover:scale-[1.1] image-hover mb-[20px]">
            <img src={imageurl} alt="" className="w-[100%] h-[100%] object-contain" />
          </Link>
          <div className="flex items-center justify-center flex-col mb-[20px] text-center w-full z-50">
            <div className="mb-[5px] min-h-[60px] px-[10px] flex justify-center items-center">
              <p>{productName}</p>
            </div>
            <div className="flex items-center justify-center flex-row">
              <p>{price.toFixed(2)}AZN</p>
            </div>
          </div>
          <button className="max-w-[150px] py-[10px] px-[20px] text-[black] w-full border-[1px] rounded hover:bg-lime-800 hover:text-[white] transition ease-in-out duration-200"
            variant="success" onClick={handleClick}>
            Səbətə at
          </button>
          <p>{quantity}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
