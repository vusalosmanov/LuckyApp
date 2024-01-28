import React from "react";
import { useContext } from "react";
import { AllContext } from "../../components/context/AllContextProvider";
import SubCategoryItem from "./SubCategoryItem";

const CategoryCartOrange = () => {

  const { orangeSectionData } = useContext(AllContext);
  return (
    <>
      {orangeSectionData.length > 0 ? (
        <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] flex items-center flex-wrap gap-y-10 gap-x-5 justify-center ">
          {orangeSectionData.map((item) => (
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
};

export default CategoryCartOrange;
