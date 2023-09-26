import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../src/components/context/MainContextProvider";

function SubCategoryItem({ categoryID, subcategoryID, cover }) {

  const { categoryArray, subcategoryArray } = useContext(MainContext);

  const category = categoryID && categoryArray.find((item) => item.id === categoryID);

  const subcategory = subcategoryID && subcategoryArray.find((item) => item.id === subcategoryID);

  return (
    <>
      <div className="flex bg-[#fff] max-w-[400px]  pr-[15px] relative pl-[15px] items-center flex-col justify-center w-full">
        <Link
          to={`/categoryproduct/${encodeURIComponent(category?.name)}/${encodeURIComponent(subcategory?.name)}`}>
          <div className="h-[300px]  max-w-[400px] w-full  flex items-center">
            <h2 className="absolute top-2">{subcategory?.name}</h2>
            <img src={cover} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default SubCategoryItem;
