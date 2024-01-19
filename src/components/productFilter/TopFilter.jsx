import React from "react";

const TopFilter = ({ setPriceSortValue, changeProductsPerPage }) => {
  return (
    <>
      <div className="w-[100%] lg:flex  flex-row  justify-center items-center bg-[#fff] shadow-lg  py-[20px] px-[15px] mb-[30px]  ">
        <div className="w-full flex flex-col lg:flex lg:flex-row justify-center items-center">
          <span className="mr-[10px]">Saya Gore</span>
          <select defaultValue={12} onChange={(e) => changeProductsPerPage(e.target.value)}
            className="rounded-lg border-[#106853] border-[1px] max-w-[200px] py-[5px] px-[10px] w-[100%]">
            <option value={12}>12</option>
            <option value={18}>18</option>
            <option value={24}>24</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div className="w-full flex flex-col lg:flex lg:flex-row justify-center items-center">
          <span className="mr-[10px]">Qiymete Gore</span>
          <select
            onChange={(e) => setPriceSortValue(e.target.value)}
            className="rounded-lg border-[#106853] border-[1px] max-w-[200px] py-[5px] px-[10px] w-[100%]"
          >
            <option value="choose">Seç</option>
            <option value="cheapToExp">Ucuzadan Bahaya</option>
            <option value="expToCheap">Bahadan Ucuza</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TopFilter;
