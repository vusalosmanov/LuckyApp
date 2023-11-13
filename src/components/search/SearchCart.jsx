import React from 'react'
import { Link } from 'react-router-dom'
import { AddCart } from "../../redux/cartSystem";
import { useDispatch } from 'react-redux';
const SearchCart = ({ productName, imageurl, price, id }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(
          AddCart({
            id,
            productName,
            imageurl,
            price,
          })
        )
      };

    return (
        <>
            <div className="border-t-[1px] pb-[5px] h-auto ">
                <div className="flex  items-center p-[10px] w-full ">
                    <div className='w-[50%] flex justify-center items-center'>
                        <Link to="" className="w-[100%] max-w-[200px] h-[200px] hover:scale-[1.1] image-hover mb-[20px]">
                            <img src={imageurl} alt="" className="w-[100%] h-[100%] object-contain" />
                        </Link>
                    </div>

                    <div className="w-[50%]  text-left products_text flex justify-center items-center flex-col">
                        <Link className="mb-[5px] min-h-[60px] px-[10px] flex justify-center items-center text-center">
                            <p>{productName}</p>
                        </Link>
                        <div className="flex items-center justify-center flex-row">
                            <p>{price.toFixed(2)}AZN</p>
                        </div>
                        <button className="max-w-[150px] py-[10px] mt-[10px] px-[20px] text-[black] w-full border-[1px] rounded hover:bg-lime-800 hover:text-[white] transition ease-in-out duration-200"
                            variant="success" onClick={handleClick}
                            type="button">
                            Səbətə at
                        </button>
                    </div>
                </div>
            </div></>
    )
}

export default SearchCart