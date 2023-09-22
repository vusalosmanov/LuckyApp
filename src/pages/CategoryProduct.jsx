import React from "react";
import CategoryInput from "../components/CategoryInput";
const CategoryProduct = () => {

  return (    
    <section className="bg-[#f8f8f8]">
      <div className="w-[1320px] mx-auto pl-[10px] pr-[10px] flex items-center flex-col justify-center">
        <h1 className="mb-[55px] text-center relative capitalize text-[2.5rem]">
          Kagiz 
        </h1>
        <div className="w-[100%] flex flex-wrap gap-[13px]">
          <div className="flex items-start  flex-row justify-center mb-[40px] w-[33%] bg-white">
            <div className="flex  justify-center flex-col w-[100%] items-center">
              <button className="bg-[#fc8410] text-[18px] mb-[30px] p-[15px] w-[100%] cursor-pointer rounded-lg text-[#fff] hidden">
                <span>Filterle</span>
              </button>
              <form
                action=""
                className="py-[35px] px-[30px] flex flex-col justify-center items-center w-[100%] shadow-lg"
              >
                <div
                  class="price-filter"
                  className="mb-[40px] pb-[20px] w-[100%]"
                >
                  <h4 className=" text-start w-[100%] mb-[55px] relative capitalize text-[#fff]">
                    Qiymet Filteri
                  </h4>
                </div>
                <CategoryInput/>
                <div className="propert-filter flex  items-center justify-start mb-[30px] w-[100%] flex-col mt-[30px] ">
                  <div className="form-chek mb-[10px] w-[100%] flex items-center">
                    <input type="radio" className="border-[50%] float-left " />
                    <label htmlFor="" className=" capitalize pl-[5px]">
                      Yeni
                    </label>
                  </div>
                  <div className="form-chek mb-[10px] w-[100%] flex items-center">
                    <input type="radio" className="border-[50%] float-left " />
                    <label htmlFor="" className="captalize pl-[5px]">
                      Edirimli{" "}
                    </label>
                  </div>
                  <div className="form-chek mb-[10px] w-[100%] flex items-center">
                    <input type="radio" className="rounder-[50%] float-left " />
                    <label htmlFor="" className="captalize pl-[5px]">
                      En cox Satilan
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#fc8410] cursor-pointer rounded-lg text-[#fff] text-[18px] font-bold min-w-[150px] py-[15px] px-[25px] w-[100%] "
                >
                  Filterle
                </button>
              </form>
            </div>
          </div>
          <div className="flex items-start flex-col justify-center mb-[40px] w-[66%]">
            <div className="inner flex  items-center flex-col justify-center w-[100%]">
              <div className="product-row w-[100%] flex flex-wrap">
                <div className="flex  items-start flex-row  justify-center mb-[40px] w-[100%] ">
                  <div className="product-top-filter  flex flex-row justify-between py-[25px] px-[15px] items-center mb-[30px] w-[100%] bg-[white]">
                    <div className="filter-item flex  items-center w-[100%] justify-start">
                      <span className="mr-[10px]">Saya Gore</span>
                      <select className=" rounded-lg border-[#106853] border-[1px] max-w-[200px] py-[5px] px-[10px] w-[100%] ">
                        <option value="12" select>
                          12
                        </option>
                        <option value="18">18</option>
                        <option value="24">24</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                    <div className="filter-item flex  items-center w-[100%] justify-end">
                      <span className="mr-[10px]">Qiymete Gore</span>
                      <select className=" rounded-lg border-[#106853] border-[1px] max-w-[200px] py-[5px] px-[10px] w-[100%] ">
                        <option value="choose" disabled selected>
                          Sec
                        </option>
                        <option value="cheapToExp">Ucuzadan Bahaya</option>
                        <option value="expToCheap">Bahadan Ucuza</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row  justify-evenly items-start  mb-[40px] w-[100%] ">
                  {/* {filteredProducts.map((product) => (
                    // .filter((item) => item.subcategoryID === 12)
                      <ProductCart
                        id={product.id}
                        productName={product.name}
                        price={product.price}
                        imageurl={product.img}
                        key={product.id}
                      />
                    ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProduct;
