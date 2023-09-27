import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
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
