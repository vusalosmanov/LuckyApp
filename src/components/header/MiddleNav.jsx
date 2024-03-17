import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo/logo-header.svg";
import Input from '../search/Input';
import GeneralIcon from './GeneralIcon';
const MiddleNav = () => {

    return (
        <>
            <nav className=' mb-[15px] w-[100%] relative '>
                <div className='max-w-[1320px] w-[100%] mx-auto px-[10px]'>
                    <div className='flex w-[100%] flex-row  lg:justify-between justify-center  items-center py-[15px]'>
                        <Link to='/'>
                            <img src={logo} alt="logo" className='w-[100%]  object-contain max-w-[125px] ' />
                        </Link>
                        <div className='w-[100%] flex  flex-row justify-center items-center search'>
                            <Input />
                        </div>
                        <div className='hidden lg:block'>
                            <GeneralIcon />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MiddleNav