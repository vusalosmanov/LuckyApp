import React, { useEffect, useState, } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { categoryArray } from "../components/data/CategoryData";
import { productArray } from "../components/data/ProductData";
import { subcategoryArray } from "../components/data/SubcategoryData";
import LeftFilter from "../components/productFilter/LeftFilter";
import TopFilter from "../components/productFilter/TopFilter";
import ProductCart from "../components/ProductCart";
import Pagination from "../components/Pagination";
import LeftFilterAll from "../components/productFilter/LeftFilterAll";
import Detailes from "./Detailes";

function Products() {
  const { categoryName, subcategoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState()


  useEffect(() => {
    if (categoryName && !subcategoryName) {
      let category = categoryArray.find((category) => category.name === categoryName);
      if (category) {
        let filteredProducts = productArray.filter((product) => product.categoryID === category.id);
        setProducts([...filteredProducts]);
      }
      setCategory(category)
    }
    else if (categoryName && subcategoryName) {
      let category = categoryArray.find((category) => category.name === categoryName);
      let subcategory = subcategoryArray.find((subcategory) => subcategory.name === subcategoryName);
      if (category && subcategory) {
        let filteredProducts = productArray.filter((product) => product.subcategoryID === subcategory.id);
        setProducts([...filteredProducts]);
      }
    }
  }, [categoryName, subcategoryName]);


  const location = useLocation()
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [leftFilterParams, setLeftFilterParams] = useState([])
  const [productsTitle, setProductsTitle] = useState('');
  const [filterActive, setFilterActive] = useState(false);

  useEffect(() => {
    setLeftFilterParams([]);
  }, [location.pathname])


  useEffect(() => {
    let updatedFilteredProducts = [];
    const allProducts = productArray.slice();
    if (location.pathname === '/products/' || location.pathname === '/products') {
      setFilterActive(false);
      setProductsTitle('Mehsullar');
      updatedFilteredProducts = [...allProducts];
    } else if (location.pathname === '/products/new') {
      setFilterActive(false);
      setProductsTitle('new product');
      updatedFilteredProducts = allProducts.filter((product) => product.isNew);
    }
    setFilteredProducts(updatedFilteredProducts);
  }, [location]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(12);

  const changeProductsPerPage = (value) => {
    setRecordsPerPage(value)
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filterProducts.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(filterProducts.length / recordsPerPage);

  return (
    <>
      <section className="bg-[#dfdfdf]">
        <div className="max-w-[1320px] w-full mx-auto pl-[10px] pr-[10px] flex items-center flex-col justify-center ">
          <div className="mt-[20px] text-[35px] capitalize  ">{subcategoryName}</div>
          <div className="w-[100%] flex flex-wrap gap-[13px] mt-[60px]">
            <div
              className={`flex items-start flex-row justify-center mb-[40px] w-[33%] ${categoryName && !subcategoryName ? "hidden" : "block"}`}
            >
              <LeftFilter products={products} setFilterProducts={setFilterProducts} />
            </div>
            <div
              className={`flex items-start flex-row justify-center mb-[40px] lg:w-[33%] w-full ${categoryName && !subcategoryName ? "block" : "hidden"}`}
            >
              <LeftFilterAll category={category} products={products} setProducts={setProducts} />
            </div>
            <div className="flex items-start flex-col justify-center mb-[40px] lg:w-[66%] w-full flex-wrap">
              <div className="inner flex  items-center flex-col justify-center w-[100%]">
                <div className="product-row  flex flex-wrap justify-center w-full">
                  <TopFilter products={products} setProducts={setProducts} changeProductsPerPage={changeProductsPerPage} />
                  <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-[10px] items-start  mb-[40px] w-[100%] justify-center ">
                    {currentRecords.map((product) => (
                      <ProductCart
                        product={product}
                        id={product.id}
                        productName={product.name}
                        price={product.price}
                        imageurl={product.img}
                        key={product.id}
                        discount={product.discount}
                        isNew={product.isNew}
                        bestSeller={product.bestSeller}
                        oldPrice={product.oldPrice}
                      />
                    ))}
                    <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
