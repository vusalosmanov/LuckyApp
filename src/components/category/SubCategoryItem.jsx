import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../context/AllContextProvider";

function SubCategoryItem({ categoryID, subcategoryID, cover }) {

  const { categoryArray, subcategoryArray } = useContext(AllContext);

  const category = categoryID && categoryArray.find((item) => item.id === categoryID);

  const subcategory = subcategoryID && subcategoryArray.find((item) => item.id === subcategoryID);

  return (
    <>
      <div className="subcategory-item">
        <Link
          to={`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subcategory?.name)}`}>
            <img src={cover} alt="category-cover" />
          <div className="hover">
            <span className="name capitalize font-[600] ">{subcategory?.name}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SubCategoryItem;
