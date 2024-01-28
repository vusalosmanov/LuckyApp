import React, { useContext } from "react";
import SubCategoryItem from "./SubCategoryItem";
import { AllContext } from "../../components/context/AllContextProvider";

function SubCategoryGreen() {
  const { greenSectionData } = useContext(AllContext);
  return (
    <>
      {greenSectionData.length > 0 ? (
        <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] flex items-center flex-wrap gap-y-10 gap-x-5 justify-center">
          {greenSectionData.map((item) => (
            <div key={item.id} className="flex bg-[#fff] max-w-[400px]  relative  items-center justify-center w-full">
                <SubCategoryItem
                  categoryID={item.categoryID}
                  subcategoryID={item.subcategoryID}
                  cover={item.cover}
                />
            </div>
          ))}

        </div>
      ) : null}
    </>
  );
}

export default SubCategoryGreen;
