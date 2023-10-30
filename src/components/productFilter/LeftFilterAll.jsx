import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CategoryInput from "../CategoryInput";
import { MainContext } from '../context/AllContextProvider'
const LeftFilterAll = ({ category }) => {
  const { subcategoryArray } = useContext(MainContext);
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (category) {
      let filteredSubcategories = subcategoryArray.filter((sb) => sb.categoryID === category.id);
      setSubCategories([...filteredSubcategories]);
    }
  }, [category, subcategoryArray])
  return (
    <>
      <div className="flex justify-center flex-col w-full items-center bg-white">
        <button className="bg-[#fc8410] text-[18px] mb-[30px] p-[15px] w-[100%] cursor-pointer rounded-lg text-[#fff] hidden">
          <span>Filterle</span>
        </button>
        <form
          action=""
          className="py-[35px] px-[30px] flex flex-col justify-center items-center w-full shadow-lg"
        >
          <div className="price-filter mb-[50px] w-full">
            <h4 className="text-start w-full relative capitalize text-[black] text-[1.5rem]">
              Qiymet Filteri
            </h4>
            <div className="w-[40px] h-[5px] bg-green-700 mt-[10px] rounded-lg"></div>
          </div>
          <CategoryInput />

          <div className="w-full h-[1px] bg-gray-400"></div>
          {subcategories.length > 0 ? (
            <div className="subcategory-filter">
              <h4 className="section-title">Alt kategoriya</h4>
              {
                subcategories.map(subcategory => (
                  <div key={subcategory.id} className="form-check">
                    <input type="checkbox" className='form-check-input' id={subcategory.id} value={subcategory.id} />
                    <label className='form-check-label' htmlFor={subcategory.id}>{subcategory.name}</label>
                  </div>
                ))
              }
            </div>
          ) : null
          }
          <div className="propert-filter flex items-center justify-start mb-[30px] w-full flex-col mt-[25px]">
            <div className="form-check mb-[10px] w-full flex items-center">
              <input type="radio" className="border-[50%] float-left" />
              <label htmlFor="" className="capitalize pl-[5px]">
                Yeni
              </label>
            </div>
            <div className="form-check mb-[10px] w-full flex items-center">
              <input type="radio" className="border-[50%] float-left" />
              <label htmlFor="" className="capitalize pl-[5px]">
                Endirimli
              </label>
            </div>
            <div className="form-check mb-[10px] w-full flex items-center">
              <input type="radio" className="border-[50%] float-left" />
              <label htmlFor="" className="capitalize pl-[5px]">
                En cox Satilan
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#fc8410] cursor-pointer rounded-lg text-[#fff] text-[18px] font-bold min-w-[150px] py-[15px] px-[25px] w-full"
          >
            Filterle
          </button>
        </form>
      </div>
    </>
  );
};

export default LeftFilterAll;
