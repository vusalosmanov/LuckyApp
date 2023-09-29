import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/AllContextProvider";
import "../../assets/styles/components/category/subcategory.scss"

function SubCategoryItem({ categoryID, subcategoryID, cover }) {

  const { categoryArray, subcategoryArray } = useContext(MainContext);

  const category = categoryID && categoryArray.find((item) => item.id === categoryID);

  const subcategory = subcategoryID && subcategoryArray.find((item) => item.id === subcategoryID);

  return (
    <>
      <div className="subcategory-item">
        <Link
          to={`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subcategory?.name)}`}>
            <img src={cover} alt="category-cover" className=" h-[100%] object-contain max-w-[400px] " />
          <div className="hover">
            <span className="text-[black] capitalize absolute top-[15px] left-[15px] font-[600]">{subcategory?.name}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SubCategoryItem;
