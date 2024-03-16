import React from 'react'
import BurgerMenu from './BurgerMenu'
import GeneralIcon from './GeneralIcon'

const BottomResMenu = () => {
    return (
        <>
            <div className='lg:hidden block flex  mb-[50px] justify-between'>
                <div>
                    <BurgerMenu />
                </div>
                <div className='mx-[10px]'>
                    <GeneralIcon />
                </div>
            </div>
        </>
    )
}

export default BottomResMenu