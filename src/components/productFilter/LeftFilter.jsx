import React, { useState } from "react";
import CategoryInput from "../CategoryInput";
import ManatIcon from "../../assets/image/icon/manat.svg";

const LeftFilter = () => {
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(2000);

  const handleRangeChange = (e, setRange) => {
    setRange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform filtering logic here
    console.log("Filtering with range:", rangeMin, "-", rangeMax);
  };

  return (
    <div className="flex justify-center flex-col w-[100%] items-center bg-white">
      <button className="bg-[#fc8410] text-[18px] mb-[30px] p-[15px] w-[100%] cursor-pointer rounded-lg text-[#fff] hidden">
        <span>Filterle</span>
      </button>
      <form
        action=""
        className="py-[35px] px-[30px] flex flex-col justify-center items-center w-[100%] shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="w-[100%] h-[1px] bg-gray-400 "></div>
        <div className="range-filter mb-[50px] w-[100%]">
          <h4 className="text-start w-[100%] relative capitalize text-[black] text-[1.5rem]">
            Qitmət Filteri
          </h4>
          <div className="w-[40px] h-[5px] bg-green-700 mt-[10px] rounded-lg"></div>
          <div className="range-inputs">
            <input
              type="range"
              value={rangeMin}
              onChange={(e) => handleRangeChange(e, setRangeMin)}
              min={0}
              max={2000}
              step={1}
            />
            <input
              type="range"
              value={rangeMax}
              onChange={(e) => handleRangeChange(e, setRangeMax)}
              min={0}
              max={2000}
              step={1}
            />
          </div>
          <div className="result-inputs">
            <div className="item">
              <input
                type="number"
                value={rangeMin}
                onChange={(e) => handleRangeChange(e, setRangeMin)}
              />
              <img src={ManatIcon} alt="icon" />
            </div>
            <div className="item">
              <input
                type="number"
                value={rangeMax}
                onChange={(e) => handleRangeChange(e, setRangeMax)}
              />
              <img src={ManatIcon} alt="icon" />
            </div>
          </div>
        </div>
        <div className="propert-filter flex  items-center justify-start mb-[30px] w-[100%] flex-col mt-[25px] ">
          <div className="form-chek mb-[10px] w-[100%] flex items-center">
            <input type="radio" className="border-[50%] float-left " />
            <label htmlFor="" className=" capitalize pl-[5px]">
              Yeni
            </label>
          </div>
          <div className="form-chek mb-[10px] w-[100%] flex items-center">
            <input type="radio" className="border-[50%] float-left " />
            <label htmlFor="" className="captalize pl-[5px]">
              Edirimli{" "}
            </label>
          </div>
          <div className="form-chek mb-[10px] w-[100%] flex items-center">
            <input type="radio" className="rounder-[50%] float-left " />
            <label htmlFor="" className="captalize pl-[5px]">
              En cox Satilan
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#fc8410] cursor-pointer rounded-lg text-[#fff] text-[18px] font-bold min-w-[150px] py-[15px] px-[25px] w-[100%] "
        >
          Filterle
        </button>
      </form>
    </div>
  );
};

export default LeftFilter;
