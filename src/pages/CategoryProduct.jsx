import React from "react";
import "../assets/styles/pages/Category.scss"
const CategoryProduct = () => {
    
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
  let priceGap = 1000;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
  return (
    <div className="w-[1320px] mx-auto pl-[10px] pr-[10px] flex items-center flex-col justify-center">
      <h1 className="mb-[55px] text-center relative capitalize text-[2.5rem]">
        Kaqiz
      </h1>
      <div className="w-[100%] flex flex-wrap">
        <div className="flex items-start  flex-row justify-center mb-[40px] w-[33%]">
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
              <div className="price-input">
                <div class="field">
                  <span>Min</span>
                  <input type="number" class="input-min" value="2500" />
                </div>
                <div class="separator">-</div>
                <div class="field">
                  <span>Max</span>
                  <input type="number" class="input-max" value="7500" />
                </div>
              </div>
              <div className="slider">
                <div class="progress"></div>
              </div>
              <div class="range-input">
                <input
                  type="range"
                  class="range-min"
                  min="0"
                  max="10000"
                  value="2500"
                  step="100"
                />
                <input
                  type="range"
                  class="range-max"
                  min="0"
                  max="10000"
                  value="7500"
                  step="100"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-start flex-row justify-center mb-[40px] w-[66%] "></div>
      </div>
    </div>
  );
};

export default CategoryProduct;
