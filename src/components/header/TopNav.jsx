import React from 'react'
import { Link } from 'react-router-dom'
const TopNav = () => {
    return (
        <>
            <nav className='w-[100%]  relative'>
                <div className="max-w-[1320px] w-full  mx-auto pr-[10px] pl-[10px] ">
                    <div className="flex  flex-row  justify-end items-center w-[100%] py-[15px]">
                        <Link
                            to="/login"
                            className="mr-[20px] border-[2px] rounded-[5px] border-[white] text-[white] py-[12px] px-[20px] text-[16px] relative hover:bg-[#106853]"
                        >
                            Daxil ol
                        </Link>
                        <Link
                            to="/register"
                            className=" rounded-[5px]  border-[white] text-[#106853] bg-white py-[14px] px-[20px] text-[16px] relative hover:bg-[#106853] hover:text-white"
                        >
                            Qeydiyyat
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopNav