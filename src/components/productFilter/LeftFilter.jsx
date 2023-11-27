import React, { useState } from "react";
import ManatIcon from "../../assets/image/icon/manat.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LeftFilter = ({ products, setProducts }) => {
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(2000);
  const [propertyFilter, setPropertyFilter] = useState('no-filter')


  const handlePropertyCheckboxChange = (e) => {
    if (e.target.checked) {
      setPropertyFilter(e.target.value)
    } else {
      setPropertyFilter('no-filter')
    }
  }
  console.log(propertyFilter);

  const handleRangeChange = (e, setRange) => {
    setRange(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let combinedFilteredResults = [...products];

    // Filter by price range
    combinedFilteredResults = combinedFilteredResults.filter(
      (product) =>
        Number(rangeMin) <= product.price && product.price <= Number(rangeMax)
    );
    if (propertyFilter !== 'no-filter') {
      if (propertyFilter === 'isNew') {
        combinedFilteredResults = combinedFilteredResults.filter((product) => product.isNew)
      } else if (propertyFilter === 'discount') {
        combinedFilteredResults = combinedFilteredResults.filter((product) => product.discount)
      } else if (propertyFilter === 'bestSeller') {
        combinedFilteredResults = combinedFilteredResults.filter((product) => product.bestSeller)
      }
    }
    setProducts(combinedFilteredResults)

  }
  const location = useLocation();
  useEffect(() => {
    resetFilters();
  }, [location.pathname])

  const resetFilters = () => {
    setRangeMin(0);
    setRangeMax(2000)
  }
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
        <div className="price-filter mb-[50px] w-full">
          <h4 className="text-start w-full relative capitalize text-[black] text-[1.5rem]">
            Qitmət Filteri
          </h4>
          <div className="w-[40px] h-[5px] bg-green-700 mt-[10px] rounded-lg"></div>
          <div className="range-filter mt-[20px]  ">
            <div className="range-inputs">
              <input type="range" value={rangeMin} onChange={(e) => { setRangeMin(e.target.value) }} min={0} max={2000} step={1} />
              <input type="range" value={rangeMax} onChange={(e) => { setRangeMax(e.target.value) }} min={0} max={2000} step={1} />
            </div>
            <div className='result-inputs'>
              <div className="item">
                <input type="number" value={rangeMin} onChange={(e) => { setRangeMin(e.target.value) }} />
                <img src={ManatIcon} alt="icon" />
              </div>
              <div className="item">
                <input type="number" value={rangeMax} onChange={(e) => { setRangeMax(e.target.value) }} />
                <img src={ManatIcon} alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="propert-filter flex items-center justify-start mb-[30px] w-full flex-col mt-[25px]">
          <div className="form-check mb-[10px] w-full flex items-center">
            <input type="radio" className="border-[50%] float-left" name='property-filter' id="new" value='isNew' onClick={handlePropertyCheckboxChange} />
            <label htmlFor="new" className="capitalize pl-[5px]">
              Yeni
            </label>
          </div>
          <div className="form-check mb-[10px] w-full flex items-center">
            <input type="radio" className="border-[50%] float-left" name='property-filter' id="discount" value='discount' onClick={handlePropertyCheckboxChange} />
            <label htmlFor="discount" className="capitalize pl-[5px]">
              Endirimli
            </label>
          </div>
          <div className="form-check mb-[10px] w-full flex items-center">
            <input type="radio" className="border-[50%] float-left" name='property-filter' id="best-seller" value='bestSeller' onClick={handlePropertyCheckboxChange} />
            <label htmlFor="best-seller" className="capitalize pl-[5px]">
              Ən Çox Satılan
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
