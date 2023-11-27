
import React from "react";

const TopFilter = ({ products, setProducts, changeProductsPerPage }) => {
  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    const sortedProducts = [...products];

    if (selectedValue === "cheapToExp") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedValue === "expToCheap") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  return (
    <>
      <div className="lg:flex items-start flex-row justify-center mb-[40px] w-full">
        <div className="product-top-filter flex lg:flex-row lg:justify-between flex-col justify-center px-[15px] mb-[30px] shadow-lg h-auto gap-y-7 py-[25px] w-[100%] bg-[white]">
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
              onChange={handleSortChange}
              className="rounded-lg border-[#106853] border-[1px] max-w-[200px] py-[5px] px-[10px] w-[100%]"
            >
              <option value="choose">Sec</option>
              <option value="cheapToExp">Ucuzadan Bahaya</option>
              <option value="expToCheap">Bahadan Ucuza</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFilter;
