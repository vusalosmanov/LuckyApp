import { Navigate, Route, Routes, useLocation  } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/shopproduct" element={<ShopProduct/>} />
        <Route path="/shopproduct/:order" element={<BasketFormSection/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:categoryName" element={<Products/>} />
        <Route path="/products/:categoryName/:subCategoryName" element={<Products/>} />
        <Route path="/products/new" element={<Products />} />
        <Route path="/products/discounts" element={<Products />} />
        <Route path="/products/best-sellers" element={<Products />} />
        <Route path="/detailes/:productName" element={<Detailes/>} />
        <Route path="/return" element={<Return />} />
        <Route path="*" element={<Navigate to='/404' />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
