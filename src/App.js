import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryProduct from "./pages/CategoryProduct";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categoryproduct" element={<CategoryProduct/>}/>
    </Routes>
    </>
  );
}

export default App;
