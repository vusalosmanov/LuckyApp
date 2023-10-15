import { Route, Routes } from "react-router-dom";
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


function App() {
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
        <Route path="/return" element={<Return />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/shopproduct" element={<ShopProduct/>} />
        {/* <Route path="/products/new" element={<Products/>} /> */}
        <Route path="/products/:categoryName" element={<Products/>} />
        <Route path="/products/:categoryName/:subcategoryName" element={<Products/>} />
        {/* <Route path="/404" element={<NoPage />} />
        <Route path="*" element={<Navigate to='/404' />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
