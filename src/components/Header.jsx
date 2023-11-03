import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo/logo-header.svg";
import Input from "./Input.jsx";
import category from "../assets/image/icon/category.svg";
import heart from "../assets/image/icon/heart.svg";
import shopping from "../assets/image/icon/cart.svg";
import { BsChevronRight } from "react-icons/bs";
import { MainContext } from "./context/AllContextProvider";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SubCategotyList from "./SubCategoryList";
const Header = () => {
  const { categoryArray, subcategoryArray } = useContext(MainContext);
  const [activeCategoryID, setActiveCategoryID] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    let filteredSubcategories = [];
    if (category) {
      filteredSubcategories = subcategoryArray.filter(
        (item) => item.categoryID === category.id
      );
      filteredSubcategories = filteredSubcategories.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    setSubcategories([...filteredSubcategories]);
  }, [category, subcategoryArray]);


  const wishlistProducts = useSelector(state => state.user.wishlist);
  const cartObject = useSelector((state) => state.user.cart);
  const cart = Object.values(cartObject);


  const openSubMenu = (categoryId) => {
    setActiveCategoryID(categoryId)
  }
  const closeSubMenu = () => {
    setActiveCategoryID(null)
  }
  // const closeSubCategory = () => setSubcategories(null)

  const [isDropdownVisible, setIsDropdownVisible] = useState(null)

  const closeCatMenu = () => {
    setIsDropdownVisible(true)
  }
  const openCatMenu = () => {
    setIsDropdownVisible(false)
  }
  return (
    <>
      <header className="header">
        <nav>
          <div className="max-w-[1320px] w-full  mx-auto pr-[10px] pl-[10px] ">
            <div className="flex justify-end flex-row items-center pt-[15px]  pb-[15px] w-[100%] ">
              <Link
                to="/register"
                className="mr-[20px] border-[2px] rounded-[5px] border-[white] text-[white] pt-[10px] pb-[10px] pr-[20px] pl-[20px] text-[16px] relative"
              >
                Daxil ol
              </Link>
              <Link
                to="/register"
                className=" rounded-[5px] border-[2px] border-[white] text-[black] bg-white pt-[10px] pb-[10px] pr-[20px] pl-[20px] text-[16px] relative"
              >
                Qeydiyyat
              </Link>
            </div>
          </div>
        </nav>
        <nav>
          <div className="max-w-[1320px] w-full  mx-auto  pr-[10px] pl-[10px]">
            <div className="flex lg:justify-between items-center py-[15px] justify-center">
              <div className="relative">
                <Link to="">
                  <img
                    src={logo}
                    alt=""
                    className="max-w-[125px] object-contain w-[100%]"
                  />
                </Link>
              </div>
              <div className="w-full flex justify-center hidden">
                <Input />
              </div>
              <div className="icon lg:block hidden">
                <div className="flex gap-5">
                  <Link to="/shopproduct" className="relative" key={cart.id}>
                    <img src={shopping} alt="" className="w-[50px] " />
                    <div className="absolute top-[-9px] left-7 w-[25px] h-[25px] bg-[#ff0000] rounded-[50%] flex items-center text-white  justify-center">
                      {cart.length}
                    </div>
                  </Link>
                  <Link to="/wishlist" className="relative">
                    <img src={heart} alt="" className="w-[50px]" />
                    <div className="absolute top-[-9px] left-7 w-[25px] h-[25px] bg-[#ff0000] rounded-[50%] flex items-center text-white  justify-center">
                      {wishlistProducts.length}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav-responsive lg:hidden block">
              <div className="w-full flex justify-between items-center">
                <div className="hamburger">

                </div>
                <div className="icon lg:hidden block">
                  <div className="flex gap-5">
                    <Link to="/shopproduct" className="relative" key={cart.id}>
                      <img src={shopping} alt="" className="w-[50px] " />
                      <div className="absolute top-[-9px] left-7 w-[25px] h-[25px] bg-[#ff0000] rounded-[50%] flex items-center text-white  justify-center">
                        {cart.length}
                      </div>
                    </Link>
                    <Link to="/wishlist" className="relative">
                      <img src={heart} alt="" className="w-[50px]" />
                      <div className="absolute top-[-9px] left-7 w-[25px] h-[25px] bg-[#ff0000] rounded-[50%] flex items-center text-white  justify-center">
                        {wishlistProducts.length}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="responsive kategory lg:hidden relative ">
          <div className=" flex w-full dropdown bg-[#106853] h-[65px] justify-center items-center cursor-pointer text-[20px] text-[white]">
            <ul>
              <li className="flex items-center gap-3 px-4 cursor-pointer tracking-wide" onMouseEnter={openCatMenu}>
                <img src={category} alt="category" />
                <Link to="">Kataqoriya</Link>
                <div className={`dropdown-menu absolute hidden  h-auto mt-[65px] z-[9999] top-0 w-full left-0  ${isDropdownVisible ? 'z-[-10]' : ''}`}>
                  <ul className=" bg-[#106853] shadow flex flex-col items-start px-[40px]">
                    {categoryArray.length > 0
                      ? categoryArray.map((category) => (
                        <li
                          className="py-[4px] px-12 w-full flex onedrop  "
                          onClick={closeCatMenu}
                          onMouseEnter={() => openSubMenu(category.id)}
                          onMouseLeave={() => { closeSubMenu() }}
                        >
                          <Link
                            to={`/products/${encodeURIComponent(category.name)}`}
                            className="flex justify-between w-full items-center py-[5px]  text-[14px] text-white capitalize "> 
                            <span>{category.name}</span>
                            <BsChevronRight />
                            <div
                              className={`${activeCategoryID === category.id
                                ? "flex absolute bottom-0 left-[400px] top-0"
                                : "hidden absolute bottom-0 left-[500px]"
                                }`}>
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
              </li>
            </ul>
          </div>
        </nav>
        <nav className="relative mt-[20px] lg:block hidden">
          <div className="flex">
            <div className="w-[550px] dropdown  bg-[#106853] h-[65px] flex justify-center items-center cursor-pointer text-[20px] text-[white]">
              <ul>
                <li className="flex items-center gap-3  px-4  cursor-pointer tracking-wide" onMouseEnter={openCatMenu}>
                  <img src={category} alt="category" />
                  <Link to="">Kataqoriya</Link>
                  <div className={`dropdown-menu absolute hidden left-[150px] h-auto mt-[65px] z-[9999] top-0 w-full max-w-[400px] ${isDropdownVisible ? 'z-[-10]' : ''}`}>
                    <ul className="bg-white shadow flex flex-col items-start">
                      {categoryArray.length > 0
                        ? categoryArray.map((category) => (
                          <li
                            className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un clas"
                            onClick={closeCatMenu}
                            onMouseEnter={() => openSubMenu(category.id)}
                            onMouseLeave={() => { closeSubMenu() }}
                          >
                            <Link
                              to={`/products/${encodeURIComponent(category.name)}`}
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
                </li>
              </ul>
            </div>
            <div className="flex  justify-start pl-[40px]">
              <ul className="flex w-full justify-start items-center text-[white]">
                <li className="text-[18px] mr-[50px]">
                  <Link to="/about" className="anima relative py-[5px]">
                    Haqqimizda{" "}
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="/new" className="anima relative py-[5px]">
                    Yeni
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="/discount" className="anima relative py-[5px]">
                    Endirimlər
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="/bestseller" className="anima relative py-[5px]">
                    Ən çox satılanlar{" "}
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px] milidrop">
                  <Link
                    to=""
                    className="flex items-center gap-2 py-[5px]  anima relative "
                  >
                    Şərtlər <BsChevronRight />
                  </Link>
                  <ul className="absolute shadow-lg bg-white top-[55px] hidden mindrop z-50 ">
                    <div className="p-[10px] text-[#000000]">
                      <li className="p-[5px]">
                        <Link to="/terms">Catdirilma </Link>
                      </li>
                      <li className="p-[5px]">
                        <Link to="/return">
                          Geri Qaytarilma ve <br /> deyisdirimle{" "}
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="" className="relative  anima py-[5px]">
                    Əlaqə
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
