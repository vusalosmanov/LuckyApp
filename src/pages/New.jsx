import React, { useContext } from "react";
import ProductCart from "../components/ProductCart";
import { productArray } from "../components/data/ProductData";
const New = () => {

  //Pagination
  const newProducts = productArray.filter((item) => item.isNew === true);

  return (
    <>
      <section className="bg-[#f8f8f8]">
        <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] flex items-center justify-center mt-[20px]  flex-col">
          <h1 className=" text-[2.5rem]">Yeni Məhsullar</h1>
          <div className="w-[40px] mt-[10px] h-[5px] rounded-lg bg-[#106853] "></div>
        </div>
        <div className="mt-[60px]">
          {newProducts.length > 0 ? (
            <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] flex items-center flex-wrap gap-y-10 gap-x-5 justify-center ">
              {newProducts.map((product) => (
                <div
                  className="flex bg-[#fff] max-w-[300px]  relative  items-center  justify-center w-full"
                  key={product.id}
                >
                  <div>
                    <ProductCart
                      id={product.id}
                      productName={product.name}
                      price={product.price}
                      imageurl={product.img}
                      key={product.id}
                      isNew={product.isNew}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default New;
