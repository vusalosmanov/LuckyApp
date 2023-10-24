import React from 'react'
// import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

const BasketFormSection = () => {
    const cartObject = useSelector((state) => state.user.cart);
    const cart = Object.values(cartObject);

    const dispatch = useDispatch();
    const sumAllProducts = cart.map((product) => {
        return product.quantity * product.price;
    });
    const sumPrice = sumAllProducts.reduce(
        (price, quantity) => price + quantity,
        0
    );
    return (
        <>
            <section>
                <div className='w-[1320px] mx-auto my-0  pr-[10px] pl-[10px] flex items-center justify-center'>
                    {
                        sumPrice > 5 ? (
                            <form action="#" className='w-[100%]'>
                                <h2 className=' text-center mb-[30px] text-[2rem]'>Məlumatlar</h2>
                                <div className='flex  flex-wrap justify-around'>
                                    <div className='flex flex-col justify-center mb-[40px] items-start'>
                                        <div className="flex items-center flex-col justify-start  mb-[25px] w-[100%] ">
                                            <label htmlFor="company" className='text-[18px] mb-[10px] py-[0px] px-[30px] '>Şirkət adı*</label>
                                            <input type="text" className="p-[15px] w-[100%] appearance-none  bg-[white] text-[#212529] text-[1rem] border-[1px] " id="company" placeholder="Şirkət adı*" />
                                        </div>
                                        <div className="flex items-center flex-col justify-start ">
                                            <label htmlFor="fullname">Ad, Soyad*</label>
                                            <input type="text" className="form-control" id="fullname" placeholder="Ad, Soyad*" />
                                        </div>
                                        <div className="flex items-center flex-col justify-start ">
                                            <label htmlFor="location">Ünvan*</label>
                                            <input type="text" className="form-control" id="location" placeholder="Ünvan*" />
                                        </div>
                                        <div className="flex items-center flex-col justify-start ">
                                            <label htmlFor="city">Şəhər*</label>
                                            <input type="text" className="form-control" id="city" placeholder="Şəhər*" />
                                        </div>
                                        <div className="flex items-center flex-col justify-start ">
                                            <label htmlFor="phone">Telefon*</label>
                                            <input type="number" className="form-control" id="phone" placeholder="Telefon*" />
                                        </div>
                                        <div className="flex items-center flex-col justify-start ">
                                            <label htmlFor="email">Email*</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email*" />
                                        </div>
                                    </div>


                                    <div className='flex flex-row justify-center mb-[40px] items-center'>
                                        <h2>fjdkldfds</h2>
                                    </div>
                                </div>
                            </form>
                        )
                            : null}
                </div>
            </section>
        </>
    )
}

export default BasketFormSection