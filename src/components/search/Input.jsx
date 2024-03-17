import React, { useState, useContext } from "react";
import { AllContext } from "../context/AllContextProvider";
import SearchCart from "./SearchCart";

const Input = () => {
  const { productArray } = useContext(AllContext);
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
  return (
    <form className="max-w-[650px] w-full relative flex items-center justify-center flex-row">
      <div className="w-full relative ">
      <div className="absolute inset-y-0 right-0 flex items-center pr-[5px] pointer-events-none text-white">
        <button type='submit'><i className='fa-solid fa-magnifying-glass'></i></button>
      </div>
      <input
        className="bg-transparent border-[2px] border-white rounded-[5px] caret-white text-white text-18 min-h-55 outline-none px-5 w-full h-[55px] placeholder:text-[white]  input"
        type="text"
        name="search"
        placeholder="Axtar"
        onChange={searchData}
        autoComplete="off"
      />
      <div
        style={borderedDivStyle}
        className="w-full  gap-[50px] absolute z-[99999999999] bg-white hidden rounded-t-[5px]  ">
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
    </form >
  );
};

export default Input;
