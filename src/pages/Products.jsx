import React, { useEffect, useState, } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { categoryArray } from "../components/data/CategoryData";
import { productArray } from "../components/data/ProductData";
import { subcategoryArray } from "../components/data/SubcategoryData";
import LeftFilter from "../components/productFilter/LeftFilter";
import TopFilter from "../components/productFilter/TopFilter";
import ProductCart from "../components/ProductCart";
import Pagination from "../components/Pagination";
import LeftFilterAll from "../components/productFilter/LeftFilterAll";

function Products() {
  const { categoryName, subcategoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState()
  // const [subCategoryFilterActive, setSubCategoryFilterActive] = useState(false)

  // const subCategory = subcategoryName && subcategoryArray.find((subcategory) => subcategory.name === subcategoryName);

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
  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(products.length / recordsPerPage);

  console.log(currentRecords);

  return (
    <>
      <section className="bg-[#dfdfdf]">
        <div className="max-w-[1320px] w-full mx-auto pl-[10px] pr-[10px] flex items-center flex-col justify-center ">
          <div className="mt-[20px] text-[35px] capitalize  ">{subcategoryName}</div>
          <div className="w-[100%] flex flex-wrap gap-[13px] mt-[60px]">
            <div
              className={`flex items-start flex-row justify-center mb-[40px] w-[33%] ${categoryName && !subcategoryName ? "hidden" : "block"}`}
            >
              <LeftFilter products={products}  setProducts={setProducts}/>
            </div>
            <div
              className={`flex items-start flex-row justify-center mb-[40px] w-[33%] ${categoryName && !subcategoryName ? "block" : "hidden"}`}
            >
              <LeftFilterAll category={category} products={products} setProducts={setProducts}  />
            </div>
            <div className="flex items-start flex-col justify-center mb-[40px] w-[66%]">
              <div className="inner flex  items-center flex-col justify-center w-[100%]">
                <div className="product-row w-[100%] flex flex-wrap">
                  <TopFilter products={products} setProducts={setProducts} changeProductsPerPage={changeProductsPerPage} />
                  <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-[10px] items-start  mb-[40px] w-[100%] ">
                    {currentRecords.map((product) => (
                      <ProductCart
                        id={product.id}
                        productName={product.name}
                        price={product.price}
                        imageurl={product.img}
                        key={product.id}
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
