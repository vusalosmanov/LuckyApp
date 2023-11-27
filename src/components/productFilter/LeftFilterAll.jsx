import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MainContext } from '../context/AllContextProvider';
import { useDispatch } from "react-redux";
import { productArray } from "../data/ProductData";
import { useLocation } from "react-router-dom";
import ManatIcon from "../../assets/image/icon/manat.svg"

const LeftFilterAll = ({ category, setProducts }) => {
  const { subcategoryArray } = useContext(MainContext);
  const [subcategories, setSubCategories] = useState([]);
  const [selectedSubCategoryID, setSelectedSubCategoryID] = useState([]);
  const [propertyFilter, setPropertyFilter] = useState('no-filter')


  const handlePropertyCheckboxChange = (e) => {
    if (e.target.checked) {
      setPropertyFilter(e.target.value)
    } else {
      setPropertyFilter('no-filter')
    }
  }
  console.log(propertyFilter);

  // Seçili kategoriye bağlı olarak alt kategorileri filtreleme
  useEffect(() => {
    if (category) {
      let filteredSubcategories = subcategoryArray.filter((sb) => sb.categoryID === category.id);
      setSubCategories([...filteredSubcategories]);
    }
  }, [category, subcategoryArray]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let combinedFilteredResults = productArray;
    // Filter by selected subcategories
    if (selectedSubCategoryID.length > 0) {
      combinedFilteredResults = combinedFilteredResults.filter(
        (product) => selectedSubCategoryID.includes(product.subcategoryID)
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
      if (propertyFilter === 'isNew') {
        combinedFilteredResults = combinedFilteredResults.filter((product) => product.isNew)
      } else if (propertyFilter === 'discount') {
        combinedFilteredResults = combinedFilteredResults.filter((product) => product.discount)
      } else if (propertyFilter === 'bestSeller') {
        combinedFilteredResults = combinedFilteredResults.filter((product) => product.bestSeller)
      }
    }

    // Set the filtered results to the state
    setProducts(combinedFilteredResults);
  };

  const filterBySubcategory = (e) => {
    let newId = parseInt(e.target.value)
    if (e.target.checked) {
      setSelectedSubCategoryID((prevIDs) => [
        ...prevIDs, newId,
      ])
    } else {
      setSelectedSubCategoryID((prevIDs) =>
        prevIDs.filter((item) => item !== newId)
      )
    }
  };
  const location = useLocation();

  //  Range filter
  let [rangeMin, setRangeMin] = useState(0)
  let [rangeMax, setRangeMax] = useState(2000)

  useEffect(() => {
    resetFilters();
  }, [location.pathname])

  const resetFilters = () => {
    setRangeMin(0);
    setRangeMax(2000)
  }

  return (
    <div className="flex justify-center flex-col w-full items-center bg-white">
      <button className="bg-[#fc8410] text-[18px] mb-[30px] p-[15px] w-[100%] cursor-pointer rounded-lg text-[#fff] hidden">
        <span>Filtrele</span>
      </button>
      <form
        action=""
        className="py-[35px] px-[30px] flex flex-col justify-center items-center w-full shadow-lg"
        onSubmit={handleSubmit}
      >
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
        <div className="w-full h-[1px] bg-gray-400"></div>
        {subcategories.length > 0 ? (
          <div className="subcategory-filter">
            <h4 className="flex items-start w-[100%] mb-[55px] relative  capitalize text-[1.5rem] mt-[10px]">Alt Kategoriya</h4>
            {subcategories.map(subcategory => (
              <div key={subcategory.id} className="form-check">
                <input
                  type="checkbox"
                  className='form-check-input'
                  id={subcategory.id}
                  value={subcategory.id}
                  onChange={filterBySubcategory}
                />
                <label className='form-check-label' htmlFor={subcategory.id}>{subcategory.name}</label>
              </div>
            ))}
          </div>
        ) : null}
        <div className="propert-filter flex items-center justify-start mb-[30px] w-full flex-col mt-[25px]">
          <div className="form-check mb-[10px] w-full flex items-center">
            <input type="radio" className="border-[50%] float-left" name='property-filter'  id="new" value='isNew' onClick={handlePropertyCheckboxChange} />
            <label htmlFor="new" className="capitalize pl-[5px]">
              Yeni
            </label>
          </div>
          <div className="form-check mb-[10px] w-full flex items-center">
            <input type="radio" className="border-[50%] float-left" name='property-filter'  id="discount" value='discount' onClick={handlePropertyCheckboxChange} />
            <label htmlFor="discount" className="capitalize pl-[5px]">
              Endirimli
            </label>
          </div>
          <div className="form-check mb-[10px] w-full flex items-center">
            <input type="radio" className="border-[50%] float-left" name='property-filter'  id="best-seller" value='bestSeller' onClick={handlePropertyCheckboxChange} />
            <label htmlFor="best-seller" className="capitalize pl-[5px]">
              Ən Çox Satılan
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#fc8410] cursor-pointer rounded-lg text-[#fff] text-[18px] font-bold min-w-[150px] py-[15px] px-[25px] w-full"
        >
          Filterlə
        </button>
      </form>
    </div>
  );
};

export default LeftFilterAll;
