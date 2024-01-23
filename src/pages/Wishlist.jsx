import React from 'react'
import { useSelector } from 'react-redux';
import ProductCart from "../components/product/ProductCart"

function Wishlist() {
    const wishlistProducts = useSelector((state) => state.user.wishlist)
    const wishlist = Object.values(wishlistProducts)


    return (
        <>
            <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] flex items-center justify-center mt-[20px]  flex-col mb-[40px]">
                <h1 className="text-[2.5rem] capitalize">istək siyahısı</h1>
                <div className="w-[40px] mt-[10px] h-[5px] rounded-lg bg-[#106853] "></div>
            </div>
            {wishlist.length > 0 ? (
                <div className='lg:w-[1320px] w-full  my-0 mx-auto  pr-[10px] pl-[10px] mt-[20px] flex justify-start flex-wrap mb-[40px] '>
                    {wishlist.map(product => (
                        <div key={product.id}>
                            <ProductCart
                                id={product.id}
                                productName={product.name}
                            />
                        </div>
                    ))}
                </div >
            ) : null}

        </>
    )
}

export default Wishlist
