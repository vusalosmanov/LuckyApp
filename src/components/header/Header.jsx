import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo/logo-header.svg";
import Input from "../search/Input";
import category from "../../assets/image/icon/category.svg";
import heart from "../../assets/image/icon/heart.svg";
import shopping from "../../assets/image/icon/cart.svg";
import { BsChevronRight } from "react-icons/bs";
import { AllContext } from "../context/AllContextProvider";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryMenu from "../menuCategory/CategoryMenu";
const Header = () => {
  const { subcategoryArray } = useContext(AllContext);
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

  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const closeCatMenu = () => {
    setIsDropdownVisible(false)
  }
  const openCatMenu = () => {
    setIsDropdownVisible(true)
  }
  return (
    <>
      <header className="header">
        <nav>
          <div className="max-w-[1320px] w-full  mx-auto pr-[10px] pl-[10px] ">
            <div className="flex justify-between lg:justify-end flex-row items-center pt-[15px]  pb-[15px] w-[100%] ">
              <div className="relative  lg:hidden">
                <Link to="/">
                  <img
                    src={logo}
                    alt=""
                    className="max-w-[125px] object-contain w-[100%]"
                  />
                </Link>
              </div>
              <div>
                <Link
                  to="/login"
                  className="mr-[20px] border-[2px] rounded-[5px] border-[white] text-[white] pt-[10px] pb-[10px] pr-[20px] pl-[20px] text-[16px] relative hover:bg-[#106853]"
                >
                  Daxil ol
                </Link>
                <Link
                  to="/register"
                  className=" rounded-[5px]  border-[white] text-[#106853] bg-white pt-[10px] pb-[10px] pr-[20px] pl-[20px] text-[16px] relative hover:bg-[#106853] hover:text-white"
                >
                  Qeydiyyat
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="max-w-[1320px] w-full  mx-auto  pr-[10px] pl-[10px]">
            <div className="flex lg:justify-between items-center py-[15px] justify-center">
              <div className="relative lg:block hidden">
                <Link to="/">
                  <img
                    src={logo}
                    alt=""
                    className="max-w-[125px] object-contain w-[100%]"
                  />
                </Link>
              </div>
              <div className="w-full flex justify-center ">
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
                    <div className="absolute top-[-9px] left-6   w-[25px] h-[25px] bg-[#ff0000] rounded-[50%] flex items-center text-white  justify-center">
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
        {/* <nav className="responsive kategory lg:hidden relative ">
          <div className=" flex w-full dropdown bg-[#106853] h-[65px] justify-center items-center cursor-pointer text-[20px] text-[white]">
            <ul>
              <li className="flex items-center gap-3 px-4 cursor-pointer tracking-wide" onMouseEnter={openCatMenu}>
                <img src={category} alt="category" />
                <Link to="">Kataqoriya</Link>
                <div className={`dropdown-menu absolute   h-auto mt-[65px] z-[9999] top-0 w-full left-0  ${isDropdownVisible ? ' ' : 'hidden'}`}>
                  <ul className=" bg-[#106853] shadow flex flex-col items-start px-[40px]">
                    {categoryArray.length > 0
                      ? categoryArray.map((category) => (
                        <li
                          className="py-[4px] px-12 w-full flex onedrop  "
                          onMouseEnter={() => openSubMenu(category.id)}
                          onMouseLeave={() => { closeSubMenu() }}
                        >
                          <Link
                            to={`/products/${encodeURIComponent(category.name)}`}
                            onClick={closeCatMenu}
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
        </nav> */}
        <nav className="relative mt-[20px] lg:block hidden">
          <div className="flex">
            <div className="w-[550px] dropdown  bg-[#106853] h-[65px] flex justify-center items-center cursor-pointer text-[20px] text-[white]">
              <ul>
                <li className="flex items-center gap-3  px-4  cursor-pointer tracking-wide" onMouseMove={openCatMenu} onMouseLeave={closeCatMenu}>
                  <img src={category} alt="category" />
                  <Link to="">Kataqoriya</Link>
                </li>
                <CategoryMenu openCatMenu={openCatMenu} isDropdownVisible={isDropdownVisible} closeCatMenu={closeCatMenu} />
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
                  <Link className="anima relative py-[5px]"  to='/products/new'>
                    Yeni
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="/products/discounts" className="anima relative py-[5px]">
                    Endirimlər
                  </Link>
                </li>
                <li className="text-[18px] mr-[50px]">
                  <Link to="/products/best-sellers" className="anima relative py-[5px]">
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
                  <Link to="/contact" className="relative  anima py-[5px]">
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
