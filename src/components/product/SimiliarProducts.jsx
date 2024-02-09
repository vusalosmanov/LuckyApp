import React from 'react'
import ProductCart from '../product/ProductCart';

function SimiliarProducts({ similiarProducts }) {
    return (
        <section className='flex  flex-col  items-center  justify-center'>
            <div className="max-w-[1320px] w-full flex flex-col items-center justify-center">
                <h1 className=' capitalize text-[34px]'>oxşar məhsullar</h1>
                <div className='w-[40px] h-[5px] bg-[#106853] rounded-[5px] mt-[5px]'></div>
                <div className=' lg:flex  gap-8 w-full max-w-[1320px] mt-[20px]  '>
                    {
                        similiarProducts.map(product => (
                            <div key={product.id} className='flex justify-center ' >
                                <ProductCart
                                    productName={product.name} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SimiliarProducts
