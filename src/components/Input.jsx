import React, { useState, useContext, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { MainContext } from "./context/AllContextProvider";
const Input = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { categoryArray, subcategoryArray, productArray, searchValues } =
  //   useContext(MainContext);
  // const { searchInputValue, setSearchInputValue } = useState("");

  // useEffect(() => {
  //   setSearchInputValue("");
  // }, [Location]);

  // const handleSearchFormSubmit = (e) => {
  //   e.preventDefualt();

  //   const category = categoryArray.find((category) =>
  //     category.name
  //       .trim()
  //       .toLocaleLowerCase()
  //       .includes(searchInputValue.trim().toLocaleLowerCase())
  //   );
  //   const subcategory = subcategoryArray.find((subcategory) =>
  //     subcategory.name
  //       .trim()
  //       .toLocaleLowerCase()
  //       .includes(searchInputValue.trim().toLocaleLowerCase())
  //   );
  //   const product = productArray.find((product) =>
  //     product.name
  //       .trim()
  //       .toLocaleLowerCase()
  //       .includes(searchInputValue.trim().toLocaleLowerCase())
  //   );
  //   const searchResult = searchValues.find((result) =>
  //     result.name
  //       .trim()
  //       .toLocaleLowerCase()
  //       .includes(searchInputValue.trim().toLocaleLowerCase())
  //   );

  //   if (searchResult) {
  //     navigate(searchResult.path);
  //   } else if (category) {
  //     navigate(`/products/${encodeURIComponent(category?.name)}`);
  //   } else if (subcategory) {
  //     const category = categoryArray.find(
  //       (category) => category.id === subcategory.categoryID
  //     );
  //     navigate(
  //       `/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(
  //         subcategory?.name
  //       )}`
  //     );
  //   } else if (product) {
  //     const category = categoryArray.find(
  //       (category) => category.id === product.categoryID
  //     );
  //     const subcategory = subcategoryArray.find(
  //       (subcategory) => subcategory.id === product.subcategoryID
  //     );
  //     navigate(
  //       `/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(
  //         subcategory?.name
  //       )}/${encodeURIComponent(product?.name)}`
  //     );
  //   } else {
  //     navigate("/404");
  //   }
  // };

  return (
    <>
      <form
        action=""
        className="w-[650px] relative"
        // onSubmit={handleSearchFormSubmit}
      >
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex  items-center pr-[5px] pointer-events-none ">
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-[white] "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div>
            <input
              className="bg-transparent border-[2px] border-white rounded-[5px] caret-white text-white text-18 min-h-55 outline-none px-5  w-full h-[55px] placeholder:text-[white] "
              type="text"
              name="search"
              placeholder="Axtar"
              // value={searchInputValue}
              // onChange={(e) => setSearchInputValue(e.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Input;
