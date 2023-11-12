import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const BasketFormSection = () => {
    const cartObject = useSelector((state) => state.user.cart);
    const cart = Object.values(cartObject);
    const sumAllProducts = cart.map((product) => {
        return product.quantity * product.price;
    });
    const sumPrice = sumAllProducts.reduce(
        (price, quantity) => price + quantity,
        0
    );
    const deliveryValue = 5
    const totalPrice = deliveryValue + sumPrice;
    return (
        <>
            <section className='flex items-center flex-col justify-center py-[40px] w-[100%]'>
                <div className="flex items-center flex-col justify-center max-w-[1320px] mx-auto  pl-[10px] pr-[10px] w-[100%]">
                    {
                        sumPrice > 5 ? (
                            <form action="#" className="flex flex-col justify-center items-center w-[100%]">
                                <h2 className="mb-[30px] text-[2rem]">Məlumatlar</h2>
                                <div className="w-[100%] flex  mx-[1.5rem] justify-between">
                                    <div className="flex flex-row justify-center mb-[40px] items-center w-[100%]">
                                        <div className="flex flex-col justify-center items-center w-[100%]">
                                            <div className="mb-[25px] items-start flex flex-col justify-center w-[100%]">
                                                <label htmlFor="company" className='text-[18px] mb-[10px] px-[3px]'>Şirkət adı*</label>
                                                <input type="text" className="p-[15px]  appearance-none bg-[white] w-[100%]  border-[1px] rounded-lg text-[#212529] block text-[1rem]   " id="company" placeholder="Şirkət adı*" />
                                            </div>
                                            <div className="mb-[25px] items-start flex flex-col justify-center w-[100%]">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center mb-[40px] items-start w-[100%]">
                                        <div className="flex flex-col justify-center items-center w-[100%] mt-[20px] max-w-[550px] ">
                                            <div className="bg-white shadow-md mb-[40px] px-[20px] py-[30px] flex  items-center flex-col  justify-center w-[100%] ">
                                                <div className='flex  justify-center text-[18px] items-center mb-[15px] py-[8px] w-[100%]'>
                                                    <h4 className='info-title'>Sifariş</h4>
                                                </div>
                                                <div className='flex  justify-between text-[18px] items-center mb-[15px] py-[8px] w-[100%]'>
                                                    <span className='text-[18px]'>Cəmi</span>
                                                    <span className='text-[22px]'>{sumPrice.toFixed(2)} Azn</span>
                                                </div>
                                                <div className='flex justify-between text-[18px] items-center mb-[15px] py-[8px] w-[100%]'>
                                                    <span className='label'>Çatdırılma</span>
                                                    <span className="value">{deliveryValue.toFixed(2)} Azn</span>
                                                </div>
                                                <div className='flex  justify-between text-[18px] items-center mb-[15px] py-[8px] w-[100%]'>
                                                    <span className='label'>Ümumi</span>
                                                    <span className="value">{totalPrice.toFixed(2)} Azn</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-row  justify-between  items-center shadow-lg mb-[40px] min-h-[80px] px-[30px] py-[20px] w-[100%] '>
                                                <label htmlFor="radio-1" className=' cursor-pointer'>
                                                    Nağd <input className=' appearance-none bg-white bg-center bg-no-repeat bg-contain border border-solid border-rgba-0-0-0-25 h-4 mt-1 print-exact align-top w-4 rounded-[50%]' name='payment' type="radio" id='radio-1' />
                                                </label>
                                                <label htmlFor="radio-2" className=' cursor-pointer'>
                                                    Online ödəniş <input className=' appearance-none bg-white bg-center bg-no-repeat bg-contain border border-solid border-rgba-0-0-0-25 h-4 mt-1 print-exact align-top w-4 rounded-[50%]' name='payment' type="radio" id='radio-2' />
                                                </label>
                                                <label htmlFor="radio-3" className=' cursor-pointer'>
                                                    Köçürmə yolu <input className=' appearance-none bg-white bg-center bg-no-repeat bg-contain border border-solid border-rgba-0-0-0-25 h-4 mt-1 print-exact align-top w-4 rounded-[50%]' name='payment' type="radio" id='radio-3' />
                                                </label>
                                            </div>
                                            <button type='submit' className="rounded-[5px] text-white text-18 font-semibold min-w-150 px-[25px] py-[15px] w-full bg-[#fc8410]">Sifarişi təsdiqlə</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        ) : (<>
                            <h3 className="mb-[55px]  relative text-center   capitalize text-[1.75rem] ">Sifarişi təsdiqləmək mümkün deyil</h3>
                            <Link className='flex items-center bg-[#fc8410] rounded-[5px] text-white flex-row text-[20px] font-semibold justify-center max-w-[250px] px-[20px] py-[15px] text-center w-full  hover:bg-[#106853]' to='/shopproduct'><span>Səbətə get</span></Link>
                        </>)
                    }
                </div>
            </section>
        </>
    )
}

export default BasketFormSection