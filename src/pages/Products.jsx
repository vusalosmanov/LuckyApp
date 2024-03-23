import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LeftFilter from "../components/productFilter/LeftFilter";
import TopFilter from "../components/productFilter/TopFilter";
import ProductCart from "../components/product/ProductCart";
import { AllContext } from "../components/context/AllContextProvider";
import Pagination from "../components/pagination/Pagination";
import Layout from "./Layout";

function Products() {

  const { categoryArray, subcategoryArray, productArray } = useContext(AllContext)

  const { categoryName, subCategoryName } = useParams();


  const category = categoryName && categoryArray.find((category) => category.name === categoryName);

  const subCategory = subCategoryName && subcategoryArray.find((subcategory) => subcategory.name === subCategoryName);


  const location = useLocation();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [productsTitle, setProductsTitle] = useState('');

  const [filterActive, setFilterActive] = useState(false);
  const [subCategoryFilterActive, setSubCategoryFilterActive] = useState(false);

  const [priceSortValue, setPriceSortValue] = useState('cheapToExp');

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
    } else if (location.pathname === '/products/discounts') {
      setFilterActive(false);
      setProductsTitle('Endirimli Məhsullar');
      updatedFilteredProducts = allProducts.filter((product) => product.discount);
    } else if (location.pathname === '/products/best-sellers') {
      setFilterActive(false);
      setProductsTitle('Ən Çox Satılan Məhsullar');
      updatedFilteredProducts = allProducts.filter((product) => product.bestSeller);
    }
    else if (!subCategory && category) {
      setFilterActive(true);
      setProductsTitle(category?.name);
      setSubCategoryFilterActive(true);
      updatedFilteredProducts = allProducts.filter((product) => product.categoryID === category.id);
    }
    else if (subCategory) {
      setFilterActive(true);
      setProductsTitle(subCategory?.name);
      setSubCategoryFilterActive(false);
      updatedFilteredProducts = allProducts.filter((product) => product.subcategoryID === subCategory.id);

    }
    else {
      navigate('/404');
    }

    if (priceSortValue === 'cheapToExp') {
      updatedFilteredProducts.sort((a, b) => a.price - b.price);
    } else {
      updatedFilteredProducts.sort((a, b) => b.price - a.price);
    }

    setProducts([...updatedFilteredProducts]);
  }, [location, productArray, category, subCategory, priceSortValue, navigate]);


  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(12);

  const changeProductsPerPage = (value) => {
    setRecordsPerPage(value);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecord = products.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    let lastPage = Math.ceil(products.length / recordsPerPage);
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [location.pathname, recordsPerPage]);

  return (
    <>
      <Layout>
        <section className="bg-[#dfdfdf]">
          <div className="max-w-[1320px] w-full mx-auto pl-[10px] pr-[10px] flex items-center flex-col justify-center  ">
            <h1 className="mt-[20px] text-[35px] capitalize text-center  ">{productsTitle}</h1>
            <div className="w-[100%] flex mt-[40px] relative justify-center max-w-[1320px] lg:flex-row flex-col">
              {filterActive ? (
                <div className={`flex items-start flex-row justify-center mb-[40px] lg:max-w-[421px] w-full lg:px-[10px] md:px-[40px]`}>
                  <LeftFilter products={products} category={category} subCategoryFilterActive={subCategoryFilterActive} setProducts={setProducts} />
                </div>
              ) : null}
              <div className="flex items-start flex-col  mb-[40px] lg:px-[10px]  md:px-[40px] ">
                <div className="inner flex  items-center flex-col  w-[100%] justify-center ">
                  <div className="product-row ">
                    {filterActive ? (
                      <div className="lg:w-[859px]">
                        <TopFilter changeProductsPerPage={changeProductsPerPage} setPriceSortValue={setPriceSortValue} />
                      </div>
                    ) : null}
                    {
                      products.length > 0 ? (
                        <>
                          <div className="flex flex-wrap  lg:gap-y-[5px] lg:gap-x-[3px] md:gap-y-[20px]   md:justify-evenly w-full lg:max-w-[875px]  lg:justify-start justify-center  mb-[40px]  ">
                            {currentRecord.map((product) => (
                              <ProductCart
                                productName={product.name}
                              />

                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="flex  flex-col  justify-center items-center ">
                          <h1 className="mb-[55px]  capitalize  text-center text-[2.5rem]">Məhsul Tapılmadı</h1>
                        </div>
                      )
                    }
                    <div className="w-full flex justify-center">
                      {products.length > recordsPerPage && <Pagination totalProducts={products.length} recordsPerPage={recordsPerPage} currentPage={currentPage} onPageChange={handlePageChange} prev={handlePrevPage} next={handleNextPage} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout >
    </>
  );
}

export default Products;
