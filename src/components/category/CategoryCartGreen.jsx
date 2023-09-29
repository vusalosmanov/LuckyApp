import React, { useContext } from "react";
import SubCategoryItem from "./SubCategoryItem";
import { MainContext } from "../../components/context/AllContextProvider";

function SubCategoryGreen() {
  const { greenSectionData } = useContext(MainContext);
  return (
    <>
      {greenSectionData.length > 0 ? (
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] flex items-center flex-wrap gap-y-10 gap-x-5 justify-center">
          {greenSectionData.map((item) => (
            <div className="flex bg-[#fff] max-w-[400px] pr-[15px] relative pl-[15px] items-center justify-center w-full">
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
}

export default SubCategoryGreen;