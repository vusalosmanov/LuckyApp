import React, { useState, useContext } from "react";
import { MainContext } from "../context/AllContextProvider";
import SearchCart from "./SearchCart";

const Input = () => {
  const { productArray } = useContext(MainContext);
  const [searchInputValues, setSearchInputValues] = useState([]);

  const searchData = (e) => {
    if (e.target.value.trim() === "") {
      setSearchInputValues([]);
    } else {
      const filterData = productArray.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchInputValues(filterData);
    }
  };

  const borderedDivStyle = {
    maxHeight: "225px",
    overflowY: "scroll",
    display: searchInputValues.length === 0 ? "none" : "block",
  };
  console.log(searchInputValues);
  return (
    <form action="" className="w-[650px] relative">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-[5px] pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-7 h-7 text-[white]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div>
          <input
            className="bg-transparent border-[2px] border-white rounded-[5px] caret-white text-white text-18 min-h-55 outline-none px-5 w-full h-[55px] placeholder:text-[white] "
            type="text"
            name="search"
            placeholder="Axtar"
            onChange={searchData}
          />
        </div>
        <div
          style={borderedDivStyle}
          className="w-full  gap-[50px] absolute z-[99999999999] bg-white hidden ">
          {searchInputValues.map((product) => (
            <SearchCart
              id={product.id}
              productName={product.name}
              price={product.price}
              imageurl={product.img}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default Input;
