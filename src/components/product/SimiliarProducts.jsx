import React from 'react'
import ProductCard from '../product/ProductCart';

function SimiliarProducts({ similiarProducts }) {
    return (
        <section className='similiar-products'>
            <div className="container">
                <h1 className='section-title'>Oxşar Məhsullar</h1>
                    {
                        similiarProducts.map(product => (
                            <div key={product.id} className='d-flex justify-content-center'>
                                <ProductCard product={product} />
                            </div>
                        ))
                    }
            </div>
        </section>
    )
}

export default SimiliarProducts
