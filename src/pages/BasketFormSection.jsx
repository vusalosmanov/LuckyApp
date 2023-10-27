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
            <section className='flex items-center flex-col justify-center py-[40px] w-[100%]'>
                <div className="flex items-center flex-col justify-center max-w-[1320px] mx-auto  pl-[10px] pr-[10px] w-[100%]">
                    {
                        sumPrice > 5 ? (
                            <form action="#" className="flex flex-col justify-center items-center">
                                <h2 className="mb-[30px] text-[2rem]">Məlumatlar</h2>
                                <div className="w-[100%] flex flex-wrap mx-[1.5rem]">
                                    <div className="flex flex-row justify-center mb-[40px] items-center">
                                        <div className="flex flex-col justify-center w-[100%] items-center">
                                            <div className="mb-[25px] items-start flex flex-col justify-center w-[100%]">
                                                <label htmlFor="company" className='text-[18px] mb-[10px] px-[3px]'>Şirkət adı*</label>
                                                <input type="text" className="p-[15px] w-[100%] appearance-none bg-[white] border-[1px] rounded-lg text-[#212529] block text-[1rem]   " id="company" placeholder="Şirkət adı*" />
                                            </div>
                                            {/* <div className="mb-[25px] items-start flex flex-col justify-center w-[100%]">
                                            <label htmlFor="fullname" className='text-[18px] mb-[10px] px-[3px]'>Ad, Soyad*</label>
                                            <input type="text" className="p-[15px] w-[100%] appearance-none bg-[white] border-[1px] rounded-lg text-[#212529] block text-[1rem]   " id="fullname" placeholder="Ad, Soyad*" />
                                        </div>
                                        <div className="mb-[25px] items-start flex flex-col justify-center w-[100%]">
                                            <label htmlFor="location" className='text-[18px] mb-[10px] px-[3px]'>Ünvan*</label>
                                            <input type="text" className="p-[15px] w-[100%] appearance-none bg-[white] border-[1px] rounded-lg text-[#212529] block text-[1rem]   " id="location" placeholder="Ünvan*" />
                                        </div>
                                        <div className="mb-[25px] items-start flex flex-col justify-center w-[100%]">
                                            <label htmlFor="city" className='text-[18px] mb-[10px] px-[3px]'>Şəhər*</label>
                                            <input type="text" className="p-[15px] w-[100%] appearance-none bg-[white] border-[1px] rounded-lg text-[#212529] block text-[1rem]   " id="city" placeholder="Şəhər*" />
                                        </div>
                                        <div className="mb-[25px] items-start flex flex-col justify-center w-[100%]">
                                            <label htmlFor="phone" className='text-[18px] mb-[10px] px-[3px]'>Telefon*</label>
                                            <input type="number" className="p-[15px] w-[100%] appearance-none bg-[white] border-[1px] rounded-lg text-[#212529] block text-[1rem]   " id="phone" placeholder="Telefon*" />
                                        </div>
                                        <div className="mb-[25px] items-start flex flex-col justify-center w-[100%]">
                                            <label htmlFor="email" className='text-[18px] mb-[10px] px-[3px]'>Email*</label>
                                            <input type="email" className="p-[15px] w-[100%] appearance-none bg-[white] border-[1px] rounded-lg text-[#212529] block text-[1rem]   " id="email" placeholder="Email*" />
                                        </div> */}
                                        </div>
                                    </div>
                                    {/* <div className="flex flex-row justify-center mb-[40px] items-start">
                                        <div className="flex flex-col justify-center items-center w-[100% mt-[20px] max-w-[550px]">
                                            <div className="bg-[white] shadow-lg mb-[40px] px-[20px] py-[30px] flex flex-col justify-center items-center w-[100%] ">
                                                <div className='inner-row'>
                                                    <h4 className='info-title'>Sifariş</h4>
                                                </div>
                                                <div className='inner-row'>
                                                    <span className='label'>Cəmi</span>
                                                    <span className="value">{basketTotal.total.toFixed(2)} Azn</span>
                                                </div>
                                                <div className='inner-row'>
                                                    <span className='label'>Çatdırılma</span>
                                                    <span className="value">{deliveryValue.toFixed(2)} Azn</span>
                                                </div>
                                                <div className='inner-row'>
                                                    <span className='label'>Ümumi</span>
                                                    <span className="value">{total.toFixed(2)} Azn</span>
                                                </div>
                                            </div>
                                            <div className='payment-radiobuttons'>
                                                <label htmlFor="radio-1">
                                                    Nağd <input className='form-check-input' name='payment' type="radio" id='radio-1' />
                                                </label>
                                                <label htmlFor="radio-2">
                                                    Online ödəniş <input className='form-check-input' name='payment' type="radio" id='radio-2' />
                                                </label>
                                                <label htmlFor="radio-3">
                                                    Köçürmə yolu <input className='form-check-input' name='payment' type="radio" id='radio-3' />
                                                </label>
                                            </div>
                                            <button type='submit' className="submit-button orange">Sifarişi təsdiqlə</button>
                                        </div>
                                    </div> */}
                                </div>
                            </form>
                        ) : (null)
                    }
                </div>
            </section>
        </>
    )
}

export default BasketFormSection