import React, { useState } from "react";
import ManatIcon from "../../assets/image/icon/manat.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { subcategoryArray } from "../data/SubcategoryData";

const LeftFilter = ({ products, category, subCategoryFilterActive, setProducts }) => {

  const [subcategories, setSubCategorie] = useState([])
  const [copyPoducts, setCopyProducts] = useState(products)


  useEffect(() => {
    if (category) {
      let filteredSubcategories = subcategoryArray.filter((sb) => sb.categoryID === category.id)
      setSubCategorie([...filteredSubcategories])
    }
  }, [category, subcategoryArray])

  const [filterActive, setFilterActive] = useState(false)
  const toggleFilter = () => {
    setFilterActive(!filterActive)
  }


  //range filter
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(2000);


  const [selectedSubcategoryIDs, setSelectedSubcategoryIDs] = useState([])
  const [propertyFilter, setPropertyFilter] = useState('no-filter')

  const handleSubCategoryCheckboxChange = (e) => {
    let subCategoryID = e.target.value;
    subCategoryID = parseInt(subCategoryID);
    if (e.target.checked) {
      setSelectedSubcategoryIDs((prevSelectedSubcategoryIDs) => [
        ...prevSelectedSubcategoryIDs,
        subCategoryID
      ])
    } else {
      setSelectedSubcategoryIDs((prevSelectedSubcategoryIDs) =>
        prevSelectedSubcategoryIDs.filter((name) => name !== subCategoryID)
      );
    }
  }

  const handlePropertyCheckboxChange = (e) => {
    if (e.target.checked) {
      setPropertyFilter(e.target.value)
    } else {
      setPropertyFilter('no-filter')
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let combinedFilteredResults = copyPoducts;
    // Filter by selected subcategories
    if (selectedSubcategoryIDs.length > 0) {
      combinedFilteredResults = combinedFilteredResults.filter(
        (product) => selectedSubcategoryIDs.includes(product.subcategoryID)
      );
    }
    // Add filtering by selected category
    if (category) {
      combinedFilteredResults = combinedFilteredResults.filter(
        (product) => product.categoryID === category.id
      );
    }
    // Filter by price range
    combinedFilteredResults = combinedFilteredResults.filter((product) =>
      Number(rangeMin) <= product.price && product.price <= Number(rangeMax)
    );
    if (propertyFilter !== 'no-filter') {
      if (propertyFilter === 'filter-new') {
        combinedFilteredResults = combinedFilteredResults.filter((product) => product.isNew)
      } else if (propertyFilter === 'filter-discounts') {
        combinedFilteredResults = combinedFilteredResults.filter((product) => product.discount)
      } else if (propertyFilter === 'filter-best-seller') {
        combinedFilteredResults = combinedFilteredResults.filter((product) => product.bestSeller)
      }
    }
    // Set the filtered results to the state
    setProducts(combinedFilteredResults);

    console.log(copyPoducts);
  };


  const location = useLocation();

  useEffect(() => {
    resetFilters();
  }, [location.pathname]);

  const resetFilters = () => {
    setRangeMin(0);
    setRangeMax(2000);
    setSelectedSubcategoryIDs([]);
    setPropertyFilter('no-filter');
  };




  return (
    <>
      <div className="flex justify-center flex-col w-[100%] items-center bg-white">
        <button className="bg-[#fc8410] text-[18px] mb-[30px] p-[15px] w-[100%] cursor-pointer rounded-lg text-[#fff] hidden" onClick={toggleFilter}>
          <span>Filterle</span>
        </button>
        <form className="py-[35px] px-[30px] flex flex-col justify-center items-center w-[100%] shadow-lg" onSubmit={handleSubmit}
        >
          <div className="w-[100%] h-[1px] bg-gray-400 "></div>
          <div className="price-filter mb-[50px] w-full">
            <h4 className="text-start w-full relative capitalize text-[black] text-[1.5rem]">
              Qitmət Filteri
            </h4>
            <div className="w-[40px] h-[5px] bg-green-700 mt-[10px] rounded-lg"></div>
            <div className="range-filter mt-[20px]  ">
              <div className="range-inputs">
                <input type="range" value={rangeMin} onChange={(e) => { setRangeMin(e.target.value) }} onBlur={(e) => { setRangeMin(e.target.value) }} min={0} max={2000} step={1} />
                <input type="range" value={rangeMax} onChange={(e) => { setRangeMax(e.target.value) }} onBlur={(e) => { setRangeMax(e.target.value) }} min={0} max={2000} step={1} />
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
          {
            subCategoryFilterActive && subcategories.length > 0 ? (
              <div className="subcategory-filter">
                {
                  subcategories.map(subcategory => (
                    <div key={subcategory.id} className="form-check">
                      <input type="checkbox" className='form-check-input' id={subcategory.id} value={subcategory.id} onChange={handleSubCategoryCheckboxChange} />
                      <label className='form-check-label' htmlFor={subcategory.id}>{subcategory.name}</label>
                    </div>
                  ))
                }
              </div>
            ) : null
          }
          <div className="propert-filter flex items-center justify-start mb-[30px] w-full flex-col mt-[25px]">
            <div className="form-check mb-[10px] w-full flex items-center">
              <input type="radio" className="border-[50%] float-left" name='property-filter' id="new" value='filter-new' onClick={handlePropertyCheckboxChange} />
              <label htmlFor="new" className="capitalize pl-[5px]">
                Yeni
              </label>
            </div>
            <div className="form-check mb-[10px] w-full flex items-center">
              <input type="radio" className="border-[50%] float-left" name='property-filter' id="discounts" value='filter-discounts' onClick={handlePropertyCheckboxChange} />
              <label htmlFor="discounts" className="capitalize pl-[5px]">
                Endirimli
              </label>
            </div>
            <div className="form-check mb-[10px] w-full flex items-center">
              <input type="radio" className="border-[50%] float-left" name='property-filter' id="best-seller" value='filter-best-seller' onClick={handlePropertyCheckboxChange} />
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
    </>
  );
};

export default LeftFilter;
