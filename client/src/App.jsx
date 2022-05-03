// css
import "./assets/css/shop.css";
import "./assets/css/home.css";
import "./assets/css/style.css";
import "./assets/css/styles.css";
import './App.css';

// react
import { Routes, Route } from "react-router-dom";
import Home from "./feature/Home/home";
import Product from "./feature/Product/product";
import ProductDetails from "./feature/Product/productDetail";
import Menu from "./feature/Menu/menuFood";

import Page_404 from './feature/Error/error404';
import Login from "./feature/Login/login";
import Layout from './layout/layout';
function App() {
  return (

    <>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='' element={<Product />} />
          <Route path=':productId' element={<ProductDetails />} />
          <Route path='id/:abc' element={<Menu />}></Route>
        </Route>
        {/* <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/app' element={<App />}>
          <Route path='*' element={<Page_404 />}></Route>
        </Route> */}

      </Routes>
    </>

  );
}

export default App;
