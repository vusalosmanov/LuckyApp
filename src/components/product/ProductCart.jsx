import React, { useContext, useEffect } from "react";
import { Link, json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AddCart, AddToWishlist, RemoveFromWishlist } from "../../redux/cartSystem";
import heartIconFilled from '../../assets/image/icon/heart-filled.svg';
import heartIconOutline from '../../assets/image/icon/heart-outline.svg';
import { AllContext } from "../context/AllContextProvider";
const Product = ({ id, productName }) => {

  const { categoryArray, subcategoryArray, productArray } = useContext(AllContext)
  const product = productArray.find((product) => product.name === productName);
  const category = categoryArray.find((c) => c.id === product.categoryID)
  const subcategory = subcategoryArray.find((c) => c.id === product.subcategoryID)


  const wishlistProducts = useSelector((state) => state.user.wishlist);
  const isWishlist = Object.values(wishlistProducts);
  const wishlist = isWishlist.find(item => item.id === id);

  const dispatch = useDispatch();

  const handleClick = () => {
    toast.success('Məhsul səbətə əlavə olundu');

    dispatch(AddCart({
      ...product
    }));

    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemInCart = existingCartItems.find((item) => item.id === id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      existingCartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
  };

  const iconHandleClick = () => {
    if (wishlist) {
      dispatch(RemoveFromWishlist(id));
    } else {
      dispatch(
        AddToWishlist({
          ...product
        })
      );
    }
  };

  return (
    <>
      <div className="max-w-[280px] w-[100%] bg-[#fff] flex  justify-center  items-center  flex-col py-[7px] px-[15px] pb-[20px]">
        <div className=" relative min-h-[40px] w-[100%]">
          {product.isNew && <span className=" bg-[#fc8410]  absolute top-[50%]  left-0 py-[5px] px-[14px] text-[13px] font-semibold text-[#fff]  rounded-[8px] z-[9] ">Yeni</span>}
          <button className='icon-button flex justify-end w-[100%]' onClick={iconHandleClick} >
            <img
              src={wishlist ? heartIconFilled : heartIconOutline}
              alt="heart-icon"
            />
          </button>
        </div>
        <Link to={`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subcategory?.name)}/${encodeURIComponent(productName)}`} className="w-[100%] max-w-[200px] h-[200px] hover:scale-[1.1] image-hover mb-[20px]">
          <img src={product.img} alt="" className="w-[100%] h-[100%] object-contain" />
        </Link>
        <div className="w-[100%] flex  justify-center items-center flex-col text-center mb-[20px]">
          <div className="min-h-[60px] flex justify-center flex-row items-center mb-[5px] py-[0px] px-[10px] ">
            {product.name}
          </div>
          <div className="flex justify-center flex-row items-center">
            {
              product.discount ? (
                <>
                  <span className="new">{product.price.toFixed(2)}Azn</span>
                  <span className="old line-through ml-[15px] ">{product.oldPrice.toFixed(2)}Azn</span>
                </>
              ) : (
                <span className="new">{product.price.toFixed(2)}Azn</span>
              )
            }
          </div>
        </div>
        <button className="max-w-[150px] py-[10px] px-[20px] text-[black] w-[100%] border-[1px] rounded hover:bg-[#106853] hover:text-[white] transition ease-in-out duration-200"
          variant="success" onClick={handleClick}>
          Səbətə at
        </button>
      </div>
    </>
  );
};

export default Product;
