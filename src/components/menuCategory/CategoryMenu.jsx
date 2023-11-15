import React from 'react'
import { useState, useContext } from 'react';
import { MainContext } from "../context/AllContextProvider";
import SubCategotyList from "./SubCategoryList";
import { Link } from 'react-router-dom';
const CategoryMenu = ({ isDropdownVisible, closeCatMenu }) => {
    const { categoryArray, } = useContext(MainContext);
    const [activeCategoryID, setActiveCategoryID] = useState(null);

    const openSubMenu = (categoryId) => {
        setActiveCategoryID(categoryId)
    }
    const closeSubMenu = () => {
        setActiveCategoryID(null)
    }
    return (
        <>
            <div className={`dropdown-menu absolute left-[150px] h-auto mt-[65px] z-[100] top-0 w-full max-w-[400px] ${isDropdownVisible ? ' ' : 'hidden'}`} >
                <ul className="bg-white shadow flex flex-col items-start">
                    {categoryArray.length > 0
                        ? categoryArray.map((category) => (
                            <li
                                className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un clas"
                                onMouseEnter={() => openSubMenu(category.id)}
                                onMouseLeave={() => { closeSubMenu() }}
                            >
                                <Link
                                    to={`/products/${encodeURIComponent(category.name)}`}
                                    onClick={() => closeCatMenu()}
                                    className="flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans"
                                >
                                    <img src={category.icon} alt="" className="w-[20px] h-[20px]" />
                                    <span>{category.name}</span>
                                    <div
                                        className={`${activeCategoryID === category.id
                                            ? "flex absolute bottom-0 left-[400px] top-0"
                                            : "hidden absolute bottom-0 left-[500px]"
                                            }`}
                                    >
                                        <div className="grid grid-cols-3 gap-4">
                                            <SubCategotyList
                                                category={category}
                                                closeSumMenu={closeSubMenu}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                        : null}
                </ul>
            </div>
        </>
    )
}

export default CategoryMenu