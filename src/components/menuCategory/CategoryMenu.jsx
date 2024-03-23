import React from 'react'
import { useState, useContext } from 'react';
import { AllContext } from "../context/AllContextProvider";
import SubCategotyList from "./SubCategoryList";
import { Link } from 'react-router-dom';
const CategoryMenu = ({ isDropdownVisible, closeCatMenu }) => {

    const { categoryArray } = useContext(AllContext);
    const [activeCategoryID, setActiveCategoryID] = useState(null);

    const toggleCategory = (categoryId) => {
        if (activeCategoryID === categoryId) {
            setActiveCategoryID(null);
        } else {
            setActiveCategoryID(categoryId);
        }
    }
    const openSubMenu = (categoryId) => setActiveCategoryID(categoryId)
    const closeSubMenu = () => setActiveCategoryID(null)
    return (
        <>
            <div className={`dropdown-menu absolute lg:left-[150px] h-auto mt-[65px] z-[100] top-0 w-full lg:max-w-[400px] ${isDropdownVisible ? ' ' : 'hidden'}`} >
                <ul className="lg:bg-white bg-[#106853] shadow flex flex-col items-start" >
                    {categoryArray.length > 0
                        ? categoryArray.map((category) => (
                            <div key={category.id}
                                className="py-[4px] lg:px-12 px-6  lg:border-b-[1px] w-full flex onedrop un clas"
                                onMouseMove={() => openSubMenu(category.id)}
                                onMouseLeave={() => { closeSubMenu(category.id) }}>
                                <div className='text-[16px] lg:text-[#303030] text-[#fff] font-montserrat font-sans w-full flex justify-between flex-row capitalize'>
                                    <div className='flex flex-col w-full'>
                                        <div className='flex justify-between w-full'>
                                            <Link to={`/products/${encodeURIComponent(category.name)}`} onClick={() => closeCatMenu()} className="flex gap-2 items-center py-[10px]">
                                                <img src={category.icon} alt="" className="lg:block hidden w-[20px] h-[20px]" />
                                                <span>{category.name}</span>
                                            </Link>
                                            <button className='lg:hidden block' onClick={() => toggleCategory(category.id)}>
                                                <i className={activeCategoryID === category.id ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'}></i>
                                            </button>
                                        </div>
                                        {activeCategoryID === category.id && (
                                            <div className="lg:hidden w-full">
                                                <SubCategotyList
                                                    category={category}
                                                    closeSubMenu={() => setActiveCategoryID(null)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className={`${activeCategoryID === category.id
                                            ? "flex absolute bottom-0 left-[400px] top-0"
                                            : "hidden absolute bottom-0 left-[500px]"
                                            }`}
                                    >
                                        <div className="grid-cols-3 gap-4 lg:block hidden">
                                            <SubCategotyList
                                                category={category}
                                                closeSumMenu={closeSubMenu}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : null}
                </ul>
            </div>
        </>
    )
}

export default CategoryMenu