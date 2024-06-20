import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import CategoryPage from "./pages/CategoryPage";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer/Footer";
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/mens" element={<CategoryPage banner={men_banner} category="men" />} />
          <Route path="/womens" element={<CategoryPage banner={women_banner} category="women" />} />
          <Route path="/kids" element={<CategoryPage banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
