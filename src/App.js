import { Navigate, Route, Routes, useLocation  } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import New from "./pages/New";
import Products from "./pages/Products";
import Discount from "./pages/Discount";
import BestSeller from "./pages/BestSeller";
import Terms from "./pages/Terms";
import Return from "./pages/Return";
import Register from "./pages/Register";
import ShopProduct from "./pages/ShopProduct"
import Wishlist from "./pages/Wishlist";
import { useEffect } from "react";
import BasketFormSection from "./pages/BasketFormSection";
import Login from "./pages/Login";
import Detailes from "./pages/Detailes";
import Contact from "./pages/Contact";


function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<New />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/return" element={<Return />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/new" element={<Products/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/shopproduct" element={<ShopProduct/>} />
        <Route path="/shopproduct/:order" element={<BasketFormSection/>} />
        <Route path="/products" element={<Products/>} />
        {/* <Route path="/products/:categoryName" element={<Detailes/>}/> */}
        <Route path="/products/:categoryName" element={<Products/>} />
        <Route path="/products/:categoryName/:subcategoryName" element={<Products/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
