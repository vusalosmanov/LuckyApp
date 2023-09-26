import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "./context/MainContextProvider";
import SubCategoryItem from "./SubCategoryItem";
const CategoryCartOrange = () => {
  
  const { orangeSectionData } = useContext(MainContext);
  return (
    <>
      {orangeSectionData.length > 0 ? (
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] flex items-center flex-wrap gap-y-10 gap-x-5 justify-center ">
          {orangeSectionData.map((item) => (
            <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center  justify-center w-full">
              <div key={item.id}>
                <SubCategoryItem
                  categoryID={item.categoryID}
                  subcategoryID={item.subcategoryID}
                  cover={item.cover}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default CategoryCartOrange;
