import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Terms from "./pages/Terms";
import Return from "./pages/Return";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import { useEffect, useState } from "react";
import BasketFormSection from "./pages/BasketFormSection";
import Login from "./pages/Login";
import Detailes from "./pages/Detailes";
import Contact from "./pages/Contact";
import Loading from "./components/loading/Loading";
import Shoping from "./pages/Shoping";
import Comparison from "./pages/Comparison";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {/* <Loading loading={loading} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shoping" element={<Shoping />} />
        <Route path="/shopproduct/:order" element={<BasketFormSection />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:comparison" element={<Comparison />} />
        <Route path="/products/:categoryName" element={<Products />} />
        <Route
          path="/products/:categoryName/:subCategoryName"
          element={<Products />}
        />
        <Route
          path="/products/:categoryName/:subCategoryName/:productName"
          element={<Detailes />}
        />
        <Route path="/products/new" element={<Products />} />
        <Route path="/products/discounts" element={<Products />} />
        <Route path="/products/best-sellers" element={<Products />} />
        <Route path="/return" element={<Return />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
