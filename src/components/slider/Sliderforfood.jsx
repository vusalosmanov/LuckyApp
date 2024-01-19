import React from "react";
import ProductCart from "../ProductCart";
import { productArray } from "../data/ProductData";
import Slider from "react-slick";

const Sliderforfood = () => {
    var settings = {
        dots: true,
        appendDots: (dots) => (
            <ul>
                {dots.slice(0, 8)}
            </ul>
        ),
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            {productArray?.length > 0 &&
                productArray
                    .filter((item) => item.bestSeller === true && item.categoryID === 2)
                    .map((product) => (
                        <div className="max-w-[260px] w-full    ">
                            <Slider {...settings}>
                                <ProductCart
                                    id={product.id}
                                    productName={product.name}
                                    price={product.price}
                                    imageurl={product.img}
                                    key={product.id}
                                    isNew={product.isNew}
                                />
                            </Slider>
                        </div>
                    ))}

        </>
    );
};

export default Sliderforfood;
