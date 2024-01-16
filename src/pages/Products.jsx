import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LeftFilter from "../components/productFilter/LeftFilter";
import TopFilter from "../components/productFilter/TopFilter";
import ProductCart from "../components/ProductCart";
import { AllContext } from "../components/context/AllContextProvider";
import Pagination from "../components/Pagination";

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
      setFilterActive(true);
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
  const [recordsPerPage, setRecordsPerPage] = useState(6);

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
      <section className="bg-[#dfdfdf]">
        <div className="max-w-[1320px] w-full mx-auto pl-[10px] pr-[10px] flex items-center flex-col justify-center ">
          <div className="mt-[20px] text-[35px] capitalize  ">{productsTitle}</div>
          <div className="w-[100%] flex flex-wrap gap-[13px] mt-[60px]">
            {filterActive ? (
              <div className={`flex items-start flex-row justify-center mb-[40px] w-[33%]`}>
                <LeftFilter products={products} category={category} subCategoryFilterActive={subCategoryFilterActive} setProducts={setProducts} />
              </div>
            ) : null}
            <div className="flex items-start flex-col justify-center mb-[40px] lg:w-[66%] w-full flex-wrap">
              <div className="inner flex  items-center flex-col justify-center w-[100%]">
                <div className="product-row  flex flex-wrap justify-center w-full">
                  {filterActive ? (
                    <TopFilter changeProductsPerPage={changeProductsPerPage} setPriceSortValue={setPriceSortValue} />
                  ) : null}
                  <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-[10px] items-start  mb-[40px] w-[100%] justify-center ">
                    {
                      products.length > 0 ? (
                        <>
                          {currentRecord.map((product) => (
                            <div key={product.id}>
                              <ProductCart
                                products={products}
                                productName={product.name}
                                imageurl={product.img}
                                price={product.price}
                                isNew={product.isNew}
                                discount={product.discount}
                                bestSeller={product.bestSeller} />
                            </div>
                          ))}
                        </>
                      ) : (
                        <div className="container">
                          <h1 className="section-title">Məhsul Tapılmadı</h1>
                        </div>
                      )
                    }

                    {products.length > recordsPerPage && <Pagination totalProducts={products.length} recordsPerPage={recordsPerPage} currentPage={currentPage} onPageChange={handlePageChange} prev={handlePrevPage} next={handleNextPage}  />}
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
