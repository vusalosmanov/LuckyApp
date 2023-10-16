import React from 'react'
import { useSelector } from 'react-redux';
import ProductCart from "../components/ProductCart"

function Wishlist() {
    const wishlistProducts = useSelector((state) => state.user.wishlist)
    const wishlist = Object.values(wishlistProducts)


    return (
        <>
            {wishlist.length > 0 ? (
                <div className='lg:w-[1170px] w-full  my-0 mx-auto  pr-[15px] pl-[15px] lg:block md:block hidden  mb-[20px]'>
                    {wishlist.map(product => (
                        <>
                            <ProductCart
                                id={product.id}
                                productName={product.productName}
                                price={product.price}
                                imageurl={product.imageurl}
                                key={product.id} />
                        </>
                    ))}
                </div >
            ) : null}

        </>
    )
}

export default Wishlist
