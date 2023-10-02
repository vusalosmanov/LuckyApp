import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoryArray } from "../components/data/CategoryData";
import { productArray } from "../components/data/ProductData";
import { subcategoryArray } from "../components/data/SubcategoryData";
import LeftFilter from "../components/productFilter/LeftFilter";
import TopFilter from "../components/productFilter/TopFilter";
import ProductCart from "../components/ProductCart";
import LeftFilterAll from "../components/productFilter/LeftFilterAll";

function Products() {
  const { categoryName } = useParams();
  const { subcategoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryName && !subcategoryName) {
      let category = categoryArray.find(
        (category) => category.name === categoryName
      );
      //   console.log(category);
      if (category) {
        let filteredProducts = productArray.filter(
          (product) => product.categoryID === category.id
        );
        setProducts([...filteredProducts]);
      }
    } 
    else if (categoryName && subcategoryName) {
      let category = categoryArray.find(
        (category) => category.name === categoryName
      );
      let subcategory = subcategoryArray.find(
        (subcategory) => subcategory.name === subcategoryName
      );
      if (category && subcategory) {
        let filteredProducts = productArray.filter(
          (product) => product.subcategoryID === subcategory.id
        );
        setProducts([...filteredProducts]);
      }
    }
    console.log(products);
  }, [categoryName, subcategoryName, categoryArray, productArray]);
  return (
    <>
      <section className="bg-[#dfdfdf]">
        <div className="w-[1320px] mx-auto pl-[10px] pr-[10px] flex items-center flex-col justify-center ">
          <div className="mt-[20px] text-[35px] capitalize  ">
            {subcategoryName}
          </div>
          <div className="w-[100%] flex flex-wrap gap-[13px] mt-[60px]">
            <div
              className={` flex items-start flex-row justify-center mb-[40px] w-[33%] ${
                categoryName && !subcategoryName ? "hidden" : "block"
              }`}
            >
              <LeftFilter />
            </div>
            <div
              className={` flex items-start flex-row justify-center mb-[40px] w-[33%] ${
                categoryName && !subcategoryName ? "block" : "hidden"
              }`}
            >
              <LeftFilterAll />
            </div>
            <div className="flex items-start flex-col justify-center mb-[40px] w-[66%]">
              <div className="inner flex  items-center flex-col justify-center w-[100%]">
                <div className="product-row w-[100%] flex flex-wrap">
                  <TopFilter />
                  <div className="flex flex-row flex-wrap   gap-x-[30px] gap-y-[10px] items-start  mb-[40px] w-[100%] ">
                    {products.map((product) => (
                      <ProductCart
                        id={product.id}
                        productName={product.name}
                        price={product.price}
                        imageurl={product.img}
                        key={product.id}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
